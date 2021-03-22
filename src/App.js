import React, {Component} from 'react'
import classes from './App.css'
import Layout from './Components/Layout/Layout';
import Features from './Containers/Features/Features';
import BuildingImage from './Components/BuildingImage/BuildingImage';
import KeyFeatures from './Components/KeyFeatures/KeyFeatures';
import ProfessionalAccount from './Containers/ProfessionalAccount/ProfessionalAccount';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <div className={classes.App}>
        <Layout/>
        <Features/>
        <BuildingImage />
        <KeyFeatures />
        <ProfessionalAccount />
        <Footer/>
      </div>
    );

  }
}

export default App;
