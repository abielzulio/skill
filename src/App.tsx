import {
  Blob,
  Button,
  COLOR,
  Container,
  Feature,
  Features,
  Footer,
  GlobalStyle,
  Heading,
  Hero,
  Navbar,
  Section,
  Testimonial,
  Text,
} from "./App.styles"

interface Feature {
  icon: { src: string; background?: string }
  title: string
  description: string
}

const ASSET_PATH = "/assets/revamped_landing_page"

const LOGO_PATH = ASSET_PATH + "/logo.png"

const NavigationBar = (): JSX.Element => {
  return (
    <Navbar.Wrapper>
      <Navbar.Content>
        <Navbar.Logo src={LOGO_PATH} alt="SkillDeck" />
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
  const PATH = ASSET_PATH + "/company"
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

const FeatureOneSection = (): JSX.Element => {
  const PATH = ASSET_PATH + "/features/one"
  const FEATURES: Feature[] = [
    {
      icon: { src: PATH + "/build.svg" },
      title: "Build a Portfolio in Minutes",
      description:
        "Give us links to your projects & content, and we'll give you a stunning portfolio you'll adore.",
    },
    {
      icon: { src: PATH + "/share.svg" },
      title: "Share it to the World",
      description:
        "Attach your SkillDeck link on social media & your resume. Show the world what you've built.",
    },
    {
      icon: { src: PATH + "/land.svg" },
      title: "Land Jobs. Make Cash",
      description:
        "Get discoverable by hundreds of companies, and land job offers straight in your inbox.",
    },
  ]
  return (
    <Features.Wrapper>
      <Features.Content>
        <Features.Heading.Subtitle>Personalized</Features.Heading.Subtitle>
        <Features.Heading.Title>
          A portfolio that works for you
        </Features.Heading.Title>
      </Features.Content>
      <Features.Content>
        {FEATURES.map((item, id) => (
          <Features.Flex.Wrapper key={id} isReverse={!(id % 2 === 0)}>
            <Features.Flex.Item>
              <embed type="image/svg+xml" src={item.icon.src} />
              <h4 style={{ color: "white", fontSize: "1.5em" }}>
                {item.title}
              </h4>
              <p style={{ color: "white" }}>{item.description}</p>
              {/*               {id === 0 && <p style={{ color: "white" }}>{item.description}</p>} */}
            </Features.Flex.Item>
            <Features.Flex.Item>
              <div
                style={{
                  display: "block",
                  width: "100%",
                  height: "200px",
                  opacity: 0.8,
                  borderRadius: "20px",
                  background: COLOR.gradient.primary,
                }}
              />
            </Features.Flex.Item>
          </Features.Flex.Wrapper>
        ))}
      </Features.Content>
    </Features.Wrapper>
  )
}

const FeaturesTwoSection = (): JSX.Element => {
  const PATH = ASSET_PATH + "/features/two"
  const FEATURES: Feature[] = [
    {
      icon: {
        src: PATH + "/tell.svg",
        background: COLOR.gradient.primary,
      },
      title: "Build a Portfolio in Minutes",
      description:
        "Give us links to your projects & content, and we'll give you a stunning portfolio you'll adore.",
    },
    {
      icon: {
        src: PATH + "/import.svg",
        background: COLOR.gradient.primary,
      },
      title: "Share it to the World",
      description:
        "Attach your SkillDeck link on social media & your resume. Show the world what you've built.",
    },
    {
      icon: {
        src: PATH + "/land.svg",
        background: COLOR.gradient.secondary,
      },
      title: "Land Jobs. Make Cash",
      description:
        "Get discoverable by hundreds of companies, and land job offers straight in your inbox.",
    },
    {
      icon: {
        src: PATH + "/view.svg",
        background: COLOR.gradient.tertiary,
      },
      title: "Get View Notifications",
      description: "Be notified when someone views your SkillDeck Portfolio.",
    },
  ]
  return (
    <Features.Wrapper>
      <Features.Content>
        <Features.Heading.Subtitle>EASY-TO-USE</Features.Heading.Subtitle>
        <Features.Heading.Title>
          Simple to Build. A Pleasure to Read.
        </Features.Heading.Title>
      </Features.Content>
      <Features.Content>
        <Feature.Two.Item
          background={{
            color: COLOR.gradient.tertiary,
          }}
        >
          <Heading.Three>Templates to Get Started</Heading.Three>
          <p style={{ color: "white" }}>
            Use our library of 20+ templates to help you story-tell better.
          </p>
        </Feature.Two.Item>
        <Features.Grid.Wrapper>
          {FEATURES.map((item, id) => (
            <Feature.Two.Item
              key={id}
              background={{ color: item.icon.background, icon: item.icon.src }}
            >
              <Feature.Two.Icon.Wrapper background={item.icon.background}>
                <Feature.Two.Icon.Content
                  type="image/svg+xml"
                  src={item.icon.src}
                />
              </Feature.Two.Icon.Wrapper>
              <Heading.Three>{item.title}</Heading.Three>
              <p style={{ color: "white" }}>{item.description}</p>
            </Feature.Two.Item>
          ))}
        </Features.Grid.Wrapper>
      </Features.Content>
    </Features.Wrapper>
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
        <Footer.Logo src={LOGO_PATH} alt="SkillDeck" height="18px" />
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
        <Blob borderRadius="30%" animate />
      </Container>
      <Container>
        <TestimonialSection />
      </Container>
      <Container>
        <FeatureOneSection />
      </Container>
      <Container>
        <FeaturesTwoSection />
      </Container>
      <Container>
        <CTASection />
        <Blob
          width="40%"
          height="100%"
          opacity={0.5}
          borderRadius="100%"
          left="40%"
          bottom="-100px"
        />
      </Container>
      <Container>
        <FooterSection />
      </Container>
    </>
  )
}

export default App
