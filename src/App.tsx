import {
  Blob,
  Button,
  Container,
  GlobalStyle,
  Hero,
  Navbar,
  Testimonial,
  Text,
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
        <Text.Gradient>This is the future.</Text.Gradient>
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

const CTASection = (): JSX.Element => {
  return (
    <Section.Homepage>
      <Heading.One>You're two clicks away from glory.</Heading.One>
      <Button md>Join Waitlist</Button>
    </Section.Homepage>
  )
}
const FooterSection = (): JSX.Element => {
  return (
    <Footer.Wrapper>
      <Footer.Content>
        <Footer.Logo
          src="/assets/revamped_landing_page/logo.png"
          alt="SkillDeck"
          height="18px"
        />
        <p style={{ color: `${COLOR.solid.white}` }}>
          © {new Date(Date.now()).getFullYear()} SkillDeck. All rights reserved.
        </p>
      </Footer.Content>
    </Footer.Wrapper>
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
      <Container>
        <CTASection />
        <Blob width="30%" height="100%" opacity={0.5} left="35%" />
      </Container>
      <Container>
        <FooterSection />
      </Container>
    </>
  )
}

export default App
