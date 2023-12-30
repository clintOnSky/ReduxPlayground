import { StyleSheet, Text, View } from "react-native";
import {
  legacy_createStore as createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "redux";
import { produce } from "immer";
import { expoLogger } from "expo-redux-logger";

export default function Page() {
  // state
  const initialState = {
    loading: false,
    user: [],
    error: "",
  };

  // action type
  const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
  const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
  const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

  // action creator
  const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUESTED,
  });

  const fetchUsersSucceeded = (users) => ({
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  });

  const fetchUsersFailed = (error) => ({
    type: FETCH_USERS_FAILED,
    payload: error,
  });

  const reducer = produce((draft = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUESTED:
        draft.loading = true;
        break;
      case FETCH_USERS_SUCCEEDED:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case FETCH_USERS_FAILED:
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });

  const store = createStore(reducer);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}></Text>
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
