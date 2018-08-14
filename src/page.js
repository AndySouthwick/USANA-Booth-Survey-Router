import React, { Component } from 'react';
import Box from './box'
import store from './store'
import LanguageSelector from './languageSelector'
import { connect } from 'react-redux'
import {theLanguage} from './language'

class Page extends Component {
  constructor () {
    super()
    const currentState = store.getState()
    this.state = {
      ...currentState
    }
    console.log(currentState)
  }


  passDataToFunction = () => {
    this.setState({
      reRender: true
    })
  }



  theBox = () => {
    console.log('state', this.state)
    if(!this.props.reRender){
      return(
        <LanguageSelector reRenderFront={this.passDataToFunction}/>
      )
    }else{
      switch (this.props.newLanguageObj) {
        case theLanguage[0].lang:
        return  theLanguage[0].boxData.map(e => {
            return(
              <div key={e.number}>
                <Box buttonNumber={e.number}  cta={e.callToAction} image={e.image} next={e.whatHappensNext} surveyUrl={e.surveyUrl}/>
              </div>
            )
          })
        case theLanguage[1].lang:
          return  theLanguage[1].boxData.map(e => {
            console.log(e)
            return(
              <div>
                <Box buttonNumber={e.number}  cta={e.callToAction} image={e.image} next={e.whatHappensNext} surveyUrl={e.surveyUrl}/>
              </div>
            )
          })
        default:
          return
      }
    }
  }
  render() {
    return (
      <div className="App">
        <h1><img src="/images/dxc-logo-black.png" alt=""/></h1>
        <div>
          {this.theBox()}
        </div>

      </div>
    );
  }
}


const mapStateToProps = state => ({
    newLanguageObj: state.languageObj,
    reRender: state.reRender
})
const reduxConnect = connect(mapStateToProps)(Page)
export default reduxConnect