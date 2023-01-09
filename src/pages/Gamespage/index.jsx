import * as C from './styles';

import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import Card  from '../../components/Card/index';

const Gamespage = () => {
  const api = useApi();

  const [gamePostsList, setGamePostsList] = useState([]);

  useEffect(() => {
    const post = async () => {
      const gamePosts = await api.getCategoryById("63ac925d872445065a588f61");
      setGamePostsList(gamePosts.posts);
      console.log(gamePostsList);
    } 
    post();
  }, []); 
 
  return (
    <C.Container>
      <C.LastNews>
        <h2>❌ Últimas notícias sobre Games</h2>
        <C.CardsContainer>
        {gamePostsList.map(post => {
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

export default Gamespage;