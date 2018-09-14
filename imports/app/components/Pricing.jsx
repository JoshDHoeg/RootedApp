import React from 'react';

const Tier = props => (
  <div className="col-sm-12 col-md-4">
    <h4>{props.tier.title}</h4>
    <p className="price">{props.tier.price}</p>
    <p className="description">{props.tier.description}</p>
    <p className="addon">{props.tier.addon}</p>
  </div>
);

export default class Pricing extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: ""
    }
  }
  render(){
    const tier1 = {
      title: "Pro Design",
      price: "$229 up to 200 sq. ft.",
      description: "Take a few photos and measurements to get us familiar with your space",
      addon: ""
    }
    const tier2 = {
      title: "Rain Garden",
      price: "$99 Stand-alone design",
      description: "Let us know about your goals, needs, and take our style quiz to get started",
      addon: "$49 Add-on"
    }
    const tier3 = {
      title: "Watering Plan",
      price: "$49 Add-on",
      description: "Root’d will use our proprietary plant data and environmental analysis techniques to create two custom and easy to understand planting plans",
      addon: "$49 per 50 sq. ft. extra"
    }
    return (
      <section className="container" id="pricing">
        <div className="row">
          <div className="container">
            <h3>Pricing</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="row">
          <Tier tier={tier1} />
          <Tier tier={tier2} />
          <Tier tier={tier3} />
        </div>
      </section>
    );
  }
}
