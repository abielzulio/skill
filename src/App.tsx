import {
  Blob,
  Button,
  COLOR,
  Company,
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

const CompanySection = (): JSX.Element => {
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
    <Company.Wrapper>
      <Company.Title>Loved by freelancers & students at</Company.Title>
      <Company.Content>
        {images.map((img, id) => (
          <Company.Image src={img} key={id} />
        ))}
      </Company.Content>
    </Company.Wrapper>
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
      <Heading.One style={{ textAlign: "center" }}>
        You're two clicks away from glory.
      </Heading.One>
      <Button md style={{ marginTop: "32px" }}>
        Join Waitlist
      </Button>
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

const JoinPoolSection = (): JSX.Element => {
  return (
    <Section.Homepage
      backgroundImg={ASSET_PATH + "/bg-join-pool.png"}
      style={{ marginTop: "62px", marginBottom: "62px" }}
    >
      <Heading.Two>Join Our Talent Pool</Heading.Two>
      <Heading.Three style={{ fontWeight: 400 }}>
        SkillDeck portfolios get up to 5x higher traffic.
      </Heading.Three>
    </Section.Homepage>
  )
}

const TestimonialSection = (): JSX.Element => {
  const PATH = ASSET_PATH + "/fake-users"
  const TESTIMONIALS = [
    {
      img: PATH + "/1.png",
      name: "Darlene Robertson",
      handle: "@darlens",
      message:
        "This app has made it so easy for me to find and manage freelance work, and I've been able to grow my business thanks to it",
    },
    {
      img: PATH + "/2.png",
      name: "Devon Lane",
      handle: "@devon",
      message: "This app has helped me find high-quality clients and projects.",
    },
    {
      img: PATH + "/3.png",
      name: "Devon Lane",
      handle: "@lane",
      message:
        "This app has made it so much easier for me to find and manage freelance work, and the payment system is secure and convenient.",
    },
    {
      img: PATH + "/2.png",
      name: "Darlene Robertson",
      handle: "@darlens",
      message:
        "This app has made it so easy for me to find and manage freelance work, and I've been able to grow my business thanks to it",
    },
    {
      img: PATH + "/3.png",
      name: "Devon Lane",
      handle: "@lane",
      message:
        "This app has made it so much easier for me to find and manage freelance work, and the payment system is secure and convenient.",
    },
    {
      img: PATH + "/1.png",
      name: "Devon Lane",
      handle: "@devon",
      message: "This app has helped me find high-quality clients and projects.",
    },
  ]
  return (
    <Section.Homepage style={{ marginTop: "62px", marginBottom: "62px" }}>
      <Features.Heading.Subtitle>EASY-TO-USE</Features.Heading.Subtitle>
      <Heading.Two>For Devs, Designers, and more.</Heading.Two>
      <Heading.Three style={{ fontWeight: 400 }}>
        They love us. You will too.
      </Heading.Three>
      <Testimonial.Wrapper>
        {TESTIMONIALS.map((item, id) => (
          <Testimonial.Item key={id}>
            <div style={{ display: "flex", gap: "1em" }}>
              <img src={item.img} alt={item.name} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3em",
                }}
              >
                <p style={{ fontWeight: 500 }}>{item.name}</p>
                <p style={{ opacity: 0.5 }}>{item.handle}</p>
              </div>
            </div>
            <p>{item.message}</p>
          </Testimonial.Item>
        ))}
      </Testimonial.Wrapper>
    </Section.Homepage>
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
        <CompanySection />
      </Container>
      <Container>
        <Blob
          width="60%"
          height="80%"
          opacity={0.2}
          borderRadius="80%"
          left="0%"
          bottom="0"
        />
        <FeatureOneSection />
      </Container>
      <Container>
        <FeaturesTwoSection />
      </Container>
      <Container>
        <JoinPoolSection />
      </Container>
      <Container>
        <TestimonialSection />
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
