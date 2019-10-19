import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {feed, soothe, changeDiaper} from './actions/babyActions';

function App() {
  const crying = useSelector(state => state.baby.crying);
  const eating = useSelector(state => state.baby.hungry);
  const changes = useSelector(state => state.baby.remainingChanges);
  const dispatch = useDispatch();
  
   return (
     <div>
       <h1>Baby Reducer</h1>
       <button onClick={() => dispatch(feed())}>Feed the baby</button> 
      <h3>Baby is hungry? {eating}</h3>
      <button onClick={() => dispatch(soothe())}>Soothe baby</button>
       <h4>Baby is crying? {crying}</h4>
       <button onClick={() => dispatch(changeDiaper())}>Change baby's diaper</button>
       <h4>Remaining Diaper changes? {changes}</h4>
     </div>
   );
    
  
}

export default App;
