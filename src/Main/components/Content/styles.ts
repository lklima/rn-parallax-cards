import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

const { width } = Dimensions.get("window");

interface Props {
  offset: {
    top: number;
    left: number;
  };
}

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-family: Light;
  margin-bottom: 40px;
`;

export const Card = styled.View`
  width: ${width}px;
  align-items: center;
`;

export const CardContent = styled.View`
  height: 100%;
  width: ${width - 80}px;
  align-items: center;
  border-radius: 15px;

  overflow: hidden;
`;

export const CardHeader = styled.View`
  align-items: center;
  width: 100%;
  top: 80px;
  position: absolute;
  z-index: 999;
`;

export const CardDesc = styled.Text`
  color: white;
  font-family: Roboto;
  margin-bottom: 5px;
  letter-spacing: 2px;
`;

export const PlaceName = styled.Text`
  color: white;
  font-size: 60px;
  font-family: Bold;
  margin-bottom: 30px;
`;

export const CardButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.3);
`;

export const CardButtomText = styled.Text`
  color: white;
  font-family: Roboto;
  letter-spacing: 2px;
`;

export const Pic = styled(Animated.Image).attrs({
  resizeMode: "contain",
})<Props>`
  height: 120%;
  position: absolute;
  z-index: 99;

  ${({ offset }) =>
    offset.top &&
    css`
      top: ${offset.top}px;
    `}

  ${({ offset }) =>
    offset.left &&
    css`
      left: ${offset.left}px;
    `}
`;

export const Background = styled(Animated.Image).attrs({
  resizeMode: "contain",
})`
  height: 110%;
  margin-top: -20px;
`;

export const Desc = styled.Text`
  color: white;

  font-family: Roboto;
  letter-spacing: 5px;
  margin-top: 30px;
`;
