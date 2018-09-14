import React from 'react';

const Step = props => (
  <div className="col-md-6">
    <h4>{props.step.title}</h4>
    <img src={props.step.img} />
    <p>{props.step.text}</p>
  </div>
);


export default class Steps extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: ""
    }
  }

    render(){
      const step1 = {
        title: "SHOW US YOUR SPACE",
        img: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
        text: "Take a few photos and measurements to get us familiar with your space"
      }
      const step2 = {
        title: "TELL US ABOUT YOUR PROJECT",
        img: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
        text: "Let us know about your goals, needs, and take our style quiz to get started"
      }
      const step3 = {
        title: "GET CUSTOM DESIGNS",
        img: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
        text: "Root’d will use our proprietary plant data and environmental analysis techniques to create two custom and easy to understand planting plans"
      }
      const step4 = {
        title: "TWEAK IT TILL YOU DIG IT",
        img: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
        text: "Work with our designers on revisions to make sure your design is exactly what you want, then we help you get it in the ground. DIY or full service, we can make sure the next steps are as easy as possible"
      }
        return (
          <section className="container" id="steps">
            <div className="row">
              <div className="container">
                <h3>How it Works!</h3>
              </div>
            </div>
            <div className="row">
                <Step step={step1} ></Step>
                <Step step={step2} ></Step>
                <Step step={step3} ></Step>
                <Step step={step4} ></Step>
            </div>
          </section>
        );
    }
}
