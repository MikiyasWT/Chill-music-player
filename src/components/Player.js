import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay,faPause,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons"
import React,{useEffect} from "react"
import { playAudio } from "../lib/util"
export  const Player = ({audioRef,setSongInfo,songInfo,currentSong,setCurrentSong,setIsPlaying,isPlaying,songs,setSongs}) =>{
  
 

 
  const playSongHandler = () => {
    console.log(isPlaying)
    if(!isPlaying){
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
    else{
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    }
    
  }


  const getTimeHandler = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

 

  const onDragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo,currentTime:e.target.value})
  }




  const skipHandler = (direction) => {
    let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)

    if(direction === 'go-forward'){
      setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
      
    }    
    else if(direction === 'go-back'){
      if((currentSongIndex - 1) < 0){
          setCurrentSong(songs[songs.length - 1])
          playAudio(audioRef,setIsPlaying)
          return
        }

      setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);

    }

    playAudio(audioRef,setIsPlaying)
  }
   
  useEffect(()=>{
    const newSongs = songs.map((song) => {
      if(song.id === currentSong.id){
          return {
              ...song,
              active:true,   
          }
         
       
      }
      else {
          return {
              ...song,
              active:false,   
          }
      }
  })

  setSongs(newSongs);
  },[currentSong])
 
    return(
        <div className="musicPlayer">
            <div className="timeControl">
              <div className="inputPicker">
                <h3>{getTimeHandler(songInfo.currentTime)}</h3>  
                <input 
                  min={0} 
                  max={songInfo.duration || 0} 
                  onChange={onDragHandler}
                  value={songInfo.currentTime} 
                  type="range" />
                <h3>{songInfo.duration ? getTimeHandler(songInfo.duration): '0:00'}</h3>
              </div>
             <div className="icons">
              <FontAwesomeIcon onClick={()=>skipHandler('go-back')} className="goBack" icon={faAngleLeft}/>
              <FontAwesomeIcon className="play" onClick={playSongHandler} icon={isPlaying?faPause:faPlay} />
              <FontAwesomeIcon onClick={()=>skipHandler('go-forward')} className="goForward" icon={faAngleRight}/>
              </div>
            </div>
        
       </div>
    )
}