import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../utils/const";


const styles = StyleSheet.create({
    about: {
        fontSize: 30
    }
})
const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>AboutScreen</Text>
        </View>
    );
};

export default AboutScreen;
