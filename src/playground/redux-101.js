import { createStore } from 'redux';    //to use redux
//store is what we're gonna use to keep track of our data

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({     //destructuring the object being passed and using a default value
    type: 'INCREMENT',
    incrementBy     //no need to do incrementBy: incrementBy cuz they both have the same name
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 10 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

//Reducers --> dictates what happens when an action gets passed to the store
// 1. Reducers are pure functions --> output is only determined by input 
// 2. Never change state or action, we are just reading from state and action and returing a new state

const countReducer =  (state = { count: 0 }, action) => { //we're passing the current state, with a default value
    switch (action.type) {  //easier to use switch instead of if-else for this case
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.count
            };
        case 'SET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {    //subscribe() gets called whenever the store gets changed. Acts like a notifier for whenever store gets changed
    console.log(store.getState()); //getState() is a store method that returns current state object
}); //if we call unsubscribe we will stop being notified whenever store is changed


//Actions --> an object that gets sent to the store
// store.dispatch({     //dispatch() allows us to send an object
//     type: 'INCREMENT',   //type is the type of our Action. all caps is convention
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 10 }));    //pass in custom properties as objects
store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// store.dispatch({     
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({     
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(decrementCount());


// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({count: 101}));