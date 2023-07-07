import { NextUIProvider } from '@nextui-org/react';
import { Card, Grid, Text, Link, Col, Row, Button } from '@nextui-org/react';

function App() {
  return (
    // https://openweathermap.org/current - API
    <NextUIProvider>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '1rem',
      }}>
        <Card css={{ p: "$4", mw: "400px" }}>
          <Card.Header>
            <img
              alt="nextui logo"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width="34px"
              height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Next UI
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>nextui.org</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>
              Make beautiful websites regardless of your design experience.
            </Text>
          </Card.Body>
          <Card.Footer>
            <Link
              icon
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </Card.Footer>
        </Card>
        <Card css={{ w: "300px", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                New
              </Text>
              <Text h3 color="black">
                Acme camera
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://nextui.org/images/card-example-6.jpeg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                  Available soon.
                </Text>
                <Text color="#000" size={12}>
                  Get notified.
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="secondary">
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Notify Me
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    </NextUIProvider>
  );
}

export default App;
