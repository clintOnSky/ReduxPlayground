import { StyleSheet, Text, View } from "react-native";
import {
  legacy_createStore as createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "redux";
import { produce } from "immer";
import { expoLogger } from "expo-redux-logger";

// the type property of the action object is usually defined as a string constant to prevent misspelling
// Cake action types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// Ice cream action types
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// this is the action creator that returns the action object
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

// naming convention for the extra property is payload used to define the extra information you want to pass to the store
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// this is the action creator that returns the action object
function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

// naming convention for the extra property is payload used to define the extra information you want to pass to the store
function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// Object defines all the state values in the store
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 10,
// };
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// ( previousState, action ) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// createStore takes the reducer function as an arg and it uses the state provided in the reducer to create the state of the app
// the store value can be destructured to { subscribe, dispatch, getState }
const store = createStore(rootReducer, applyMiddleware(expoLogger));

// getState function provides access to the current state within the store
console.log("Initial state", store.getState());

// the bindActionCreators functions takes all the action creators within an object as its first arg, and it returns an object containing
// these actions creator which can be called directly to dispatch actions as they are already wrapped within the dispatch function
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

const unsubscribe = store.subscribe(() => {});

// action creators are called directly using the bindActionCreator function
actions.orderCake();
actions.restockCake(10);
actions.orderIceCream();
actions.orderIceCream();

// calling the return function of the subscriber ends the listener
// unsubscribe();

// state changes after the unsubscribe function will not show
actions.orderCake();

// store.dispatch(orderCake());/

const initialState = {
  name: "Clinton",
  address: {
    street: "30 Edosa Str",
    city: "Benin",
    state: "ED",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street: string) => ({
  type: UPDATE_STREET,
  payload: street,
});

const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      draft.address.street = action.payload;
      break;
    default: {
      return draft;
    }
  }
});

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{store.getState().cake.numOfCakes}</Text>
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
