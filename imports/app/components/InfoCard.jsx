import React from 'react';

export default class InfoCard extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: ""
    }
  }

    render(){
        return (
          <section className="container-fluid" id="info-card">
            <div className="row">
              <div className="container card">
                <h3>Root’d is on a Mission</h3>
                <p> Root’d is a mission-driven organization from Denver, CO. We grew out of the Mountain West. We appreciate great food and great nature on a daily basis and we think  everyone ought to live & work following the campsite rule: leave things better than you found them. </p>
                <p>At Root’d, we believe that urban landscapes ought to contribute to a healthy urban ecosystem. This perspective grounds everything we do.</p>
                <a href="" className="btn">Learn more about us</a>
              </div>
            </div>
          </section>
        );
    }
}
