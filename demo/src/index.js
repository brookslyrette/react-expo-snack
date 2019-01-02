import React, { Component } from 'react'
import {render} from 'react-dom'

import ExpoSnack from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-expo-snack</h1>

        <h3>iOS - Dark Theme (default)</h3>
        <ExpoSnack id="@broonix/mature-apple"/>
        <h3>iOS - Light Theme</h3>
        <ExpoSnack id="@broonix/brave-ice-cream" theme="light"/>
        <h3>Android - Light Theme</h3>
        <ExpoSnack id="r1hCVAaEZ" theme="light" platform="android"/>
        <h3>No Preview - Dark Theme</h3>
        <ExpoSnack id="r1hCVAaEZ" theme="dark" preview="false"/>
        <h3>No Preview - Light Theme - Custom Height</h3>
        <ExpoSnack id="r1hCVAaEZ" theme="light" preview="false" height={900}/>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
