import json
import os

class Exporter:
    @staticmethod
    def save_to_file(summary, text_report):
        filename = f"logs/drive_log_{int(summary['total_alerts'])}_alerts.json"
        
        # Save JSON data
        with open(filename, 'w') as f:
            json.dump(summary, f, indent=4)
            
        # Save Text Report
        with open(filename.replace(".json", ".txt"), 'w') as f:
            f.write(text_report)
            
        print(f"Analytics saved to {filename}")