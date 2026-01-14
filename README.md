# Drive-Detect

Dataset - https://www.kaggle.com/datasets/meowmeowmeowmeowmeow/gtsrb-german-traffic-sign
Traffic Sign Classification using CNN (PyTorch + ONNX)

This project implements a Convolutional Neural Network (CNN) model for classifying Traffic signs. The model is trained using PyTorch and exported to both .pth and .onnx formats for flexibility and deployment.

#Features:
- Custom CNN architecture with convolutional layers.
- Trained on 39,209 images.
- Visualizes predictions and dataset samples.
- Script to test predictions on a directory of images.
- ONNX compatibility ensures easy integration with non-PyTorch environments.
- Prediction visualization with confidence scores using Matplotlib and OpenCV.

#Project Structure:

- `dataset.py`: Download dataset directly to the directory by running this script.
- `diff_signs.py`: Print all type of Images in different classes.
- `main.py`: Trains and saves the CNN model in .pth and .onnx.
- `model_test_dir.py`: Runs predictions on a folder of images using both models with batch visualization.
- `model_test_images.py`: Runs predictions on a image using both models with visualization.
- `model_test_randomInput.py`: Runs predictions on a random input using both models.
- `visualize_predictions.py`: Visualization utilities for displaying predictions with confidence scores.
- `traffic_sign_model.onnx`: Trained model with .onnx extension.
- `traffic_sign_model.pth`: Trained model on pytorch library.
