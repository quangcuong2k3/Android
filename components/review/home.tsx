import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import CreateModal from "./create.modal";
import AntDesign from '@expo/vector-icons/AntDesign';


interface IReview {
    id: number;
    title: string;
    star: number;
}

const style = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        margin: 15
    }
})

const HomeScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: "REACT", star: 5 },
        { id: 2, title: "Cuong", star: 5 }

    ]);

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View>
            <Text style={{ fontSize: 30, padding: 10 }}>Review List</Text>

            <View style={{ alignItems: "center" }}>
                <AntDesign
                    onPress={() => setModalVisible(true)}
                    name="plussquareo" size={30} color="blue" />
            </View>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("review-detail", item)}
                            >
                                <View style={style.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <CreateModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
};

export default HomeScreen;
