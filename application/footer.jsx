
import React from 'react';
import { render } from 'react-dom';


class footer extends React.Component {
  render() {
   
    return (
      <div>
        <div className="line"></div>
           <div className="footertext">My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. 
       </div>
     
        <div className= "icon">  
         <img src="../image/facebook-icon"  className ="icon"/>
          <img src="../image/youtube.ico" className ="icon" />
        </div>
         
      </div>
    );
  }
}

export default footer;
