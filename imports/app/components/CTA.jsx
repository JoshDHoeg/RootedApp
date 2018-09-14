import React from 'react';

export default class CTA extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: ""
    }
  }

    render(){
        return (
          <section className="container-fluid" id="CTA">
            <div className="row">
              <div className="container">
                <h3>Make your yard’s tough spot tough not to love</h3>
                <a href="" className="btn">Start Your Project</a>
              </div>
            </div>
          </section>
        );
    }
}
