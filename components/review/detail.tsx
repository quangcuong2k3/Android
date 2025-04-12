import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: "OpenSans-Regular"
    }
})
const DetailScreen = () => {
    return (
        <View>
            <Text style={styles.review}>DetailScreen Screen</Text>
        </View>
    );
};

export default DetailScreen;
