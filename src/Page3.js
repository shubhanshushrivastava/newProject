import React from "react";
import "./Page3.css";
import imgphone from "./images/Page3iphone.png";
import p3download from "./images/p3download.png";

function Page3() {
  return (
   
    <div className="p3Container">
      <div className="p31">
        <div className="p31text">
          <p className="p31p1">Why choose Us</p>
          <h1 className="h1">Unlock the lonliness into the stress free life</h1>
          <h1 className="h2">-WE ARE HERE FOR YOU !!</h1>
          <p className="p31p2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur minus quaerat suscipit quia adipisci, ad ullam quidem
            voluptate necessitatibus delectus esse sapiente harum odio optio
            temporibus laboriosam minima architecto quae quas molestias
            molestiae. Tempora nemo corrupti maiores, velit minus repellendus,
            harum, quod natus possimus minima ex enim eius nihil.
          </p>
          <div >
          <img className="p31button" src={p3download} alt="" />
        </div>
        </div>
        
      </div>
      <div className="p32">
        <img className="page3img" src={imgphone} alt="" />
      </div>
      
    </div>
    
  );
}

export default Page3;
