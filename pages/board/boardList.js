import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { BoardList } from '@/components'
 
export default function BoardListPage(){
  const columns = ["날짜","제목","내용"]
  const [data, setData] = useState([])
  const count = data.length
  useEffect(()=>{
          axios.get('http://localhost:5000/board/list').then(res=>{
              setData(res.data.boards)
      }).catch(err=>{})
  }, [])
  return(
    <BoardList columns={columns} data={data}/>
  )
}