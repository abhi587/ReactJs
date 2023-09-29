
import './App.css'
import videoDB from "./data/data"
import AddVideo from './components/AddVideo';
import Counter from './components/counter';
import VideoList from './components/videoList';
import { useReducer, useState } from 'react';

function App() {
  console.log('render app')
  const [editableVideo, seteditableVideo] = useState(null)

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ]

      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        seteditableVideo(null);
        return newVideos;

      default:
        return videos
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB)


  function editVideo(id) {
    seteditableVideo(videos.find(video => video.id === id))
  }

 
  return (
    // app is used to show event bubbling when an event occurs it will propogate till its parents,we need to stop it ,we can 
    // stop it by using event object
    <div className='App' onClick={() => console.log('App')}>
      <AddVideo dispatch={dispatch}  editableVideo={editableVideo}></AddVideo>
      <VideoList  dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
    </div>
  )
}

export default App;