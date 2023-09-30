import { useContext, useState } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

function PlayButton({message,children,onPlay,onPause}){
    console.log('render playButton')
    const theme = useContext(ThemeContext)

    const [playing, setPlaying] = useState(false);  
    
    function handleClick(e){
        // console.log(e)

        e.stopPropagation()

        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }

    return (
            <button  className= {theme} onClick={handleClick}>{children} : {playing ? '⏸️':'▶️'}</button>
        )

    // return (
    //     <button onClick={()=>console.log('play')}>Play</button>
    // )

}

export default PlayButton;