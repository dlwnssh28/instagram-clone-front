 import React from 'react'
 import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
 
 function Post() {
   return (
     <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
        <Avatar>R</Avatar>
        userid • <span>12시간</span>
        </div>

        <MoreHorizIcon />

      </div>
      <div className='post__image'></div>
      <div className='post__footer'></div>
     </div>
   )
 }
 
 export default Post