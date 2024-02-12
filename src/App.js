import React, { useState } from 'react';
import './App.css';
import BarcodeScannerComponent from "react-qr-barcode-scanner-updated";

function App() {
  const [data, setData] = useState("Not Found");
  const [stopStream, setStopStream] = useState(false)

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setStopStream(prev => !prev)}>Stop Stream={stopStream ? "true" : "false"}</button>
      <BarcodeScannerComponent
        width={500}
        height={500}
        stopStream={stopStream}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text);
            setStopStream(true)
          }
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default App;
