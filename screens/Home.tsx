import { View, Text, SafeAreaView, Button, Alert, StyleSheet, Pressable } from "react-native";

const Home = () => {
    return (
        <SafeAreaView>
        <View style={styles.button}>
            <Button title="Continue"></Button>
        </View>
            <View style={styles.button}>
                <Button title="New Game"></Button>
            </View>
            <View style={styles.button}>
                <Button title="Creator" color={'gold'}></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '75%',
        padding: 10,
        alignSelf: 'center',
    },
});

export default Home;