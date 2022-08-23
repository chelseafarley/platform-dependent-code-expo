import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  const isAndroid = Platform.OS === "android";

  if (isAndroid) {
    console.log("specific android task");
  }

  return (
    <View style={styles.container}>
      <Text>{Platform.OS}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        backgroundColor: "#00FF00",
        margin: 20
      },
      default: {
        backgroundColor: "red"
      }
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
