import { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Conditional Rendering with Ternary Operator */}
      <div>{isLoggedIn ? <p>Welcome!</p> : <p>Please log in</p>}</div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'log out' : 'log in'}
      </button>
    </div>
  );
}
