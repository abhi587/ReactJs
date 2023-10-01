import Video from "./Video"
import PlayButton from "./PlayButton"
import { useContext, useEffect, useState } from "react"
import useVideos from "../hooks/Videos"
import axios from 'axios';
import useVideoDispatch from "../hooks/VideoDispatch";


function VideoList({ editVideo}) {

    const url = "https://my.api.mockaroo.com/videos_data.json?key=6329c280"


    const videos = useVideos()
    const dispatch = useVideoDispatch();

    // const [videos,setVideos] = useState([])
    async function handleClick(){
        const res = await axios.get(url);
        console.log("getVideo",res.data) 
        // setVideos(res.data)
        dispatch({type:'LOAD',payload:res.data})
    }

    useEffect(()=>{
        async function getVideos(){
            const res = await axios.get(url);
            console.log("getVideo",res.data) 
            dispatch({type:'LOAD',payload:res.data})
        }
        getVideos()
    },[dispatch])

    return (
        <>
            {
                videos.map(video => <Video
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                    id={video.id}
                    editVideo = {editVideo}
                    
                >
                    <PlayButton
                        onPlay={() => console.log('Playing..', video.title)}
                        onPause={() => console.log('Paused..', video.title)}
                    >
                        {video.title}
                    </PlayButton>
                </Video>)
            }
            <button onClick={handleClick}>Get Videos</button>
        </>

    )

}

export default VideoList