import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { BoardWrite } from '@/components/board/BoardWrite'
import {writeRequest} from "@/modules/board/boardWrite";

const BoardWritePage = () => {
    
    const [board, setBoard] = useState({
        date:'', title:'', content: ''
    })

    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const{name, value} = e.target;
        setBoard({...board,[name]: value})
    }

    const onSubmit = e => {
        e.preventDefault()
        alert('게시판 등록정보:'+JSON.stringify(board))
        dispatch(writeRequest(board))
    }
    
    return(
        <BoardWrite onChange={onChange} onSubmit={onSubmit}/>
    )
}

const mapStateToProps = state => ({isWrited: state.boardWrite.isWrited })
const boardWriteActions = {writeRequest}
export default connect(mapStateToProps, boardWriteActions)(BoardWritePage)

