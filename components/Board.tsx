import { View, Text, StyleSheet, Pressable } from "react-native";
import TicBox from "./TicBox";

const Board = () => {
  return (
    <View style={styles.board}>
      <TicBox />
      <TicBox />
      <TicBox />
      <TicBox />
      <TicBox />
      <TicBox />
      <TicBox />
      <TicBox />
      <TicBox />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: '90%',
    aspectRatio: 1,
    margin: 'auto',
    backgroundColor: 'silver',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default Board;