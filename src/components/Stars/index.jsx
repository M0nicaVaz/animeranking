import { Container } from './styled';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

export function Stars({ ratings }) {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    const star = i < ratings ? AiFillStar : AiOutlineStar;
    stars = [...stars, star];
  }

  return (
    <Container>
      {stars.map((Star, index) => (
        <Star key={String(index)} />
      ))}
    </Container>
  );
}
