import * as C from './styles';

import { useNavigate } from 'react-router-dom';

const Card = ({img, date, title, category, color, id}) => {  
    const navigate = useNavigate();

    const handleSinglePost = () => {
        navigate(`/singlepost/${id}`)
        window.location.reload(false);
    }

  return (
    <C.Card onClick={handleSinglePost}>
        <C.ImgContainer>
            <img src={img} alt="" />
            <C.Cat>
                <p> {date}</p>
                <p id='cat' style={{backgroundColor: color}}> {category}</p>
            </C.Cat>
            <h2>{title}</h2>
        </C.ImgContainer>
    </C.Card>
    )
}

export default Card;