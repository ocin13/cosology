import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {articles} from './articles.js';
import {products} from './products.js';
import {promotions} from './promotions.js';
import {sliders} from './sliders.js';
import {comments} from './comments.js';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers(
            {
                articles,
                products,
                promotions,
                comments,
                sliders
            }
        ), applyMiddleware(thunk, logger)
    );
    return store;
} 





