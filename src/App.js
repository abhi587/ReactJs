
import './App.css'
import videoDB from "./data/data"
import AddVideo from './components/AddVideo';
import Counter from './components/counter';
import VideoList from './components/videoList';
import {  useReducer, useState } from 'react';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';

function App() {
  console.log('render app')
  const [editableVideo, seteditableVideo] = useState(null)


  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload;
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

  const [videos, dispatch] = useReducer(videoReducer, [])

  // const themeContext = useContext(ThemeContext);

  const [mode, setMode] = useState('darkMode')


  function editVideo(id) {
    seteditableVideo(videos.find(video => video.id === id))
  }


  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`} onClick={() => console.log('App')}>
          <Counter></Counter>
          <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>
          <AddVideo editableVideo={editableVideo}></AddVideo>
          <VideoList editVideo={editVideo} ></VideoList>
        </div >
        </VideoDispatchContext.Provider>
        </VideosContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;