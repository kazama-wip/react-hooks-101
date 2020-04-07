import React, { useState } from "react";


const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const increment2 = () => {
    setCount(previousCount =>
      previousCount + 1
    )
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount - 1)
  }
  const reset = () => {
    setCount(previousCount => previousCount * 0)
  }
  const double = () => {
    setCount(previousCount => previousCount * 2)
  }
  const three = () => {
    setCount(previousCount => {
      if (previousCount % 3 === 0) {
        return previousCount / 3
      } else {
        return previousCount
      }

    }
    )
  }

  return (
    <React.Fragment>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>
          +1
          </button>
        <button onClick={decrement}>
          -1
          </button>
      </div>
      <div>
        <button onClick={increment2}>
          +1
          </button>
        <button onClick={decrement2}>
          -1
          </button>
      </div>
      <div>
        <button onClick={reset}>
          Reset
          </button>
        <button onClick={double}>
          x2
          </button>
        <button onClick={three}>
          3の倍数のときだけで割る
          </button>
      </div>
    </React.Fragment>
  );
}

export default App;
