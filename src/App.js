import { useState, useRef } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UsersList } from './components/UsersList/UsersList';

function App() {

  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState(null);

  const searchInput = useRef(null);

  const onEnterPressed = async (e) => {
    if(e.keyCode === 13 && userName.trim() !== '') {
      await fetch(`https://api.github.com/search/users?q=${userName}`)
      .then(res => res.json())
      .then(data => setUsers(data.items))
      searchInput.current.blur();
     }
  }

   return (
    <div>
      <Header 
        userName={userName} setUserName={setUserName} 
        onEnterPressed={onEnterPressed} 
        searchInput={searchInput} />
      {users && <UsersList users={users} />}
    </div>
  );
}

export default App;
