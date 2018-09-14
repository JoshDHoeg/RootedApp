import React from 'react';
import Navbar from './../components/Navbar.jsx';
import Jumbotron from './../components/Jumbotron.jsx';
import Ethos from './../components/Ethos.jsx';
import InfoCard from './../components/InfoCard.jsx';
import Steps from './../components/Steps.jsx';
import Pricing from './../components/Pricing.jsx';
import CTA from './../components/CTA.jsx';
import Footer from './../components/Footer.jsx';

//styles
import './../../assets/styles/app.scss';



export default class AboutPage extends React.Component {
render(){
  return(
     <div>
       <Navbar />
       <Jumbotron />
       <Footer />
     </div>
    )
  }
}
