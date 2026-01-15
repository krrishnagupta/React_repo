import { createStore} from "redux";

const InitialValue = {
  counter: 0,
  privacy: false
}

const counterReducer = (store = InitialValue, action) => {
  if(action.type === 'INCREASE'){
    return {...store, counter: store.counter +1}
  }
  else if(action.type === 'DECREASE'){
    return {...store, counter: store.counter -1}
  }
  else if(action.type === 'PRIVACY_TOGGLE'){
    return {...store, privacy: !store.privacy}
  }
  return store;
}


const counterStore = createStore(counterReducer)

export default counterStore;