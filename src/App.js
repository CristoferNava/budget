import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [leftAmout, setLeftAmount] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Form 
            setAmount={setAmount}
            setLeftAmount={setLeftAmount}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
