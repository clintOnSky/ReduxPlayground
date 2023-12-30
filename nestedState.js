// import { legacy_createStore as createStore, bindActionCreators } from "redux";
const {
  legacy_createStore: createStore,
  bindActionCreators,
  applyMiddleware,
} = require("redux");

const { expoLogger } = require("expo-redux-logger");

const immer = require("immer");
const produce = immer.produce;

const initialState = {
  name: "Clinton",
  address: {
    street: "30 Edosa Str",
    city: "Benin",
    state: "ED",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street) => ({
  type: UPDATE_STREET,
  payload: street,
});

const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      draft.address.street = action.payload;
      break;

    default:
      return draft;
  }
});

const store = createStore(reducer, applyMiddleware(expoLogger));

console.log("Initial address", store.getState());

const actions = bindActionCreators(
  {
    updateStreet,
  },
  store.dispatch
);

actions.updateStreet("30 Sky Lane");
actions.updateStreet("31 Sky Lane");
actions.updateStreet("No. 32 Sky Lane");
