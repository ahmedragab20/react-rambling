import { useEffect, useState } from "react";
import { Card, Text, Modal, Button, Grid, Row } from "@nextui-org/react";
import useTop6Cities from "../composables/use-top-6-cities";
import SearchInput from "./SearchInput";
import WeatherResultsCard from "./WeatherResultsCard";

export default function WeatherCard() {
  const [cityTerm, setCityTerm] = useState("");

  const updateCityTerm = (e) => {
    setCityTerm(e.target.value);
  };

  const top6Cities = useTop6Cities();
  const [top6CitiesDialog, setTop6CitiesDialog] = useState(false);
  const toggleTop6CitiesDialog = () => setTop6CitiesDialog(!top6CitiesDialog);

  return (
    <div className="w-75 h-75">
      <Card css={{ p: "$6", mw: "100%", overflow: "hidden" }}>
        <div className="mb-2">
          <Button color="gradient" auto ghost size="sm" onPress={toggleTop6CitiesDialog}>
            Top 6 Cities
          </Button>
        </div>
        <SearchInput onInput={updateCityTerm} />
        <WeatherResultsCard cityTerm={cityTerm} />
      </Card>

      <Modal
        aria-labelledby="modal-title"
        open={top6CitiesDialog}
        onClose={toggleTop6CitiesDialog}
      >
        <div className="d-flex">
          <Grid.Container gap={2} justify="flex-start">
            {top6Cities.map((city, index) => (
              <Grid xs={6} key={index}>
                <Card isPressable onClick={() => {
                  setCityTerm(city.city);
                  setTop6CitiesDialog(false);
                }}>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={city.img}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={city.city}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" align="center">
                      <Text b>{city.city}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </div>
      </Modal>
    </div>
  );
}
