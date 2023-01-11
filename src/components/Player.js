import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay,faPause,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons"
import React,{useRef,useState} from "react"
export  const Player = ({audioRef,setSongInfo,songInfo,currentSong,setIsPlaying,isPlaying}) =>{
  
 

 
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
                <h3>{getTimeHandler(songInfo.duration)}</h3>
              </div>
             <div className="icons">
              <FontAwesomeIcon className="goBack" icon={faAngleLeft}/>
              <FontAwesomeIcon className="play" onClick={playSongHandler} icon={isPlaying?faPause:faPlay} />
              <FontAwesomeIcon className="goForward" icon={faAngleRight}/>
              </div>
            </div>
        
       </div>
    )
}