import { View, Text, StyleSheet } from "react-native";

const Board = () => {
  return (
    <View style={styles.board}>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
      <View style={styles.box}><Text>O</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: '90%',
    aspectRatio: '1 / 1',
    margin: 'auto',
    backgroundColor: 'black',
    verticalAlign: 'middle',
    alignSelf: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  box: {
    width: '30%',
    height: '30%',
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Board;