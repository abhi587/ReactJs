import './AddVideo.css'
import { useEffect, useState } from 'react'

const initialState = {
    time: "10 Year ago",
    channel: "Code lover",
    verified: true,
    title:'',
    views:''
}

function AddVideo({addVideos, updateVideo, editableVideo}) {

    const [video, setVideo] = useState(initialState)

    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo){

            updateVideo(video)

        }else{

            addVideos(video)

        }
        
        setVideo(initialState)
        // console.log(video)
    }

    function handleChange(e) {
        // console.log(e.target.name, e.target.value)
        setVideo({...video,
            [e.target.name] : e.target.value
        })
        // console.log(video);
    }

    useEffect(()=>{
        if(editableVideo){
            setVideo(editableVideo)
        }   
    },[editableVideo])

    return (
        <form>
            <input type="text" name="title" onChange={handleChange} placeholder='title' value={video.title} />
            <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views}/>
            <button
                onClick={handleSubmit}
          
            >
                {editableVideo?'Edit':'Add'}</button>
        </form>
    )

}

export default AddVideo;