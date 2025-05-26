import { useState } from 'react';

const App = () => {
    let [count, setCount] = useState(0);

    const addIncrement = () =>  setCount(count + 1);
    const addDecrement = () => setCount(count - 1);
    const resetZero = () => setCount(0);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addIncrement}> +1 </button>
      <button onClick={addDecrement}> -1 </button>
      <button onClick={resetZero}> Set to zero </button>
    </>
  );
}

export default App;
