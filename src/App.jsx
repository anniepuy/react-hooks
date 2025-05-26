import { useState, useEffect } from 'react';

const App = () => {
    let [count, setCount] = useState(0);
    let [animal, setAnimal] = useState(
        ['dog', 'cat', 'bird', 'fish'][Math.floor(Math.random() * 4)]
    );

    const addIncrement = () =>  setCount(count + 1);
    const addDecrement = () => setCount(count - 1);
    const resetZero = () => setCount(0);

    useEffect(() => {
        console.log(animal);
    }, [animal]);
    
    useEffect(() => {
        console.log(count);
    }, [count]);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addIncrement}> +1 </button>
      <button onClick={addDecrement}> -1 </button>
      <button onClick={resetZero}> Set to zero </button>
      <hr/>
      <h3>{animal}</h3>
      <button onClick={() => setAnimal(['dog', 'cat', 'bird', 'fish'][Math.floor(Math.random() * 4)])}>
        Change animal
        </button>

    </>
  );
}

export default App;
