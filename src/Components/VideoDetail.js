import React, { useEffect, useState } from 'react';

const VideoDetail = (props) => {

    useEffect(() => {
        if (props.selectedVideo2 !== undefined) {
            setDuration(props.selectedVideo2.contentDetails.duration);
        }
    }, [props.selectedVideo2])
    const [duration, setDuration] = useState();
    if (!props.selectedVideo) {
        return <div>Waiting you to select video :)</div>
    }
    console.log(props.selectedVideo2);
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
    return (
        <div style={{ width: 55 + "%", float: "left" }}>
            <iframe src={videoSrc} allowFullScreen title="Video player" />
            <h4>{props.selectedVideo.snippet.title}</h4>
            <h3>{props.selectedVideo.snippet.categoryId}</h3>
            <h3>{duration}</h3>
        </div>
    );
};

export default VideoDetail;