import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl text-amber-950 text-center">Tes Tailwind</h1>
      </div>
    </>
  );
}

export default App;
