import React from "react";
import { StatusBar } from "react-native";
import { Ionicons, SimpleLineIcons, Octicons } from "@expo/vector-icons";

import { Bottom, Container, Header } from "./styles";
import Content from "./components/Content";

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <SimpleLineIcons name="menu" size={24} color="white" />
        <Ionicons name="person-outline" size={28} color="white" />
      </Header>
      <Content />
      <Bottom>
        <Octicons name="home" size={26} color="white" />
        <Octicons name="heart" size={26} color="#b4b4b4" />
        <Octicons name="search" size={26} color="#b4b4b4" />
      </Bottom>
    </Container>
  );
}
