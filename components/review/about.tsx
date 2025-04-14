import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../utils/const";


const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 15
    },
    about1: {
        fontSize: 30,
        padding: 20
    }
})
const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>
                About Review App
            </Text>
            <Text style={[styles.about1, globalStyles.globalFont]}>
                Made By Store
            </Text>
        </View>
    );
};

export default AboutScreen;
