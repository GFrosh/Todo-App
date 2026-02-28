import "../styles/selector.css";

function MoodSelector({ currentMood, setCurrentMood }) {
  const moods = ["happy", "sad", "angry", "serious", "lazy"];

  return (
    <div className="mood-selector">
      <h2>Select Your Current Mood</h2>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => setCurrentMood(mood)}
		  className={currentMood === mood ? "selected" : ""}
		>
          {mood}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
