import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Repostories } from './components/Repostories/Repostories';
import { UserProfile } from './components/UserProfile/UserProfile';
import { UsersList } from './components/UsersList/UsersList';

function App() {

  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [userLogin, setUserLogin] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [repositories, setRepositories] = useState(null);

  const searchInput = useRef(null);

  const onEnterPressed = async (e) => {
    if (e.keyCode === 13 && userName.trim() !== '') {
      await fetch(`https://api.github.com/search/users?q=${userName}`)
        .then(res => res.json())
        .then(data => setUsers(data.items))
      searchInput.current.blur();
      setIsDropdownVisible(true);
    }
  }

  useEffect(() => {
    if (userLogin) {
      fetch(`https://api.github.com/users/${userLogin}`)
        .then(res => res.json())
        .then(data => setUser(data))
      setIsDropdownVisible(false);
    }
  }, [userLogin])

  useEffect(() => {
    if (userLogin) {
      fetch(`https://api.github.com/users/${userLogin}/repos`)
        .then(res => res.json())
        .then(data => setRepositories(data))
    }
  }, [userLogin])

  return (
    <div>
      <Header userName={userName} setUserName={setUserName}
        onEnterPressed={onEnterPressed}
        searchInput={searchInput} />
      {isDropdownVisible && users && <UsersList users={users} setUserLogin={setUserLogin} />}
      <div className='content'>
      {user && <UserProfile user={user} />}
      {user && <Repostories repositories={repositories} /> }
      </div>
    </div>
  );
}

export default App;
