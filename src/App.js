import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css'

const Api_Key = "ac5313f45f4e8193dd31e6989dc6338d";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city: '',
      country: '',
      temperature: '',
      humidity: '',
      description: '',
      error: ''
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);

    if (city && country) {
      this.setState({
        city: response.name,
        country: response.sys.country,
        temperature: response.main.temp,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter a city and country"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;