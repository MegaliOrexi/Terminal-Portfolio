import React from 'react';
import Terminal from "./Terminal";
import TypedText from './animatedTexts';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <TypedText />
      <Terminal />
    </div>
  );
}

export default App;
