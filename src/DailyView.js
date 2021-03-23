import './App.css';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Sun1 from './WeatherIcons/Sun1.png';
import SnowImage from './WeatherIcons/SnowImage.png';
import Windy from './WeatherIcons/Windy.png';
import {DateTime} from './DateTime';
import {Link} from 'react-router-dom';

class DailyView extends Component {
    render() {
        return (
            <div className="App">
      <header className="App-header">
                <h1>React Weather App</h1>
 <br></br>
    <CardDeck>
    
    <Card>
      <Card.Img variant="top" src={SnowImage} />
      <Card.Body>
        <Card.Title>Miami</Card.Title>
        <Card.Text>
          There is a 90% chance of snow in Miami.{' '}
          <br></br>
          <button><Link to="/Miami">Miami</Link></button>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <DateTime/>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={Sun1} />
      <Card.Body>
        <Card.Title>Charlotte</Card.Title>
        <Card.Text>
          Sunny no chance of rain!<br></br>
          Expect snow by tonight!

          <br></br>
          <button><Link to="/Charlotte">Charlotte</Link></button>
          {/* link to the Charlotte.js, so the button navigates us to that page */}
          {/* link cannot be outside of the router tag.... */}
          {/* button goes here */}
          {/* <button Link to ="Charlotte">Charlotte</button> */}

         
           
              {/* <Link to='/Charlotte' target="_blank" >Weekly View
              
              {/*  */}
                  {/* <Button>
                        TAKE ME TO THE DAMN PAGE 
                  </Button> */}

              {/* </Link>
           */}

        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <DateTime/>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={Windy} />
      <Card.Body>
        <Card.Title>New York</Card.Title>
        <Card.Text>
          It is windy.
          <br></br>
          <button><Link to="/NewYork">New York</Link></button>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <DateTime/>
      </Card.Footer>
    </Card>
  </CardDeck>
</header>
</div>

)
}
}
export default DailyView;