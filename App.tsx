import { useState } from 'react';
import {
  Button, FlatList, ScrollView,
  StyleSheet, Text, TextInput, View, TouchableOpacity,
  Pressable
} from 'react-native';

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
      alert("empty todo")
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
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form */}
      <View style={styles.body}>
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
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => deleteTodo(item.id)}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <Text
                  style={styles.todoItem}>{item.name}
                </Text>
              </Pressable>

            );
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40

  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20
  }

});
