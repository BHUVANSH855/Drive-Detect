from PIL import Image
import numpy as np

def preprocess_image(image: Image.Image) -> np.ndarray:
    """
    Preprocess the input image for the traffic sign classification model.
    
    Args:
        image: PIL Image object
    
    Returns:
        numpy array of shape (1, 3, 32, 32) ready for ONNX inference
    """
    # Ensure RGB
    image = image.convert('RGB')
    
    # Resize to 32x32
    image = image.resize((32, 32))
    
    # Convert to numpy array and to CHW format
    image_array = np.array(image).astype(np.float32) / 255.0  # Normalize to [0,1]
    
    # Transpose to (C, H, W)
    image_array = np.transpose(image_array, (2, 0, 1))
    
    # Normalize with mean 0.5, std 0.5
    mean = np.array([0.5, 0.5, 0.5], dtype=np.float32).reshape(-1, 1, 1)
    std = np.array([0.5, 0.5, 0.5], dtype=np.float32).reshape(-1, 1, 1)
    image_array = (image_array - mean) / std
    
    # Add batch dimension and ensure float32
    input_numpy = image_array[np.newaxis, ...].astype(np.float32)
    
    return input_numpy