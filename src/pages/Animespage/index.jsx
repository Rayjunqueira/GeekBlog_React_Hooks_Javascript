import * as C from './styles';

import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import Card  from '../../components/Card/index';

const Animespage = () => {
  const api = useApi();

  const [animePostsList, setAnimePostsList] = useState([]);

  useEffect(() => {
    const post = async () => {
      const animePosts = await api.getCategoryById("63ac9ac537d4ce8b279caf22");
      setAnimePostsList(animePosts.posts);
      console.log(animePosts);
    } 
    post();
  }, []); 
 
  return (
    <C.Container>
      <C.LastNews>
        <h2>❌ Últimas notícias sobre Animes</h2>
        <C.CardsContainer>
        {animePostsList.map(post => {
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

export default Animespage;