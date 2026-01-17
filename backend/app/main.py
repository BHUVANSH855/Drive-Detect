from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import pathlib
import logging
from app.model import TrafficSignModel
from app.utils import preprocess_image

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

# Load the model
model_path = pathlib.Path(__file__).parent.parent / "traffic_sign_model.onnx"
model = TrafficSignModel(str(model_path))

@app.get("/")
async def root():
    return {"message": "Traffic Sign Classification API"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Predict the traffic sign class from an uploaded image.
    
    Args:
        file: Image file upload
    
    Returns:
        JSON with predictions
    """
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        # Read image
        contents = await file.read()
        logger.info(f"Received image: {file.filename}, size: {len(contents)} bytes")
        image = Image.open(io.BytesIO(contents))
        logger.info(f"Image opened: {image.size}, mode: {image.mode}")
        
        # Preprocess
        input_data = preprocess_image(image)
        logger.info(f"Preprocessed data shape: {input_data.shape}, dtype: {input_data.dtype}")
        
        # Predict
        result = model.predict(input_data)
        logger.info(f"Prediction successful")
        
        return result
    
    except Exception as e:
        logger.error(f"Prediction failed: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")