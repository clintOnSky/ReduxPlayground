import { Button, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { store } from "@/redux/store";
import { cakeActions } from "@/redux/features/cake/cakeSlice";
import { iceCreamAction } from "@/redux/features/iceCream/iceCreamSlice";
import { expoLogger } from "expo-redux-logger";

export default function Page() {
  console.log("Initial state", store.getState());
  // const unsubscribe = store.subscribe(() =>
  //   console.log("Updated state", store.getState())
  // );
  store.dispatch(cakeActions.ordered());
  // unsubscribe();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button
          title="Go to Cake Shop"
          onPress={() => router.push("/cakeIcecream")}
        />
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
    maxWidth: 960,
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
