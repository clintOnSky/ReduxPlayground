import { Button, StyleSheet, Text, View } from "react-native";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { produce } from "immer";
import { router } from "expo-router";
import axios from "axios";

export default function Page() {
  // state
  const initialState = {
    loading: false,
    users: [],
    error: "",
  };

  // action types
  const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
  const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
  const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

  // action creators
  const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUESTED,
  });

  const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  });

  const fetchUsersFail = (error) => ({
    type: FETCH_USERS_FAILED,
    payload: error,
  });

  const reducer = produce((draft, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUESTED:
        draft.loading = true;
        draft.error = "";
        break;
      case FETCH_USERS_SUCCEEDED:
        draft.loading = false;
        draft.users = action.payload;
        break;

      case FETCH_USERS_FAILED:
        draft.loading = false;
        draft.error = action.payload;
        break;

      default:
        return draft;
    }
  }, initialState);

  const store = createStore(reducer, applyMiddleware(thunk));

  const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUsersRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data.map((user) => user.id);
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          console.log(error.message);
          dispatch(fetchUsersFail(error.message));
        });
    };
  };

  const unsubscribe = store.subscribe(() => console.log(store.getState()));
  store.dispatch(fetchUsers());
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
