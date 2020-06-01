import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class IframeSection extends React.Component {
  render() {
    return <div>{ ReactHtmlParser(this.props.videoData) }</div>;
  }
}

export default IframeSection;
