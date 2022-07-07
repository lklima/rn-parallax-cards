import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
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

export default function Content() {
  const { width } = useWindowDimensions();
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, { interval: 10 });

  const picAniamtedStyle = useAnimatedStyle(() => {
    const qx = Math.abs(animatedSensor.sensor.value.qx);
    return {
      transform: [{ translateX: withTiming(qx * 80, { duration: 100 }) }],
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const qx = Math.abs(animatedSensor.sensor.value.qx);
    return {
      transform: [{ translateX: withTiming(qx * 300, { duration: 50 }) }],
    };
  });

  const previewCount = 3;
  const itemWidth = width / (previewCount + 0.5);
  const startScroll = (itemWidth * 3) / 4;
  const snapToOffsets = places.map((_, i) => i * itemWidth + startScroll);

  return (
    <Container>
      <Title>Exclusive trips just for you</Title>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate={0}
        snapToInterval={width}
        snapToAlignment="center"
        snapToOffsets={snapToOffsets}
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
            <Pic source={item.photo} offset={item.offset} style={picAniamtedStyle} />
            <Background source={item.bg} style={backgroundAnimatedStyle} />
          </Card>
        )}
      />
      <Desc>OTHER OFFERS</Desc>
    </Container>
  );
}
