import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const VideoListItem = (props) => {
  const video = props.video;
  const imageUrl = video.snippet.thumbnails.high.url;
  const title = video.snippet.title;
  const onVideoSelect = props.onVideoSelect;

  return(
      <Card centered='true' onClick={() => onVideoSelect(video)}>
        <Card.Content>
          <Image src={imageUrl} />
          <Card.Description>
            {title}
          </Card.Description>
        </Card.Content>
      </Card>
  );
}

export default VideoListItem;
