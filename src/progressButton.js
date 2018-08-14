import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
export default class MyProgressButton extends Component {



  constructor(props) {

    super(props);
    this.state = {
      buttonNumber: this.props.buttonNumber,
      buttonState: '',
      redirect: false
    };


  }



  handleClick = (url) => {
    this.setState({
      buttonState: 'loading'
    })
    window.open(
      url,
      '_blank' // <- This is what makes it open in a new window.
    );
    setTimeout(() => {
      this.setState({
        buttonState: 'success'
      })
     return this.props.showImage()
    }, 3000)

  }



  render () {

    if(this.state.buttonState === 'success'){
      return (
        <div className='button green-bg' onClick={this.handleClick}> <FontAwesome
          name='check'
          size='2x'
          style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0)' }}
        /></div>
      )
    }
    else if(this.state.buttonState === 'loading'){
      return (
        <div>
          <FontAwesome
            className='super-crazy-colors'
            name='circle-o-notch'
            size='2x'
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </div>


      )
    }else{
     return <div className='button' onClick={(e) => {
       e.preventDefault()
       this.handleClick(this.props.surveyUrl)
     }}><span>{this.props.buttonNumber} {this.props.surveyUrl}</span></div>
    }

  }
}

