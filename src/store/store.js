import { configureStore} from "@reduxjs/toolkit";
import authSlice from './authSlice';
const store = configureStore({
    reducer:{
        auth : authSlice,
    }
});


export default store;




// A Redux store is a central repository that holds the entire state of an application in a single JavaScript object. The Redux store manages the state of an application in a predictable way, using actions and reducers to handle state changes.

// Key Concepts of Redux Store
// State: The state is a JavaScript object that holds the entire state of the application. The state is read-only, meaning it cannot be changed directly. Instead, the state can only be modified through dispatching actions.

// Actions: Actions are plain JavaScript objects that represent an intention to change the state. Actions must have a type property, which indicates the type of action being performed. Actions can also have a payload property to include additional data needed to perform the action.

// Reducers: Reducers are pure functions that take the current state and an action as arguments and return a new state. Reducers specify how the application's state changes in response to actions sent to the store.

// Dispatch: The dispatch function is used to send actions to the Redux store. When an action is dispatched, the store runs the reducer and updates the state accordingly.

// Store: The store is the object that brings actions and reducers together. It has several responsibilities:

// Holds the application state.
// Allows access to the state via getState().
// Allows state to be updated via dispatch(action).
// Registers listeners via subscribe(listener).
// Handles unregistering of listeners via the function returned by subscribe(listener)