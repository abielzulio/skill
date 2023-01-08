import styled, { createGlobalStyle } from "styled-components/macro"

interface ButtonProps {
  md?: boolean
  sm?: boolean
}

interface BlobProps {
  bottom?: string
  left?: string
  opacity?: number
  width?: string
  height?: string
}

export const COLOR = {
  transparent: "transparent",
  solid: {
    black: "#000000",
    white: "#ffffff",
    yellow: "#FDB400",
    pink: "#FD73B4",
    purple: "#e681ff",
    violet: "#6a67ff ",
  },
  gradient: {
    primary: "linear-gradient(45deg, #FDB400 15.42%, #FD73B4 84.04%)",
  },
}

const FONT_SIZE = {
  md: "1em",
  sm: "0.8em",
}

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-Black.otf') format("opentype");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-BlackItalic.otf') format("opentype");
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-Bold.otf') format("opentype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-BoldItalic.otf') format("opentype");
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-Medium.otf') format("opentype");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-MediumItalic.otf') format("opentype");
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-Regular.otf') format("opentype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-RegularItalic.otf') format("opentype");
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-Light.otf') format("opentype");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-LightItalic.otf') format("opentype");
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-Thin.otf') format("opentype");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "Test Geograph";
    src: local("Test Geograph"), url('/fonts/TestGeograph-ThinItalic.otf') format("opentype");
    font-style: italic;
    font-weight: 100;
    font-display: swap;
  }
  

`

export const Heading = {
  One: styled.h1`
    letter-spacing: -1px;
    font-weight: 600;
    font-size: 4em;
    color: ${COLOR.solid.white};
  `,
  Two: styled.h2`
    color: ${COLOR.solid.white};
    font-size: 2.8em;
  `,
  Three: styled.h3`
    color: ${COLOR.solid.white};
    font-size: 1.5em;
  `,
}

export const Section = {
  Homepage: styled.section`
    height: 100%;
    position: relative;
    display: flex;
    margin: 0 auto 0;
    padding: 124px 0px;
    width: 100%;
    z-index: 10;
    max-width: 1030px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  `,
}

export const Text = {
  Gradient: styled.span`
    background: ${COLOR.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s ease infinite;
    background-size: 200% 200%;
    background-clip: text;
    text-fill-color: transparent;

    @keyframes gradient {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% 100%;
      }
    }
  `,
}
export const Button = styled("button")<ButtonProps>`
  display: inline-block;
  position: relative;
  background: ${COLOR.gradient.primary};
  border-color: ${COLOR.transparent};
  border-radius: 2em;
  color: ${COLOR.solid.black};
  font-size: ${(props) => {
    if (props.sm) return FONT_SIZE.sm
    if (props.md) return FONT_SIZE.md
  }};
  font-weight: 600;
  padding: 0.5em 2em;
  background-size: 200% 200%;
  background-origin: border-box;
  background-position: 100% 100%;
  transition: all 0.5s;
  text-align: center;
  cursor: pointer;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &::after {
    content: "→";
    position: absolute;
    opacity: 0;
    right: -0.6em;
    transition: 0.5s;
  }

  &:hover {
    background-position: 0% 0%;
    padding-right: 2.6em;
    padding-left: 1.4em;
  }

  &:hover::after {
    opacity: 1;
    right: 1em;
  }
`

export const Navbar = {
  Wrapper: styled.nav`
    background-color: ${COLOR.solid.black};
    display: flex;
    height: 72px;
    position: fixed;
    width: 100%;
    z-index: 50;

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        -45deg,
        ${COLOR.solid.yellow} 0%,
        ${COLOR.solid.pink} 100%
      );
      transform: translate3d(0px, 20px, 0) scale(0.95);
      filter: blur(50px);
      opacity: 0.3;
      transition: opacity 1s;
      border-radius: inherit;
    }

    &:hover::before {
      opacity: 0.8;
    }

    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
    }
  `,
  Content: styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 0;
    max-width: 1030px;
    padding: 1em 2em 1em;
    width: 100%;
  `,
  Logo: styled("img")<{ height?: string }>`
    height: ${(props) => props.height ?? "24px"};
    object-fit: contain;
  `,
}

export const Container = styled.article`
  background-color: ${COLOR.solid.black};
  position: relative;
  width: 100%;
  height: 100%;
`

export const Blob = styled("span")<BlobProps>`
  bottom: ${(props) => props.bottom ?? "5%"};
  left: ${(props) => props.left ?? "25%"};
  opacity: ${(props) => props.opacity ?? 0.8};
  z-index: 1;
  position: absolute;
  width: ${(props) => props.width ?? "50%"};
  height: ${(props) => props.height ?? "50%"};
  background: linear-gradient(
      97.31deg,
      ${COLOR.solid.yellow} 1.09%,
      ${COLOR.solid.pink} 102.56%
    ),
    linear-gradient(
      97.31deg,
      ${COLOR.solid.purple} 1.09%,
      ${COLOR.solid.violet} 102.56%
    );
  filter: blur(300px);
  animation: bop 20s ease infinite;

  @keyframes bop {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.8);
    }
  }
`

export const Hero = {
  Wrapper: styled(Section.Homepage)`
    padding-bottom: 62px;
  `,
  Headline: styled(Heading.One)`
    text-align: center;
    margin: 0 auto 0;
    text-fill-color: ${COLOR.solid.white};
    -webkit-text-fill-color: ${COLOR.solid.white};
  `,
  Description: styled.p`
    font-size: 1.2em;
    color: ${COLOR.solid.white};
  `,

  Video: styled.video`
    width: 100%;
    padding: 2px;
    margin-top: 2em;
    border-radius: 2px;
    background: linear-gradient(45deg, ${COLOR.solid.yellow}, transparent);
    background-size: 300% 300%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 100%;
      }
      50% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% 100%;
      }
    }
  `,
}

export const Testimonial = {
  Wrapper: styled(Section.Homepage)`
    flex-wrap: wrap;
    padding-bottom: 124px;
  `,
  Title: styled.p`
    font-weight: 500;
    text-align: center;
    color: ${COLOR.solid.white};
    opacity: 0.5;
  `,
  Content: styled.div`
    width: 100%;
    position: relative;
    margin: 0 auto 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
  `,
  Image: styled.img`
    filter: grayscale(1) contrast(30%) saturate(0);
    opacity: 0.8;
    transition: all 0.5s;

    &:hover {
      opacity: 1;
      filter: grayscale(0) contrast(100%) saturate(1);
    }
  `,
}
export const Footer = {
  Wrapper: styled.footer`
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 -3px 0 rgba(225, 225, 225, 0.08);
    height: 120px;
    z-index: 50;
  `,
  Content: styled(Navbar.Content)`
    height: 100%;
  `,
  Logo: styled(Navbar.Logo)``,
}
