```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>
      {showComponent && <MyComponent />}
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
    </div>
  );
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('MyComponent mounted');
    return () => {
      console.log('MyComponent unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```