import React from "react";
import { FlatList, Dimensions } from "react-native";
import {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import {
  Title,
  Container,
  Desc,
  Card,
  Pic,
  Background,
  CardDesc,
  PlaceName,
  CardHeader,
  CardButtom,
  CardButtomText,
} from "./styles";

import { places } from "./utils";

const { width } = Dimensions.get("screen");

export default function Content() {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: 10,
  });

  const picAniamtedStyle = useAnimatedStyle(() => {
    const qx = animatedSensor.sensor.value.qx;
    return {
      transform: [{ translateX: withTiming(qx * 80, { duration: 100 }) }],
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const qx = animatedSensor.sensor.value.qx;
    return {
      transform: [{ translateX: withTiming(qx * 300, { duration: 50 }) }],
    };
  });

  const itemWidth = width - 100;
  const snapToOffsets = places.map((_, i) => {
    if (i === 0) return 0;
    else {
      return i * (itemWidth + 30) + 5;
    }
  });
  console.log("snapToOffsets", snapToOffsets);

  return (
    <Container>
      <Title>Exclusive trips just for you</Title>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <Card>
            <CardHeader>
              <CardDesc>FEATURED</CardDesc>
              <PlaceName>{item.name}</PlaceName>
              <CardButtom>
                <CardButtomText>EXPLORE</CardButtomText>
              </CardButtom>
            </CardHeader>
            <Pic
              source={item.photo}
              offset={item.offset}
              style={picAniamtedStyle}
            />
            <Background source={item.bg} style={backgroundAnimatedStyle} />
          </Card>
        )}
      />
      <Desc>OTHER OFFERS</Desc>
    </Container>
  );
}
