import {
  Blob,
  Button,
  Container,
  GlobalStyle,
  Hero,
  Navbar,
} from "./App.styles"

const NavigationBar = (): JSX.Element => {
  return (
    <Navbar.Wrapper>
      <Navbar.Content>
        <Navbar.Logo
          src="/assets/revamped_landing_page/logo.png"
          alt="SkillDeck"
        />
        <Button sm>Join Waitlist</Button>
      </Navbar.Content>
    </Navbar.Wrapper>
  )
}

const HeroSection = (): JSX.Element => {
  return (
    <Hero.Wrapper>
      <Hero.Headline>
        Resumes are Dead. <br />
        <Hero.Highlight>This is the future.</Hero.Highlight>
      </Hero.Headline>
      <Hero.Description>
        Build a portfolio in minutes. Land jobs and clients.
      </Hero.Description>
      <Button md>Join Waitlist</Button>
      <Hero.Video src="/video/SkillDeck.mp4" autoPlay loop />
    </Hero.Wrapper>
  )
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Container>
        <HeroSection />
        <Blob />
      </Container>
    </>
  )
}

export default App
