import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectFact } from './factsSlice';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const selectedFacts = useSelector(state => state.selectedFacts);

  const handleSubmit = (event) => {
      event.preventDefault();
      const { count } = event.target;
      dispatch(selectFact(count.value));
      console.log(selectedFacts)
  };

  const handleChange = (event) => {
      event.preventDefault();
      const { count } = event.target.value;
      setCount(count);
  };

  return (
    <>
      <form className=' flex w-500' onSubmit={ handleSubmit }>
            <input className=' border border-slate-900 m-4' name='count' type='number' onChange={ handleChange } value={ count } />
            <button className=' bg-slate-900 text-gray-50 m-4 px-4 py-1' type='submit'>Show</button>
      </form>
      <ul>
        { selectedFacts?.map( fact => <li key={ fact.id }>{ fact.text }</li>) }
      </ul>
    </>
  )
}

export default App
