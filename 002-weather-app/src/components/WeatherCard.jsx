import { useState } from "react";
import { Card, Grid, Text, Link } from "@nextui-org/react";

import Input from "./Input";
import WeatherResultsCard from "./WeatherResultsCard";
export default function WeatherCard() {
  const [cityTerm, setCityTerm] = useState("");

  const updateCityTerm = (e) => {
    setCityTerm(e.target.value);
  };

  return (
    <div className="w-75 h-75">
      <Card css={{ p: "$6", mw: "100%", overflow: "hidden" }}>
      {/* <Input
        className="w-100 p-2 rounded-0 border-0 bg-white"
        onInput={updateCityTerm}
      />
      {cityTerm}
      <WeatherResultsCard /> */}
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
    </div>
  );
}
