// import axios from "axios";

// // state
// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// // action types
// const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
// const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
// const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// // action creators
// const fetchUsersRequest = () => ({
//   type: FETCH_USERS_REQUESTED,
// });

// const fetchUsersSuccess = (users) => ({
//   type: FETCH_USERS_SUCCEEDED,
//   payload: users,
// });

// const fetchUsersFail = (error) => ({
//   type: FETCH_USERS_FAILED,
//   payload: error,
// });

// const reducer = produce((draft, action) => {
//   switch (action.type) {
//     case FETCH_USERS_REQUESTED:
//       draft.loading = true;
//       draft.error = "";
//       break;
//     case FETCH_USERS_SUCCEEDED:
//       draft.loading = false;
//       draft.users = action.payload;
//       break;

//     case FETCH_USERS_FAILED:
//       draft.loading = false;
//       draft.error = action.payload;
//       break;

//     default:
//       return draft;
//   }
// }, initialState);

// const store = createStore(reducer, applyMiddleware(thunk, expoLogger));

// const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data.map((user) => user.id);
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         console.log(error.message);
//         dispatch(fetchUsersFail(error.message));
//       });
//   };
// };

// // const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(fetchUsers());
// // unsubscribe();
