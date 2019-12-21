import {INCREMENT,DECREMENT,SET_DIFF} from "../actions";
import {combineReducers} from "redux";
/*
     영화관련  movieApp
     게시판    boardApp
     회원관련
     예매관련
     ==> 리듀서는 여러개 ==> store는 한개
         ======             =====  데이터베이스
          JDBC
 */
const initState={
   value:0,
    diff:1
}
const counter=(state=initState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return Object.assign({},state,{value:state.value+state.diff})
        case DECREMENT:
            return Object.assign({},state,{value:state.value-state.diff})
        case SET_DIFF:
            return Object.assign({},state,{diff:action.diff})
    }
}
const myApp=combineReducers(
    counter
)