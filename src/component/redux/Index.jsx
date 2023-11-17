import { createStore } from "redux";
//counterreducer is a reducer
const INITIAL_VALUE={counter:0,privacy:false}
const counterreducer=(store =INITIAL_VALUE,action) =>{ 
    if(action.type==='INCREMENT'){
        return{...store,counter: store.counter+1};
    }
    else if(action.type==='DECREMENT'){
return{...store,counter:store.counter-1};
    }
    else if(action.type==='ADD'){
        return{...store,counter:store.counter+Number(action.payload.num)}
    }
    else if(action.type==='SUBSTRACT'){
        return{...store,counter:store.counter-Number(action.payload.num)}
    } else if(action.type==='PRIVACY_TOGGLE'){

        return{ ...store,privacy:!store.privacy}
    }
    return store;
}
const counterstore=createStore(counterreducer);
export default counterstore;