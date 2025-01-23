import { Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { Cross, Select } from "../assets/svg/marker";

interface TicBoxProps {
    isOn?: boolean;
    player?: 1 | 2;
}

const TicBox: React.FC<TicBoxProps> = ({ isOn=false, player }): React.ReactNode => {
    const [status, setStatus] = useState(isOn);

    const handlePress = () => {
        setStatus(!status);
        console.log("pressed");
    };

    return (<Pressable style={styles.ticBox} onPress={handlePress}>
        {status ? <Cross /> : <Select />}
    </Pressable>);
};

const styles = StyleSheet.create({
    ticBox: {
        width: '30%',
        aspectRatio: 1,
        padding: '10%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TicBox;