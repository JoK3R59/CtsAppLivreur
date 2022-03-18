import {
    ADD_NEW_USER_EMAIL_PASSWORD,
    ADD_NEW_DATA_USER,
    USER_CONNECTED
} from "../actions/actionsTypesUsers";

// Ajouter un nouvel utilisateur Email + Password
const initialState = {
    userID: {}
};

export const users = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_USER_EMAIL_PASSWORD:
            return {
                userID: action.payload.data
            }

        default: 
            return state
    }
};

// Ajouter des données au nouvel utilisateur
const initialDataState = {
    dataID: {}
};

export const dataUsers = (state = initialDataState, action) => {

    switch (action.type) {

        case ADD_NEW_DATA_USER:
            return {
                dataID: action.payload.data
            }

        default: 
            return state
    }
};

// utilisateur connecté
const initialConnectedState = {
    data : false
};

export const userConnectedTest = (state = initialConnectedState, action) => {
    
    switch (action.type) {
        case USER_CONNECTED:
            return {
                data : action.payload.data
            }
        default: 
            return state
    }
};