import React, { Component } from 'react';
import VideoListItem from './video-list-item';
import { Card, Loader } from 'semantic-ui-react';

const VideoList = (props) => {

  const videos = props.videos;
  if(!videos){
    return <Loader>Loading</Loader>
  }

  const videoItem = props.videos.map((video) => {
    return(
        <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
    );
  });

  return(
    <Card.Group doubling='true' itemsPerRow={4}>
    {videoItem}
    </Card.Group>
  );
}

export default VideoList;
