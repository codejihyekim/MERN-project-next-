import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isWrited: false
}

const WRITE_REQUEST= 'board/WRITE_REQUEST';
const WRITE_SUCCESS = 'board/WRITE_SUCCESS';
const WRITE_FAILURE = 'board/WRITE_FAILURE';

export const writeRequest = createAction(WRITE_REQUEST, data => data)

export function* boardWriteSaga(){
    yield takeLatest(WRITE_REQUEST, boardWrite);
}

function* boardWrite(action){
    try{
        const response = yield call(boardWriteAPI, action.payload)
        console.log("게시판등록 서버 다녀옴"+JSON.stringify(response.data))
        const result = response.data
        const listBoard = JSON.stringify(result)
        localStorage.setItem("listBoard", listBoard)
        yield put({type: WRITE_SUCCESS, payload: response.data})
        yield put(window.location.href= "/board/boardList")
    }catch(error){
        yield put({type: WRITE_FAILURE, payload: error.message})
    }
}
const boardWriteAPI = payload => axios.post(`${SERVER}/board/write`, payload,{headers})

const boardCreate = handleActions({
    [HYDRATE]: (state, action) => 
    ({...state, ...action.payload})}, 
    initialState
)
export default boardCreate