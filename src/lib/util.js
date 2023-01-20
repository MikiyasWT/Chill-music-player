
export const playAudio = async (audioRef,setIsPlaying) => {
        
        const isPlayingPromise = await audioRef.current.play();
        if(isPlayingPromise !== undefined){
            isPlayingPromise.then((audio) => {
              audioRef.current.play()
              setIsPlaying(true)
            })
              
          
    }
    
}