import logo from './logo.svg';
import './App.css';
import ProfilePhoto  from './ProfilePhoto';
import FullName from './FullName';

import Address from './Address';
import { getDefaultNormalizer } from '@testing-library/react';

function App() {
  const person = {
    firstName:"anwer",
    lastName:"ben saad"
}
const personAddress={Email:"anoirbensaad@gmail.com",}

  return (
    <div className="App" style={{backgroundColor:"#D3E4CD"}}>
    
       
        <ProfilePhoto />
<FullName person={person}/>
<Address personAddress={personAddress}/>
 </div>
  );
}

export default App;
