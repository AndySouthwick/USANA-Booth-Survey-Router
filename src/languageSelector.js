import React, {Component} from 'react'
import {FormGroup, Label, Input} from 'reactstrap'
import store from './store'
import {theLanguage} from './language'
import { connect } from 'react-redux'
import {changeLanguage} from './actions'

class LanguageSelector extends Component{
  constructor () {
    super()
    const currentState = store.getState()
    this.state = {
      ...currentState
    }
    console.log(this.state)
  }

  render(){
    return(
      <FormGroup>
        <Label for="exampleSelect">Select Language</Label>
        <Input type="select" name="select" id="exampleSelect" onChange={e => {
          console.log('from target', e.target.value)
          store.dispatch(changeLanguage(e.target.value))
          console.log(this.props.newLanguageObj)
        }}>
          <option value="">...</option>
          {
            theLanguage.map(e => {
              return (
                <option value={e.lang}
                key={e.lang}>{e.lang}</option>
              )
            })
          }
        </Input>
      </FormGroup>
    )
  }
}

const mapStateToProps = state => ({
    newLanguageObj: state.languageObj
})
const reduxConnect = connect(mapStateToProps)(LanguageSelector)
export default reduxConnect