

import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import generateData from './generateData';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // time taken to load initial dataset
    const start = performance.now();
    const generatedData = generateData(100000);
    setData(generatedData);
    const end = performance.now();
    console.log('Time taken to load initial dataset:', end - start, 'ms');
  }, []);

  return (
    <div className="App">
      <h1>React Large Data POC</h1>
      <DataTable rows={data} />
    </div>
  );
}

export default App;


