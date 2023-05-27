import { H1, HeroWrap, Text } from './Hero.styled';

const Hero = () => {
  return (
    <HeroWrap>
      <H1>Welcome to Phone Book</H1>
      <Text>
        supports the ability to register, login, and user updates, and work with
        a private collection of contacts
      </Text>
    </HeroWrap>
  );
};

export default Hero;
