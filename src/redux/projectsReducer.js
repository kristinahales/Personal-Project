import axios from 'axios';
import {GET_PROJECTS} from './actionTypes';

const initialState = {
    projects: [],
    error: false
}

export function getProjects() {
    let data = axios.get(`/api/projects`)
    .then(res => res.data)
    return {
        type: GET_PROJECTS,
        payload: data
    };
}

export default function postsReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type) {
        case GET_PROJECTS + '_FULFILLED':
        return {
            projects: payload,
            error: false
        }
        case GET_PROJECTS + '_REJECTED':
        return {
            ...state,
            error: payload
        } 
        default:
        return state
    }
}