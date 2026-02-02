class StatsCalculator:
    @staticmethod
    def calculate_fatigue_score(events, duration_min):
        """Calculates a score from 0-100. Higher means more fatigued."""
        if duration_min == 0: return 0
        
        frequency = len(events) / duration_min
        # Basic heuristic: 1 alert per min = 20 points, capped at 100
        score = min(100, frequency * 20)
        return round(score, 1)

    @staticmethod
    def get_intensity_breakdown(events):
        breakdown = {"Critical": 0, "Warning": 0}
        for e in events:
            breakdown[e['level']] = breakdown.get(e['level'], 0) + 1
        return breakdown