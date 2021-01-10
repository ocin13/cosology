import * as ActionTypes from './ActionTypes';

export const sliders = ( state = {
                            isLoading: false,
                            errMess: null,
                            sliders: []
                        }, action) => {
            switch(action.type) {
                case ActionTypes.ADD_SLIDERS:
                    return{...state,isLoading: false,errMess: null,sliders: action.payload};
                case ActionTypes.SLIDERS_LOADING:
                    return{...state,isLoading: true,errMess: null,sliders: []};
                case ActionTypes.SLIDERS_FAILED:
                    return{...state,isLoading: false,errMess: action.payload}; 
                default:
                    return state;         
            }
};