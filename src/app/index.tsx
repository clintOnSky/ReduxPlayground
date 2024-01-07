import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { store } from "@/redux/store";
import { ordered as cakeOrdered } from "@/redux/features/cake/cakeSlice";
import { iceCreamAction } from "@/redux/features/iceCream/iceCreamSlice";
import { expoLogger } from "expo-redux-logger";

export default function Page() {
  console.log("Initial state", store.getState());
  // const unsubscribe = store.subscribe(() =>
  //   console.log("Updated state", store.getState())
  // );
  store.dispatch(cakeOrdered());
  // unsubscribe();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>0</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Button title="Order cake" />
          <Button title="Restock cake" />
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>0</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Button title="Order Ice Cream" />
          <Button title="Restock Ice Cream" />
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            title="Go to Async user"
            onPress={() => router.push("/async")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    // backgroundColor: "red",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
