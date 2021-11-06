import { combineReducers } from 'redux';
import { RX_MEMES, MY_MEMES } from '../action'

function memes(state=[], action) {
    switch (action.type){
        case RX_MEMES:
            return action.memes;
        default:
            return state;
    }
}

function myMemes(state=[],action){
    switch(action.type){
        case MY_MEMES:
        //state = [...state, action.meme];
        state = action.meme;
        return state;
        
        default:
            return state;
    }
}

const rootreducer = combineReducers({memes,myMemes});

export default rootreducer; 