import { useState } from 'react';
import { WzButton } from './components';
import {
  Button,
  FluentProvider,
  webLightTheme,
} from '@fluentui/react-components';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FluentProvider theme={webLightTheme}>
        <Button appearance="primary">Hello Fluent UI</Button>
        <WzButton appearance="secondary">Hello </WzButton>
      </FluentProvider>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
