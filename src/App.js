import firebase from "./firebase";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const db = firebase.database().ref("counter");

  useEffect(() => {
    db.on("value", (snapshot) => {
      const data = snapshot.val();
      setCount(data.value);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, [db]);

  return (
    <div className="App">
      {!loading ? (
        <h2 className={count < 1 ? "zero" : null}>{count}</h2>
      ) : (
        "Loading ..."
      )}
      <Button setCount={setCount} count={count} db={db} loading={loading} />
    </div>
  );
}

export default App;
