import time
from analytics import SessionLogger, ReportGenerator, Exporter

def test_drive_session():
    print("--- Starting Mock Drive Session ---")
    logger = SessionLogger()

    # Simulate 3 drowsiness detections
    for i in range(3):
        print(f"Simulating Alert {i+1}...")
        logger.log_event(ear_value=0.21, level="Critical")
        time.sleep(1) # Wait a second between mock alerts

    print("Session Ended. Generating Report...")
    
    # Process Data
    summary = logger.get_summary()
    report_gen = ReportGenerator(summary)
    text_report = report_gen.generate_text_report()
    
    # Export
    Exporter.save_to_file(summary, text_report)
    
    print("\n--- TEST SUCCESSFUL ---")
    print(text_report)

if __name__ == "__main__":
    test_drive_session()