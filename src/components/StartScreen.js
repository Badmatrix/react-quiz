export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome To My React Quiz</h2>
      <h3>{numQuestions} Questions To Test Your React Knowledge </h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'start'})}>
        let's start
      </button>
    </div>
  );
}
