import * as C from './styles';

import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import Card  from '../../components/Card/index';

const Moviespage = () => {
  const api = useApi();

  const [moviePostsList, setMoviePostsList] = useState([]);

  useEffect(() => {
    const post = async () => {
      const moviePosts = await api.getCategoryById("63ade4ea4cbbd498656dbbb6");
      setMoviePostsList(moviePosts.posts);
      console.log(moviePosts);
    } 
    post();
  }, []); 
 
  return (
    <C.Container>
      <C.LastNews>
        <h2>❌ Últimas notícias sobre Filmes</h2>
        <C.CardsContainer>
        {moviePostsList.map(post => {
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

export default Moviespage;