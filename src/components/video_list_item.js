import React, {Component} from 'react'

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imgURL = this.props.video.snippet.thumbnails.default.url;

        return (
        <li onClick={() => this.props.onVideoSelect(this.props.video)}>
            <img src={imgURL} alt="video" />
            <div>{this.props.video.snippet.title}</div>
        </li>
        );
    }

    
};

export default VideoListItem;
