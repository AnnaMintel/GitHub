import { useState, useRef, useEffect } from 'react';
import './App.css';
import searchImg from './img/search.svg';
import userImg from './img/user.svg';
import reposNotFoundImg from './img/notFound.svg';
import { Header } from './components/Header/Header';
import { Repostories } from './components/Repostories/Repostories';
import { UserProfile } from './components/UserProfile/UserProfile';
import { UsersList } from './components/UsersList/UsersList';
import { Preloader } from './components/Preloader/Preloader';

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
    <div className='mainContainer'>
      <Header userName={userName} setUserName={setUserName}
        onEnterPressed={onEnterPressed}
        searchInput={searchInput} />

      {!users && <div className='startPage'>
        <img src={searchImg} alt="Search" />
        <h3>Start searching <br /> a GitHub user</h3>
      </div>}

      {isDropdownVisible && users && <UsersList users={users} setUserLogin={setUserLogin} /> }
      
      { !user && !userLogin  && !onEnterPressed && <div className='userNotFoundPage'>
          <img src={userImg} alt="UserNotFound" />
          <h3>User not found</h3>
        </div>
      }

      <div className='content'>
        {user && <UserProfile user={user} />}
        {user && repositories && <Repostories repositories={repositories} />}

        {user && !repositories && <div className='repositoriesNotFoundPage'>
          <img src={reposNotFoundImg} alt="RepositoriesNotFoundPage" />
          <h3>Repositories not found</h3>
        </div>}
      </div>

      <Preloader />

    </div>
  );
}

export default App;
