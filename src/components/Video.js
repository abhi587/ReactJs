import { useContext, useEffect, memo } from 'react';
import './Video.css'
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';

const Video = memo(function Video({ title,id, channel, views, time, verified,children,editVideo}) {
    console.log('render video',id)
    const theme = useContext(ThemeContext)
    const dispatch = useVideoDispatch()


    // //render - mounting(firstTime)- unmount
    // useEffect(()=>{
    //     const idx= setInterval(()=>{
    //         console.log('video playing',id)   // {inside}-callBack
    //     },3000)
    //     return()=>{
    //         clearInterval(idx)
    //     }
    // },[id])  //[]-dependency array

    return (
        <>
            <div className={`container ${theme}`}>
                <button className='close' onClick={()=>dispatch({ type: 'DELETE', payload: id })}>X</button>
                <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
                <div className='pic'>
                    <img
                        src={`https://picsum.photos/id/${id}/160/90`}
                        alt="Not found"
                    />
                </div>
                <div className='title'> {title}</div>
                <div className='channel'> {channel}
                {verified ? "✅" : null} </div>
                <div className='views'>
                    {views} <span>.</span> {time}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
})

export default Video;