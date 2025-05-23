import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: "center",

    },
    headerText: {
        flex: 1,
        textAlign: "center",
        fontSize: 25,
    },

})
const AppHeader = () => {
    const navigation: any = useNavigation();

    return (
        <View style={style.container}>
            <MaterialIcons
                name="menu" size={24}
                color="black"
                onPress={() => { navigation.openDrawer() }}
            />
            <Text style={[style.headerText, globalStyles.globalFont]}>Check App</Text>
        </View>
    )
}
export default AppHeader;