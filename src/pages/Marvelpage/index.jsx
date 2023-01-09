import * as C from './styles';

import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import Card  from '../../components/Card/index';

const Marvelpage = () => {
  const api = useApi();

  const [marvelPostsList, setMarvelPostsList] = useState([]);

  useEffect(() => {
    const post = async () => {
      const marvelPosts = await api.getCategoryById("63ade51c4cbbd498656dbbb8");
      setMarvelPostsList(marvelPosts.posts);
      console.log(marvelPosts);
    } 
    post();
  }, []); 
 
  return (
    <C.Container>
      <C.LastNews>
        <h2>❌ Últimas notícias sobre Marvel e DC</h2>
        <C.CardsContainer>
        {marvelPostsList.map(post => {
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

export default Marvelpage;