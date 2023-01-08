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
  borderRadius?: string
  animationDuration?: number
  variant?: "primary" | "secondary"
  animate?: boolean
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
    secondary:
      "linear-gradient(140.28deg, #81F0FF 16.13%, #676DFF 83.35%), #4A6ADC",
    tertiary:
      "linear-gradient(140.28deg, #E681FF 16.13%, #6A67FF 83.35%), #D04ADC",
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
  Homepage: styled("section")<{ backgroundImg?: string }>`
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

    &::before {
      content: " ";
      display: block;
      z-index: -1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-radius: 20px;
      height: 100%;
      opacity: 0.5;
      background-image: ${(props) =>
        props.backgroundImg ? `url(${props.backgroundImg})` : "unset"};
      background-size: ${(props) => (props.backgroundImg ? `cover` : "unset")};
      background-repeat: no-repeat;
      background-position: 0% 0%;
      transition: all 0.5s ease;
    }

    &:hover::before {
      opacity: 0.8;
      background-position: 0% 50%;
    }
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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    height: 72px;
    backface-visibility: hidden;
    will-change: backdrop-filter;
    position: fixed;
    width: 100%;
    z-index: 50;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 2px 0 rgba(225, 225, 225, 0.08);

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
    max-width: 1110px;
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
  overflow: hidden;
  border-radius: ${(props) => props.borderRadius ?? "100%"};
  width: ${(props) => props.width ?? "50%"};
  height: ${(props) => props.height ?? "50%"};
  background: ${(props) => {
    if (!props.variant)
      return `linear-gradient(
      97.31deg,
      ${COLOR.solid.yellow} 1.09%,
      ${COLOR.solid.pink} 102.56%
    ),
    linear-gradient(
      97.31deg,
      ${COLOR.solid.purple} 1.09%,
      ${COLOR.solid.violet} 102.56%
    )`
    if (props.variant === "primary") return COLOR.gradient.primary
    if (props.variant === "secondary") return COLOR.gradient.secondary
  }};
  filter: blur(300px);
  animation: ${(props) =>
    props.animate
      ? `bop ${props.animationDuration ?? "10"}s ease infinite`
      : "none"};

  @keyframes bop {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.3);
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

export const Features = {
  Wrapper: styled(Section.Homepage)`
    gap: 5em;
    padding-bottom: 124px;
  `,
  Content: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    justify-content: center;
  `,
  Heading: {
    Subtitle: styled(Text.Gradient)`
      text-transform: uppercase;
      text-align: center;
    `,
    Title: styled(Heading.Two)`
      text-align: center;
    `,
  },
  Flex: {
    Wrapper: styled("div")<{ isReverse?: boolean }>`
      width: 100%;
      display: flex;
      flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
      gap: 2em;
    `,
    Item: styled.div`
      display: flex;
      width: 50%;
      height: 100%;
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
      gap: 1em;
    `,
  },
  Grid: {
    Wrapper: styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2em;
    `,
    Item: styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
      gap: 1em;
    `,
  },
}

export const Feature = {
  Two: {
    Item: styled(Features.Grid.Item)<{
      background?: { color: string | undefined; icon?: string | undefined }
    }>`
      background: transparent;
      position: relative;
      padding: 32px;
      overflow: hidden;
      border-radius: 20px;
      -webkit-box-shadow: inset 0px 0px 0px 2px rgba(225, 225, 225, 0.08);
      -moz-box-shadow: inset 0px 0px 0px 2px rgba(225, 225, 225, 0.08);
      box-shadow: inset 0px 0px 0px 2px rgba(225, 225, 225, 0.08);

      &::after {
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        z-index: -1;
        position: absolute;
        opacity: 0.3;
        filter: blur(100px);
        backdrop-filter: blur(8px);
        transition: all 0.5s ease;
        -webkit-backdrop-filter: blur(8px);
        background: ${(props) => props.background?.color ?? "transparent"};
      }

      &::before {
        content: url(${(props) => props.background?.icon ?? ""});
        top: 12px;
        right: 36px;
        bottom: 0;
        width: 50px;
        height: 50px;
        transform: scale(3);
        z-index: -1;
        position: absolute;
        opacity: 0.5;
        mix-blend-mode: overlay;
        transition: all 0.5s ease;
        background: transparent;
      }

      &:hover::before {
        opacity: 1;
        right: 54px;
        transform: scale(4);
      }

      &:hover::after {
        opacity: 0.6;
        filter: blur(50px);
      }
    `,
    Icon: {
      Wrapper: styled("div")<{ background?: string }>`
        width: 88px;
        height: 88px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 88px;
        border-radius: 16px;
        background: ${(props) => props.background ?? "transparent"};

        // background scale
      `,
      Content: styled.embed`
        transition: transform 0.5s ease;
        transform: scale(1);

        /*         ${Features.Grid.Item}:hover & {
          transform: scale(1.1);
        } */
      `,
    },
  },
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
