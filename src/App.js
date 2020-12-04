import Form from './components/Form';
import Expenses from './components/Expenses';
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

          <div className="row">
            <div className="one-half column">
              <Expenses />
            </div>

            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
