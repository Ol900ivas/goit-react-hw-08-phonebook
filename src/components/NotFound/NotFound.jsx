import Oops from '../../images/oops.jpg';
import { BsArrowLeft } from 'react-icons/bs';
import {
  NotFoundWrap,
  Message,
  Img,
  Div,
  StyledLink,
  Span,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <NotFoundWrap>
        <Img src={Oops} alt="Not found" width={600} />
        <Message>Sorry, page not found!</Message>
        <Div>
          <StyledLink to="/">
            <BsArrowLeft size={20} />
            <Span> Go Home</Span>
          </StyledLink>
        </Div>
      </NotFoundWrap>
    </main>
  );
};

export default NotFound;
