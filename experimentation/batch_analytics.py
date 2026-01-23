import os
# Fix for OMP: Error #15
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

import time
import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image

# Fallback for missing libraries to prevent crashes
try:
    import pandas as pd
    from tqdm import tqdm
except ImportError:
    print("📦 Installing missing dependencies (pandas, tqdm)...")
    os.system('pip install pandas tqdm')
    import pandas as pd
    from tqdm import tqdm

# --- 1. Model Architecture ---
class TrafficSignCNN(nn.Module):
    def __init__(self):
        super(TrafficSignCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(128 * 4 * 4, 512)
        self.fc2 = nn.Linear(512, 43)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = self.pool(F.relu(self.conv3(x)))
        x = x.view(-1, 128 * 4 * 4)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# --- 2. Class Mapping ---
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

transform = transforms.Compose([
    transforms.Resize((32, 32)),
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

def run_batch_analysis(input_folder):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    model = TrafficSignCNN().to(device)
    model_path = os.path.join(current_dir, "traffic_sign_model.pth")
    
    if not os.path.exists(model_path):
        print(f"❌ Error: Model weights not found at {model_path}")
        return

    model.load_state_dict(torch.load(model_path, map_location=device))
    model.eval()

    results = []
    valid_exts = ('.png', '.jpg', '.jpeg')
    
    if not os.path.exists(input_folder):
        print(f"❌ Error: Folder '{input_folder}' does not exist.")
        return

    images = [f for f in os.listdir(input_folder) if f.lower().endswith(valid_exts)]

    if not images:
        print("⚠️ No valid images found in the specified folder.")
        return

    print(f"🚀 Batch Analysis Started | Images: {len(images)} | Device: {device}")

    for img_name in tqdm(images, desc="Analyzing"):
        img_path = os.path.join(input_folder, img_name)
        try:
            image = Image.open(img_path).convert('RGB')
            
            # Start profiling with high precision
            start_time = time.perf_counter()
            img_tensor = transform(image).unsqueeze(0).to(device)
            
            with torch.no_grad():
                output = model(img_tensor)
                prob = torch.nn.functional.softmax(output, dim=1)
                conf, pred = torch.max(prob, 1)
            
            latency = (time.perf_counter() - start_time) * 1000 
            
            results.append({
                "Filename": img_name,
                "Prediction": CLASSES.get(pred.item(), "Unknown"),
                "Confidence": f"{conf.item()*100:.2f}%",
                "Latency_ms": round(latency, 2)
            })
        except Exception as e:
            print(f"\n❌ Error processing {img_name}: {e}")

    # Generate Export
    df = pd.DataFrame(results)
    report_dir = os.path.join(current_dir, "reports")
    os.makedirs(report_dir, exist_ok=True)
    report_path = os.path.join(report_dir, "batch_inference_report.csv")
    df.to_csv(report_path, index=False)

    print("\n" + "="*40)
    print(f"📊 REPORT GENERATED: {report_path}")
    print(f"⏱️ Average Latency: {df['Latency_ms'].mean():.2f} ms")
    print(f"🎯 Most Common Sign: {df['Prediction'].mode()[0]}")
    print("="*40)

if __name__ == "__main__":
    import sys
    target_folder = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "test_folder"
    run_batch_analysis(target_folder)