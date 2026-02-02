from .stats_calculator import StatsCalculator

class ReportGenerator:
    def __init__(self, summary):
        self.summary = summary

    def generate_text_report(self):
        score = StatsCalculator.calculate_fatigue_score(
            self.summary['events'], 
            self.summary['total_duration_min']
        )
        
        report = [
            "=== DRIVE-DETECT SESSION REPORT ===",
            f"Date: {self.summary['session_date']}",
            f"Duration: {self.summary['total_duration_min']} minutes",
            f"Total Alerts Triggered: {self.summary['total_alerts']}",
            f"Fatigue Score: {score}/100",
            "-----------------------------------",
            "Detailed Events:"
        ]
        
        for e in self.summary['events']:
            report.append(f"[{e['timestamp']}] Alert! EAR: {e['ear']}")
            
        return "\n".join(report)