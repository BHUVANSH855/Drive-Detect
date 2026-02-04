import time
import json
import os

class SessionLogger:
    def __init__(self):
        self.start_time = time.time()
        self.drowsy_events = []
        self.logs_dir = "logs"
        if not os.path.exists(self.logs_dir):
            os.makedirs(self.logs_dir)

    def log_event(self, ear_value, level="Warning"):
        """Logs a single drowsiness detection event."""
        event = {
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "elapsed_sec": round(time.time() - self.start_time, 2),
            "ear": round(ear_value, 3),
            "level": level
        }
        self.drowsy_events.append(event)

    def get_summary(self):
        duration = time.time() - self.start_time
        return {
            "session_date": time.strftime("%Y-%m-%d"),
            "total_duration_min": round(duration / 60, 2),
            "total_alerts": len(self.drowsy_events),
            "events": self.drowsy_events
        }