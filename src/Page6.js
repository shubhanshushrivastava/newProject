import React from 'react'
import './Page6.css'

function Page6() {
  return (
    <div className='page6' id='page6'>
        <div className="formContainer">
        <div className="formBoxtext">
            <h1>You deserve someone to talk !</h1>
            <p>we're here for you</p>
          </div>
        <div className="formBox" >
         <h3>want to get in touch ?</h3>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSffkUBDIdOvYgYO1WfZG3rFpo4n9BEutHTo2mwbIzuxHunXjQ/formResponse" method="post">
            <input className='forminp1' type="text" placeholder='your name' name='entry.956595017' />
            <input className='forminp'  placeholder='Email Address' type="text" name='entry.619096687' />
            <input placeholder='Mobile Number'  className='forminp' type="text" name='entry.414690585' />
            <input  className='forminpo' placeholder='Your message for us' type="text" name='entry.555647950' />
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
        <div className="footer">
            <div className="footerBox">
             <div className="item1">
              <h2>Uplift</h2>
              <p>© copyright 2023uplift</p>
             </div>
             <div className="item2">
              
             </div>
             <div className="item3"></div>

            </div>
        </div>
    </div>
  )
}

export default Page6