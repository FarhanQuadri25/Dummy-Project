import { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState([]);

  const serverDetails = async () => {
    try {
      const response = await fetch("/api/jokes");
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    serverDetails();
  }, []);

  return (
    <main>
      {state.map((item) => {
        const { id, category, type, joke } = item;
        return (
          <div key={id}>
            <h2>{category}</h2>
            <h3>{type}</h3>
            <p>{joke}</p>
          </div>
        );
      })}
    </main>
  );
};

export default App;
