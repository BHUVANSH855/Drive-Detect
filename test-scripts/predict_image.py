import os
import sys

# Workaround for OpenMP duplicate library error
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

import torch
import torch.nn as nn
import torch.nn.functional as F
import cv2
import numpy as np
from PIL import Image
from torchvision import transforms

# --- 1. Model Definition 
class TrafficSignCNN(nn.Module):
    def __init__(self):
        super(TrafficSignCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        # Added conv3 because your error mentioned 'conv3.weight'
        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1) 
        self.pool = nn.MaxPool2d(2, 2)
        
        # Adjusted size to 2048 to fix the 'size mismatch' error
        self.fc1 = nn.Linear(128 * 4 * 4, 512) 
        self.fc2 = nn.Linear(512, 43)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x))) # 32x32 -> 16x16
        x = self.pool(F.relu(self.conv2(x))) # 16x16 -> 8x8
        x = self.pool(F.relu(self.conv3(x))) # 8x8 -> 4x4
        x = x.view(-1, 128 * 4 * 4)          # Flatten
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# --- 2. Full GTSRB Class Mapping ---
CLASSES = {
    0: 'Speed limit (20km/h)', 1: 'Speed limit (30km/h)', 2: 'Speed limit (50km/h)',
    3: 'Speed limit (60km/h)', 4: 'Speed limit (70km/h)', 5: 'Speed limit (80km/h)',
    6: 'End of speed limit (80km/h)', 7: 'Speed limit (100km/h)', 8: 'Speed limit (120km/h)',
    9: 'No passing', 10: 'No passing for vehicles over 3.5 metric tons',
    11: 'Right-of-way at the next intersection', 12: 'Priority road', 13: 'Yield',
    14: 'Stop', 15: 'No vehicles', 16: 'Vehicles over 3.5 metric tons prohibited',
    17: 'No entry', 18: 'General caution', 19: 'Dangerous curve to the left',
    20: 'Dangerous curve to the right', 21: 'Double curve', 22: 'Bumpy road',
    23: 'Slippery road', 24: 'Road narrows on the right', 25: 'Road work',
    26: 'Traffic signals', 27: 'Pedestrians', 28: 'Children crossing',
    29: 'Bicycles crossing', 30: 'Beware of ice/snow', 31: 'Wild animals crossing',
    32: 'End of all speed and passing limits', 33: 'Turn right ahead',
    34: 'Turn left ahead', 35: 'Ahead only', 36: 'Go straight or right',
    37: 'Go straight or left', 38: 'Keep right', 39: 'Keep left',
    40: 'Roundabout mandatory', 41: 'End of no passing',
    42: 'End of no passing by vehicles over 3.5 metric tons'
}

def predict_image(img_path):
    # Setup directory for model and output
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 1. Setup Device & Model
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = TrafficSignCNN().to(device)
    
    # Check for model weights
    model_path = os.path.join(current_dir, "traffic_sign_model.pth")
    if not os.path.exists(model_path):
        print(f"Error: {model_path} not found! Please ensure your .pth file is in the experimentation folder.")
        return

    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()

    # 2. Preprocessing
    transform = transforms.Compose([
        transforms.Resize((32, 32)),
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])

    # 3. Load Image
    original_cv_img = cv2.imread(img_path)
    if original_cv_img is None:
        print(f"Error: Could not open image at {img_path}")
        return

    # Convert to PIL for transforms
    img_rgb = cv2.cvtColor(original_cv_img, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(img_rgb)
    input_tensor = transform(pil_img).unsqueeze(0).to(device)

    # 4. Inference
    with torch.no_grad():
        output = model(input_tensor)
        probabilities = torch.nn.functional.softmax(output, dim=1)
        confidence, predicted = torch.max(probabilities, 1)
        
        class_id = predicted.item()
        label = CLASSES.get(class_id, f"Sign ID: {class_id}")
        conf_score = confidence.item() * 100

    # 5. UI Overlay and Save
    display_text = f"{label} ({conf_score:.2f}%)"
    print(f"Predicted: {display_text}")

    output_img = original_cv_img.copy()
    # Draw a black rectangle at the top for better text visibility
    cv2.rectangle(output_img, (0, 0), (output_img.shape[1], 40), (0, 0, 0), -1)
    cv2.putText(output_img, display_text, (10, 30), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # Save to outputs folder
    output_folder = os.path.join(current_dir, "outputs")
    os.makedirs(output_folder, exist_ok=True)
    save_path = os.path.join(output_folder, f"result_{os.path.basename(img_path)}")
    cv2.imwrite(save_path, output_img)
    print(f"Success! Result saved to: {save_path}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        predict_image(sys.argv[1])
    else:
        print("Usage: python predict_image.py <path_to_image>")