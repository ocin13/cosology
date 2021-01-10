import * as ActionTypes from './ActionTypes';
import baseUrl from '../shared/baseUrl';
import { products } from './products';
import { promotions } from './promotions';

//fetch articles from http://localhost:3000/articles
export const fetchArticles = () => dispatch => {
    dispatch(articlesLoading());
    return fetch(baseUrl + 'articles')
        .then(response => {
            if(response.ok){
                return response;
            } else{
                const error = new Error(`Error ${response.status} : ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(articles => dispatch(addArticles(articles)))
        .catch(error => dispatch(failedArticles(error.message)))
} 
//add the articles fetched from http://localhost:3000/articles to the redux store articles`s state
export const addArticles = articles => ({
    type: ActionTypes.ADD_ARTICLES,
    payload: articles
});
//wating for the articles to be loaded from http://localhost:3000/articles 
export const articlesLoading = () => ({
    type: ActionTypes.ARTICLES_LOADING
});
//display error message in case loading the articles from http://localhost:3000/articles  is failed 
export const failedArticles = (errMess) => ({
    type: ActionTypes.ARTICLES_FAILED,
    payload: errMess
})

//fetch products from http://localhost:3000/products
export const fetchProducts = () => dispatch => {
    dispatch(productsLoading());
    fetch(baseUrl + 'products')
        .then(response => {
            if(response.ok){
                return response
            }else {
                error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)))
}
//waiting for products to be loading from http://localhost:3000/products
export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});
//add the articles fetched from http://localhost:3000/products to the redux store articles`s state
export const addProducts = products => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});
//display error message in case loading the articles from http://localhost:3000/products is failed 
export const productsFailed = errMess => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errMess
})

//fetch promotions from http://localhost:3000/promotions
export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());
    fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok){
                return response
            }else {
                error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)))
}
//waiting for products to be loading from http://localhost:3000/products
export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});
//add the articles fetched from http://localhost:3000/products to the redux store articles`s state
export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});
//display error message in case loading the articles from http://localhost:3000/products is failed 
export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
})

//fetch products from http://localhost:3000/sliders
export const fetchSliders = () => dispatch => {
    dispatch(slidersLoading());
    fetch(baseUrl + 'sliders')
        .then(response => {
            if(response.ok){
                return response
            }else {
                error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(sliders => dispatch(addsliders(sliders)))
        .catch(error => dispatch(slidersFailed(error.message)))
}
//waiting for products to be loading from http://localhost:3000/products
export const slidersLoading = () => ({
    type: ActionTypes.SLIDERS_LOADING
});
//add the articles fetched from http://localhost:3000/products to the redux store articles`s state
export const addSliders = products => ({
    type: ActionTypes.ADD_SLIDERS,
    payload: sliders
});
//display error message in case loading the articles from http://localhost:3000/products is failed 
export const slidersFailed = errMess => ({
    type: ActionTypes.SLIDERS_FAILED,
    payload: errMess
})

//fetch products from http://localhost:3000/comments
export const fetchcomments = () => dispatch => {
    dispatch(commentsLoading());
    fetch(baseUrl + 'products')
        .then(response => {
            if(response.ok){
                return response
            }else {
                error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addcomments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}
//waiting for products to be loading from http://localhost:3000/products
export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});
//add the articles fetched from http://localhost:3000/products to the redux store articles`s state
export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
//display error message in case loading the articles from http://localhost:3000/products is failed 
export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

export const addNewComment = (comment) => dispatch => {
    fetch(
        baseUrl + 'comments',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'text/json'
            },
            body: JSON.stringify(comment),
        })
        .then(response => response.json())
        .then(comment => dispatch(addcomment(comment)))
        .catch(error => dispatch(commentFailed(error)))
}

export const addcomment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const commentFailed = errMess => ({
    type: ActionTypes.FAILED_COMMENT,
    payload: errMess
})



