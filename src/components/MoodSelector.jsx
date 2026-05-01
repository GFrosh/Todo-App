import "../styles/selector.css";
import { MOODS } from "../moodConfig";

function MoodSelector({ currentMood, setCurrentMood }) {
	const moods = Object.keys(MOODS);

	return (
		<div className="mood-selector">
			<h2>Select Your Mood</h2>
			<div className="mood-grid">
				{moods.map((mood) => (
					<button
						key={mood}
						onClick={() => setCurrentMood(mood)}
						className={currentMood === mood ? "selected" : ""}
						aria-label={MOODS[mood].label}
						aria-pressed={currentMood === mood}
					>
						<span className="mood-emoji">{MOODS[mood].emoji}</span>
						{MOODS[mood].label}
					</button>
				))}
			</div>
		</div>
	);
}

export default MoodSelector;
