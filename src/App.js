import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const Api_Key = "ac5313f45f4e8193dd31e6989dc6338d";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city: '',
      country: '',
      temperature: '',
      humidity: '',
      description: ''
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      temperature: response.main.temp,
      humidity: response.main.humidity,
      description: response.weather[0].description
    })
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        city={this.state.city}
        country={this.state.country}
        temperature={this.state.temperature} 
        humidity={this.state.humidity}
        description={this.state.description}
        />
      </div>
    )
  }
}

export default App;