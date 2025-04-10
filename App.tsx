import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {

  const [students, setStudents] = useState(
    [
      { id: 1, name: "Cuong", age: 18 },
      { id: 2, name: "Cuong2", age: 11 },
      { id: 3, name: "Cuong3", age: 12 },
      { id: 4, name: "Cuong4", age: 13 },
      { id: 5, name: "Cuong5", age: 14 },
      { id: 6, name: "Cuong6", age: 15 },
      { id: 7, name: "Cuong7", age: 16 },
      { id: 8, name: "Cuong8", age: 17 },
    ]
  )
  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello world</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id + ""}
        renderItem={({ item }) => {
          return (
            <View style={{
              padding: 30,
              backgroundColor: "pink",
              marginBottom: 30
            }}>
              <Text>{item.name}</Text>
            </View>
          )
        }}
      />
      {/* <ScrollView>
        {students.map((item, index) => {
          return (
            <View key={item.id} style={{
              padding: 15,
              backgroundColor: "pink",
              marginBottom: 10
            }}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
