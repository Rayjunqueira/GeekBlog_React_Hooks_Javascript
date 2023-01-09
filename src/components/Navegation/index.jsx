import * as C from './styles';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navegation = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');
  const [openNavBurger, setOpenNavBurger] = useState(false);

  const handleSearch = async () => {
    if (searchText) {
      navigate(`/searchpage/${searchText}`)
      window.location.reload(false);
    }
  }

  const handleBurger = () => {
    if (openNavBurger === false) {
      setOpenNavBurger(true);
    } else {
      setOpenNavBurger(false);
    }
  }
  
  const handleHome = () => {
    setSearchText('');
    navigate('/');
  }

  const handleAnimes = () => {
    navigate('/animes');
  }

  const handleMovies = () => {
    navigate('/movies');
  }

  const handleMarvel = () => {
    navigate('/marvel');
  }

  const handleGames = () => {
    navigate('/games');
  }

  return (
    <C.Container>
      <C.Navbar>
        <C.LogoContainer>
          <img src={logo} alt=""  onClick={handleHome}/>
        </C.LogoContainer>
        <C.Links>
          <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleMovies}>Filmes e séries</li>
            <li onClick={handleAnimes}>Animes</li>
            <li onClick={handleGames}>Games</li>
            <li onClick={handleMarvel}>Marvel e DC</li>
          </ul>
        </C.Links>
        <C.SocialNetworks>
          <i><FacebookIcon id='face'/></i>
          <i><InstagramIcon id='insta'/></i>
          <i><TwitterIcon id='twit'/></i>
        </C.SocialNetworks>
        <C.Burger>
          <MenuIcon id='icon_burger' onClick={handleBurger}/>
        </C.Burger>
      </C.Navbar>
      <C.Searchbar>
        <input 
          type="text" 
          placeholder='Busque por um tópico...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}><SearchIcon /></button>
      </C.Searchbar> 
      {openNavBurger ? (
        <C.NavbarMobile>
          <C.inputMobile>
            <input 
                type="text" 
                placeholder='Busque por um tópico...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}><SearchIcon /></button>
          </C.inputMobile>
            <C.MobileLinks>
              <ul>
                <li onClick={handleHome}>Home</li>
                <li onClick={handleMovies}>Filmes e séries</li>
                <li onClick={handleAnimes}>Animes</li>
                <li onClick={handleGames}>Games</li>
                <li onClick={handleMarvel}>Marvel e DC</li>
              </ul>
            </C.MobileLinks>
        </C.NavbarMobile>      
      ): null} 
    </C.Container>
  )
}

export default Navegation;