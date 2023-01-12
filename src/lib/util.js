
export const playAudio = (audioRef,setIsPlaying) => {
        
        const isPlayingPromise = audioRef.current.play();
        if(isPlayingPromise !==undefined){
            isPlayingPromise.then((audio) => {
              audioRef.current.play()
              setIsPlaying(true)
            })
              
          
    }
    
}