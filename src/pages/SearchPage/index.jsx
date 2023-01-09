import * as C from './styles';

import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card  from '../../components/Card/index';

const SearchPage = () => {
    const api = useApi();
    const { search } = useParams();

    const [searchedPosts, setSearchedPosts] = useState([]);

    useEffect(() => {
        const posts = async () => {
          const allPost = await api.getAllPosts();
          const mapPosts = await allPost.filter(post => post.title.toLowerCase().includes(search));
          setSearchedPosts(mapPosts);
        } 
        posts();
      }, []);
    
  return (
    <C.Container>
        <C.CardsContainer>
        {searchedPosts.map(post => {
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
    </C.Container>
  )
}

export default SearchPage;