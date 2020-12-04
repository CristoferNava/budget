import React, { Fragment, useState } from 'react';
import Error from './Error';

const Form = ({setAmount, setLeftAmount}) => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const checkBudget = e => {
    setBudget(parseInt(e.target.value));
  }

  // Submit to validate and set the budget
  const addBudget = e => {
    e.preventDefault();
    console.log(budget);
    

    // Validate
    if (budget < 0 || isNaN(budget)) {
      setError(true);
      return;
    }

    // If pass the validation
    setError(false);
    setAmount(budget);
    setLeftAmount(budget);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error /> : null}
      <form onSubmit={addBudget}>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Introduce tu presupuesto: "
          onChange={checkBudget}
        />

        <input 
          type="submit"
          className="button-primary u-full-width"
          value="Establecer presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Form;