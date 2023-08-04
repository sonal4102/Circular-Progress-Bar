import React from 'react';
import CircularProgress from './CircularProgress';

function App() {
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <CircularProgress startValue={0} endValue={100} speed={100} text="Loading Indicator" />
    </div>
  );
}

export default App;
