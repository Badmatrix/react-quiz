import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = String(Math.floor(secondsRemaining / 60)).padStart(2, 0);
  const secs = String(secondsRemaining % 60).padStart(2,0);
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins}:{secs}
    </div>
  );
}
