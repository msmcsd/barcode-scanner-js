import React from 'react';
import './App.css';
import BarcodeScannerComponent from './BarcodeScannerComponent';

function App() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <h1>Hello</h1>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default App;
