
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form'



function Signup() {
    return(
        <div>
            <Navbar />
            <Heroimg2 heading="SIGN UP" text="Register for an Account to Enjoy Special Features"/>
            <Form />
            <Footer />
        </div>
    )
}
export default Signup;