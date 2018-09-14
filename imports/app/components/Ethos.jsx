import React from 'react';

export default class Ethos extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: ""
    }
  }

    render(){
        return (
          <section className="container-fluid" id="ethos">
            <div className="row">
              <div className="container">
                <p>Root’d makes great design and high-performance landscapes accessible. We use proprietary plant data and environmental analysis to create a garden that’s a cut above:</p>
                <div className="line"></div>
                <h5>Water-saving  |  Beautiful  |  Tough  |  Pollinator-friendly</h5>
                <div className="line"></div>
              </div>
            </div>
          </section>
        );
    }
}
