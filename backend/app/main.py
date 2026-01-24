from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from fastapi.responses import PlainTextResponse
import io
import pathlib
import logging
import time
from .model import TrafficSignModel
from .utils import preprocess_image
import os

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Traffic Sign Classification API", version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Determine model path (allow override via MODEL_PATH env var) and attempt to load it (log existence)
# Notes for Render:
# - CWD is typically the repo root: /opt/render/project/src
# - Prefer setting MODEL_PATH to a repo-relative path like "backend/traffic_sign_model.onnx"
env_path = os.environ.get("MODEL_PATH")
if env_path:
    p = pathlib.Path(env_path).expanduser()
    model_path = p if p.is_absolute() else (pathlib.Path.cwd() / p).resolve()
else:
    # Default to backend/traffic_sign_model.onnx (repo layout)
    model_path = (pathlib.Path(__file__).parent.parent / "traffic_sign_model.onnx").resolve()

logger.info(f"Expected model path: {model_path}")
logger.info(f"Model file exists: {model_path.exists()}")

model = None
def load_model():
    global model
    try:
        if model_path.exists():
            model = TrafficSignModel(str(model_path))
            logger.info("Model loaded successfully")
        else:
            model = None
            logger.error("Model file not found at startup")
    except Exception as e:
        model = None
        logger.error(f"Failed to load model: {e}", exc_info=True)

# Initial load
load_model()

@app.get("/")
async def root():
    return {"message": "Traffic Sign Classification API"}


@app.head("/")
async def root_head():
    # Respond to HEAD checks (some monitors use HEAD)
    return PlainTextResponse(status_code=200)


@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Predict the traffic sign class from an uploaded image.
    
    Args:
        file: Image file upload
    
    Returns:
        JSON with predictions and processing time
    """
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        # Record start time
        start_time = time.time()
        
        # Read image
        contents = await file.read()
        logger.info(f"Received image: {file.filename}, size: {len(contents)} bytes")
        image = Image.open(io.BytesIO(contents))
        logger.info(f"Image opened: {image.size}, mode: {image.mode}")
        
        # Preprocess
        input_data = preprocess_image(image)
        logger.info(f"Preprocessed data shape: {input_data.shape}, dtype: {input_data.dtype}")
        
        # Predict
        if model is None:
            logger.error("Prediction requested but model is not loaded")
            raise HTTPException(status_code=500, detail="Model not loaded on server")
        result = model.predict(input_data)
        logger.info(f"Prediction successful")
        
        # Calculate processing time
        processing_time = time.time() - start_time
        
        # Return response with processing time
        return {
            "predictions": result["predictions"],
            "processing_time": round(processing_time, 3)
        }
    
    except Exception as e:
        logger.error(f"Prediction failed: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")


@app.get("/model-info")
async def model_info():
    """Return basic information about the model file on disk."""
    path = model_path
    exists = path.exists()
    size = path.stat().st_size if exists else None
    return {"model_path": str(path), "exists": exists, "size_bytes": size}


@app.post("/reload-model")
async def reload_model():
    """Attempt to reload the model from disk (useful after uploading model file)."""
    load_model()
    path = model_path
    exists = path.exists()
    return {"model_path": str(path), "exists": exists, "model_loaded": model is not None}