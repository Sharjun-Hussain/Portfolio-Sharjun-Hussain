import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="lightblue"
      glarePosition="all"
    >
      <h1>Hello World</h1>`
    </Tilt>
  );
};

export default Hero;
