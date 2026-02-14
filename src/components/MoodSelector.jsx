function MoodSelector({ currentMood, setCurrentMood }) {
  const moods = ["happy", "sad", "angry", "serious", "lazy"];

  return (
    <div>
      <h2>Select Mood</h2>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => setCurrentMood(mood)}
          style={{
            margin: "5px",
            padding: "8px",
            fontWeight: currentMood === mood ? "bold" : "normal"
          }}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
