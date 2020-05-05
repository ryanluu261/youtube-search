import React, {Component, StyleSheet} from 'react'
import VideoListItem from './video_list_item'
import './ul.css'

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const videoItems = this.props.videos.map(video => {
            return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video} />;
        });

        return (
            <ul className="no-bullets">
                {videoItems};   
            </ul>
        )
    }
    
}

export default VideoList;
