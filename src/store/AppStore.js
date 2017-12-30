import { createStore } from 'redux';


const reducer = (state, action) => {
    console.log("Calling reducer")
    switch (action.type) {
        case "ADD":
        console.log("Calling add")
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
        case "MULTIPLY":
            state = state * action.payload;
            break;
    }

    return state;
}

const store = createStore(reducer, 1);




let dispatchEvent = (eventName) => {
    console.log("eventNamer",eventName)
    store.dispatch({
        "type": eventName,
        "payload": 10
    })
}

let getValue = () =>{
    console.log("called")
    return new Promise((resolve,reject)=>{
        store.subscribe(() => {
            console.log("Store updated", store.getState())
            return store.getState();
        })
    })
 
}


export default  {
    "dispatchEvent":dispatchEvent,
    "getValue":getValue
}
