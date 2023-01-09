import * as C from './styles';

import { useEffect, useState } from 'react';

import horizontalads from '../../assets/anuncio.png';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';

const Singlepost = () => {
  const api = useApi();
  const { id } = useParams();

  const [singlePost, setSinglePost] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const GetPost = async () => {
      const post = await api.getPostById(id);
      setSinglePost(post);
    }  
    GetPost();
  }, []);

  useEffect(() => {
    const GetPopularPosts = async () => {
      const allPopularPosts = await api.getPopularById("63b5a895fbb93698183d75d2");
      setPopularPosts(allPopularPosts.PopularPosts);
    }  
    GetPopularPosts();
  }, []);


  return (
    <C.Container>
        <C.Adsense>
          <img src={horizontalads} alt="" />
        </C.Adsense>
        <C.Title>
            <h2>{singlePost.title}</h2>
        </C.Title>
        <C.ImgContainer>
            <img src={singlePost.img} alt="" />
            <p>{singlePost.createdAt}</p>
        </C.ImgContainer> 
        <C.Text>
            <h4>
              {singlePost.desc}
            </h4>
        </C.Text>
        <C.Adsense>
          <img src={horizontalads} alt="" />
        </C.Adsense>
        <C.Relatedposts>
            <h2> ❌ Posts em destaque</h2>
        </C.Relatedposts>
        <C.Relatedcards>
        <C.CardsContainer>
        {popularPosts.map(post => {
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
      </C.Relatedcards>
    </C.Container>
  )
}

export default Singlepost;