import axios from 'axios';
const initialState={
    chores:[],
    user: {}

}

const GET_CHORES= 'GET_CHORES';

export function getChores() {
    const chores= axios.get('/chores/name')
    .then( res=> {
        return res.data;
    })
    return {
        type: GET_CHORES,
        payload: chores
    }
}

const GET_USER= 'GET_USER';

export function getUser() {
    const user= axios.get('/auth/user')
    .then( res=> {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: user
    }
}



export default function reducer(state=initialState, action){
    console.log(action)
switch (action.type) {
    case GET_CHORES + '_FULFILLED':
        return Object.assign({}, state, { chores: action.payload })
    
    case GET_USER + '_FULFILLED':
        return Object.assign({}, state, { user: action.payload })
        

    default:
        return state;
    }
}