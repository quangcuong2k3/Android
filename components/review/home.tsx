import { View, Text, Button } from "react-native";

const HomeScreen = (props: any) => {
    const { navigation } = props;
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Home Screen</Text>
            <Button title="View-detail"
                onPress={() => navigation.navigate("review-detail")}
            />
        </View>
    );
};

export default HomeScreen;
