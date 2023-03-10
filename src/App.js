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
  const [preloader, setPreloader] = useState(false);
  const [repoPreloader, setRepoPreloader] = useState(false);

  const searchInput = useRef(null);

  const onEnterPressed = async (e) => {
    if (e.keyCode === 13 && userName.trim() !== '') {
      setPreloader(true)
      await fetch(`https://api.github.com/search/users?q=${userName}`)
        .then(res => res.json())
        .then(data => {
          setUsers(data.items);
          setPreloader(false);
        })
      searchInput.current.blur();
      setIsDropdownVisible(true);
    }
  }

  useEffect(() => {
    if (userLogin) {
      setPreloader(true)
      fetch(`https://api.github.com/users/${userLogin}`)
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setPreloader(false);
        })
      setIsDropdownVisible(false);
    }
  }, [userLogin])

  useEffect(() => {
    if (userLogin) {
      setPreloader(true);
      fetch(`https://api.github.com/users/${userLogin}/repos`)
        .then(res => res.json())
        .then(data => {
          setRepositories(data);
          setRepoPreloader(false);
        })
    }
  }, [userLogin])

  return (
    <div className='mainContainer'>

      <Header userName={userName} setUserName={setUserName}
        onEnterPressed={onEnterPressed}
        searchInput={searchInput} />

      {!users && !preloader && <div className='startPage'>
        <img src={searchImg} alt="Search" />
        <h3>Start searching <br /> a GitHub user</h3>
      </div>}

      {isDropdownVisible && users && <UsersList users={users} setUserLogin={setUserLogin} />}

      {!preloader && users?.length === 0  && <div className='userNotFoundPage'>
        <img src={userImg} alt="UserNotFound" />
        <h3>User not found</h3>
      </div>
      }

      <div className='content'>
        {user && !preloader && <UserProfile user={user} />}

        <div className='repoWrapper'>
          {user && !preloader && repositories?.length > 0 && <Repostories repositories={repositories} />}

          {user && !preloader && repositories?.length === 0 && <div className='repositoriesNotFoundPage'>
            <img src={reposNotFoundImg} alt="RepositoriesNotFoundPage" />
            <h3>Repositories not found</h3>

          </div>}

        </div>
      </div>

      {preloader && <Preloader />}

    </div>
  );
}

export default App;
