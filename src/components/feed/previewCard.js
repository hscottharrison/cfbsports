import React, {Component} from 'react';


import './styles.css';

export default class PreviewCard extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="preview-wrapper">
        <img className="preview-image" src="https://cdn.vox-cdn.com/thumbor/LHmuj-5pBNJS-MK_SwcSVaciE1I=/0x0:4511x3377/1200x800/filters:focal(1896x1329:2616x2049)/cdn.vox-cdn.com/uploads/chorus_image/image/56426287/usa_today_9534292.0.jpg" />

      </div>
    )
  }
}
