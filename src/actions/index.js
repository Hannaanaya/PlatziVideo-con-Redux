export const setFavorite = payload => ({
    type: 'SET_FAVORITE', //indica la accion que se va a ejecutar
    payload, //es la información que estamos mandando al reducer
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE', 
    payload, 
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
})

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
});

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload,
});

export const searchVideo = payload => ({
    type: 'SEARCH_VIDEO',
    payload,
});