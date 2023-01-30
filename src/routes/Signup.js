
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form'



function Signup() {
    return(
        <div>
            <Navbar />
            <Heroimg2 heading="Having An Event?" text="Generate Tickets Here"/>
            <Form />
            <Footer />
        </div>
    )
}
export default Signup;