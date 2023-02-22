import styled from 'styled-components'

export const ContainerIllustration404 = styled.section`
  width: 100%;

  #handboy {
    width: 100%;
    animation: swing ease-in-out 1.3s infinite alternate;
    transform-origin: 98% 98%;
    transform-box: fill-box;
  }

  #girllight {
    animation: swing ease-in-out 1.3s infinite alternate;
    transform-origin: 0% 97%;
    transform-box: fill-box;
  }

  #hairgirl {
    animation: swinghair ease-in-out 1.3s infinite alternate;
    transform-origin: 60% 0%;
    transform-box: fill-box;
  }

  #zero {
    transform-origin: bottom;
    transform-box: fill-box;
    animation: zeroanimation ease 1.3s infinite alternate;
  }

  /*************swing************/
  @keyframes zeroanimation {
    0% {
      scale: 1;
      transform: rotateY(180deg);
    }
    50% {
      scale: 1.4;
    }
    100% {
      scale: 1;
      transform: rotateY(0deg);
    }
  }
  /*************swing************/
  @keyframes swing {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  /*************swing hair************/
  @keyframes swinghair {
    0% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotate(-6deg);
    }
  }
`
