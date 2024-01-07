import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { store } from "@/redux/store";
import { fetchUsers } from "@/redux/features/user/userSlice";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {store.getState().user.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          store
            .getState()
            .user.users.map((id) => <Text style={styles.title}>{id}</Text>)
        )}
        <Text>List of Users</Text>
        <Text></Text>
        <Button title="Go to Index" onPress={() => router.back()} />
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
