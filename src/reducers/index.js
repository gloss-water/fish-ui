import { combineReducers } from 'redux';

const defaultSession = localStorage.getItem('fishSession') || '';

const session = (state = defaultSession, action) => {
    if (action.type === 'SET_SESSION') {
        window.history.pushState('', '', '/');
        return action.session || defaultSession || '';
    }
    return state;
}

const discordInfo = (state = {}, action) => {
    if (action.type === 'SET_DISCORD_INFO') {
        return action.info;
    }
    return state;
}

const userTimezone = (state = '', action) => {
    if (action.type === 'SET_USER_TIMEZONE') {
        return action.timezone || '';
    }
    return state;
}

const users = (state = [], action) => {
    if (action.type === 'SET_USERS') {
        return action.users;
    }
    return state;
}

export default combineReducers({
    session,
    discordInfo,
    userTimezone,
    users
});
