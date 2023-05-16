import { BallTriangle } from 'react-loader-spinner';
import { Div } from './Loader.styled';

const Loader = () => {
  return (
    <Div>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#336fb3df"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Div>
  );
};

export default Loader;
