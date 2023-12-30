import { legacy_createStore as createStore, bindActionCreators } from "redux";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

const actions = bindActionCreators(
  {
    updateStreet,
  },
  store.dispatch
);

const unsubscribe = store.subscribe(() =>
  console.log("Updated street info", store.getState())
);
actions.updateStreet("30 Edosa Lane");

unsubscribe();
