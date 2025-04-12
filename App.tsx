import { useState } from 'react';
import {
  Button, FlatList, ScrollView,
  StyleSheet, Text, TextInput, View, TouchableOpacity,
  Pressable, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
interface ITodo {
  id: number,
  name: string
}
export default function App() {

  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([])

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("loi input todo", "Todo không được để trống",
        [
          {
            text: 'Hủy',
            onPress: () => console.log("Cancel"),
            style: 'cancel'
          },
          { text: 'Xác nhận', onPress: () => console.log('OK') }
        ]
      )
      return;
    };
    setListTodo([...listTodo,
    { id: randomInteger(2, 20000000), name: todo, }
    ]);
    setTodo("")
  }
  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter(item => item.id !== id);
    setListTodo(newTodos)
  }
  //jsx
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Todo App</Text>

        {/* form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button
            title="Add Todo"
            onPress={handleAddTodo}
          />
        </View>
        {/* listTodo */}
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id + ""}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => deleteTodo(item.id)}
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                >
                  <View style={styles.groupTodo}>
                    <Text
                      style={styles.todoItem}>{item.name}
                    </Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>

                </Pressable>

              );
            }}
          />
        </View>
      </View >
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  groupTodo: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 15
  },
  container: {
    paddingTop: 50,
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    backgroundColor: '#fff',

  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,

  },
  form: {
    // flex: 2
    marginBottom: 20
  },
  todo: {
    flex: 1
  },


  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15
  },
  todoItem: {
    fontSize: 20,

  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20
  }

});
