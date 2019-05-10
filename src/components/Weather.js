import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
      <div>
        Location: {this.props.city} {this.props.country}
        Temperature: {this.props.temperature}
        Humidity: {this.props.humidity}
        Conditions: {this.props.description}
      </div>
    )
  }
}

export default Weather
