
import './App.css'
import videoDB from "./data/data"
import AddVideo from './components/AddVideo';
import Counter from './components/counter';
import VideoList from './components/videoList';
import { useState } from 'react';

function App() {
  console.log('render app')

  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, seteditableVideo] = useState(null)

  function addVideos(video){
      setVideos([
                ...videos,
                {...video, id: videos.length+1}
            ]);
  }

  function deleteVideo(id){
    setVideos( videos.filter(video=>video.id !== id))
  }

  function editVideo(id){
    seteditableVideo(videos.find(video=>video.id === id))
  }

  function updateVideo(video){
      const index =   videos.findIndex(v=>v.id === video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }

  return (
    // app is used to show event bubbling when an event occurs it will propogate till its parents,we need to stop it ,we can 
    // stop it by using event object
    <div className='App' onClick={() => console.log('App')}>
      <AddVideo addVideos= {addVideos} updateVideo={updateVideo} editableVideo = {editableVideo}></AddVideo>
      <VideoList deleteVideo={deleteVideo}   editVideo={editVideo} videos={videos}></VideoList>
    </div>
  )
}

export default App;