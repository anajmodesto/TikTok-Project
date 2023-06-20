import React, {useState} from 'react'
import "./videosidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';


function Videosidebar({likes, messages, shares}) {
 
    const [liked, setLiked] = useState(false)
   
    function handdleLike (){
        setLiked(!liked)
 }


  return (
    <div className='videosidebar'>
     <div 
        className='videosidebar__options'
        onClick={handdleLike}
     >
        { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/> }
      
      <p> {liked ? likes + 1 : likes } </p>
     </div>
     <div className='videosidebar__options'>
      <ChatIcon fontSize='large'/>
      <p> {messages} </p>
     </div>
     <div className='videosidebar__options'>
      <ShareIcon fontSize='large'/>
      <p> {shares} </p>
     </div>
    
    </div>
  )
}

export default Videosidebar