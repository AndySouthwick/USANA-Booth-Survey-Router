import React, { Component } from 'react';

import MyProgressButton from './progressButton'


 export default class Box extends Component{
      state = {
        imageShowHide: 'hide'
      }

    render()
    {
      console.log(this.props)
      return (
        <div className="box">

          <div className="progress-button">
            <MyProgressButton buttonNumber={this.props.buttonNumber} cta={this.props.cta} surveyUrl={this.props.surveyUrl} showImage={(e) => {
              this.setState({
                imageShowHide: ''
              })
            }}/>
          </div>

          <h2>{this.props.cta}</h2>
          <div className='success-message'>
            <div className={`${this.state.imageShowHide}`} dangerouslySetInnerHTML={{__html: this.props.image}}></div>
            <div className={`${this.state.imageShowHide}`}>
              {this.props.next}
            </div>
          </div>

        </div>
      )
    }

}
