import React from "react";
import { FlatList } from "react-native";
import { useAnimatedSensor, useAnimatedStyle } from "react-native-reanimated";

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
  CardContent,
} from "./styles";

import { places } from "./utils";

export default function Content() {
  const animatedSensor = useAnimatedSensor();

  const picAniamtedStyle = useAnimatedStyle(() => ({}));
  const backgroundAnimatedStyle = useAnimatedStyle(() => ({}));

  return (
    <Container>
      <Title>Exclusive trips just for you</Title>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate="fast"
        snapToAlignment="center"
        renderItem={({ item }) => (
          <Card>
            <CardContent>
              <CardHeader>
                <CardDesc>FEATURED</CardDesc>
                <PlaceName>{item.name}</PlaceName>
                <CardButtom>
                  <CardButtomText>EXPLORE</CardButtomText>
                </CardButtom>
              </CardHeader>
              <Pic source={item.photo} offset={item.offset} style={picAniamtedStyle} />
              <Background source={item.bg} style={backgroundAnimatedStyle} />
            </CardContent>
          </Card>
        )}
      />
      <Desc>OTHER OFFERS</Desc>
    </Container>
  );
}
