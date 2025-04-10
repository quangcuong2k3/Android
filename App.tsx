
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.header}>Xin chao</Text>
        <Text style={styles.parent}>Hello 2
          <Text style={styles.child}>BLalala</Text>
        </Text>
      </View>
      <Text>hello!</Text>
      <Text style={styles.hello1}>hell2o!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: "red", fontSize: 60,
    borderColor: "green",
    borderWidth: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "bold"
  },
  parent: {
    fontSize: 60,
    color: "green"
  },
  child: {
    fontSize: 30,
    color: "pink"
  }
});
