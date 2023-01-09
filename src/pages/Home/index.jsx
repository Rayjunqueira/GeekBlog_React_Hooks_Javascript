import * as C from './styles';

import PopularCards from '../../components/PopularCards';

import horizontalads from '../../assets/anuncio.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import Card from '../../components/Card';

const Home = () => {
  const navigate = useNavigate();
  const api = useApi();

  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  const handleSinglePost = () => {
    navigate('/singlepost');
  }

  useEffect(() => {
    const post = async () => {
      const lastPosts = await api.getAllPosts();
      setPosts(lastPosts);
    } 
    post();
  }, []);

  return (
    <C.Container>
      <C.Adsense>
        <img src={horizontalads} alt="" />
      </C.Adsense>
      <C.LastNews>
        <h2>❌ Últimas notícias</h2>
        <C.CardsContainer>
        {posts.map(post => {
          return (
            <Card 
              title={post.title}
              date={post.createdAt}
              img={post.img}
              category={post.category.name}
              color={post.category.color}
              id={post._id}
            />
          )
        })}
        </C.CardsContainer>
      </C.LastNews>
    </C.Container>
  )
}

export default Home;