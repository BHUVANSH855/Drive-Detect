# Drive-Detect

Dataset - https://www.kaggle.com/datasets/meowmeowmeowmeowmeow/gtsrb-german-traffic-sign
Traffic Sign Classification using CNN (PyTorch + ONNX)

This project implements a Convolutional Neural Network (CNN) model for classifying Traffic signs. The model is trained using PyTorch and exported to both .pth and .onnx formats for flexibility and deployment.

# Features:
- Custom CNN architecture with convolutional layers.
- Trained on 39,209 images.
- Visualizes predictions and dataset samples.
- Script to test predictions on a directory of images.
- ONNX compatibility ensures easy integration with non-PyTorch environments.
- Prediction visualization with confidence scores using Matplotlib and OpenCV.

# Project Structure:

- `dataset.py`: Download dataset directly to the directory by running this script.
- `diff_signs.py`: Print all type of Images in different classes.
- `main.py`: Trains and saves the CNN model in .pth and .onnx.
- `model_test_dir.py`: Runs predictions on a folder of images using both models with batch visualization.
- `model_test_images.py`: Runs predictions on a image using both models with visualization.
- `model_test_randomInput.py`: Runs predictions on a random input using both models.
- `visualize_predictions.py`: Visualization utilities for displaying predictions with confidence scores.
- `traffic_sign_model.onnx`: Trained model with .onnx extension.
- `traffic_sign_model.pth`: Trained model on pytorch library.


## 🚀 Quickstart for Contributors

This section helps new contributors quickly run the project locally without needing deep ML experience.

### 1. Clone the repository

```bash
git clone https://github.com/<repo-owner>/drive-detect.git
cd drive-detect

```


### 2. Create and activate a virtual environment

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux / Mac
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Download the dataset

Run the dataset script:

```bash
python dataset.py
```

This will download and prepare the dataset automatically.

### 5. Run a quick training test

You can run a short test training (1 epoch) to verify everything works:

```bash
python main.py
```

If training starts without errors, your setup is successful.

---

##  Common Errors & Fixes

| Problem                                | Likely Cause               | Fix                                                             |
| -------------------------------------- | -------------------------- | --------------------------------------------------------------- |
| `FileNotFoundError: dataset not found` | Dataset not downloaded     | Run `python dataset.py` first                                   |
| Kaggle API error                       | Missing Kaggle credentials | Set `KAGGLE_USERNAME` and `KAGGLE_KEY` as environment variables |
| CUDA out of memory                     | GPU memory insufficient    | Reduce batch size or run on CPU                                 |
| `ModuleNotFoundError`                  | Dependencies not installed | Run `pip install -r requirements.txt`                           |
| Training very slow                     | Running on CPU             | This is expected without a GPU                                  |

---

## 🤝 For New Contributors

If you're new to the project:

* Start with small improvements (docs, cleanup, helper scripts)
* Feel free to open issues for questions
* Keep PRs focused and easy to review

Every contribution helps improve the project!
