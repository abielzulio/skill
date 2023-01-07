import {
  Blob,
  Button,
  Container,
  GlobalStyle,
  Hero,
  Navbar,
  Testimonial,
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

const TestimonialSection = (): JSX.Element => {
  const PATH = "/assets/revamped_landing_page/company"
  const images = [
    PATH + "/adobe.png",
    PATH + "/coinbase.png",
    PATH + "/google.png",
    PATH + "/paypal.png",
    PATH + "/pinterest.png",
    PATH + "/shopee.png",
  ]
  return (
    <Testimonial.Wrapper>
      <Testimonial.Title>Loved by freelancers & students at</Testimonial.Title>
      <Testimonial.Content>
        {images.map((img, id) => (
          <Testimonial.Image src={img} key={id} />
        ))}
      </Testimonial.Content>
    </Testimonial.Wrapper>
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
      <Container>
        <TestimonialSection />
      </Container>
    </>
  )
}

export default App
