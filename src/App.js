// import Search from './search';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

//const URL = "https://random-data-api.com/api/v2/credit_cards"

function App() {
  const [number, setNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [type, setType] = useState('')


  useEffect(() => {
  //axios.get(URL)
  .then((response) => {
    console.log(response.data)
    setNumber(response.data.credit_card_number)
    setExpiryDate(response.data.credit_card_expiry_date)
    setType(response.data.credit_card_type)
  }).catch((error) => {
    alert(error) 
  })
}, [])

  return (
    <div>

      <h3>Randomly selected credit cards</h3>
      <p>number: {number}</p>
      <p>expiryDate: {expiryDate}</p>
      <p>type: {type}</p>
    </div>
  );
}


export default App;
