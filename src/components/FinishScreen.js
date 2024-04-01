export default function FinishScreen({ points, maxPoints, dispatch}) {
  const avgPerc = (points / maxPoints) * 100;
  return (
    <div>
      <p className="result">
        you score <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(avgPerc)}% )
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}
