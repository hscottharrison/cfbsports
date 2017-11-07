import React, {Component} from 'react';
import PreviewCard from './previewCard';

import './styles.css'
export default class Feed extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="main-feed-wrapper">
        <div className="main-feed">

          <PreviewCard />

        </div>
      </div>
    )
  }
}
