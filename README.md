# react-expo-snack

## Prerequisites

[Node.js](http://nodejs.org/) >= 6 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

## Using

### Installing

```
npm install --save react-expo-snack
```

### React

#### Props

*id*: The ID of the snack being show. Old and new format is supported (ex: @broonix/mature-apple vs r1hCVAaEZ)
*preview*: Enable or disable the device preview area.
*platform*: Which platform to preview with. values: 'ios' or 'android'
*theme*: Which platform to preview with. values: 'dark' or 'light'
*height*: The height of the embed. Must be a number > 0 defaults to 505.

```
import React, { Component } from 'react'
import ExpoSnack from 'react-expo-snack'

class YourComponent extends Component {
  render() {
    return (
      <div>
        <ExpoSnack id="@broonix/mature-apple"/>
      </div>
    )
  }
}
```
