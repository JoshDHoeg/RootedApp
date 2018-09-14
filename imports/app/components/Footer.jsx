import React from 'react';

export default class Footer extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: ""
    }
  }

    render(){
        return (
          <section className="container-fluid" id="footer">
            <div className="row">
              <div className="container">
                <p>this is the footer</p>
              </div>
            </div>
          </section>
        );
    }
}
