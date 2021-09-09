import React, {useState} from 'react';
import '../../App.css';
import Footer from '../Footer';
import FormSignUp from '../FormSignUp';
import FormSuccess from '../FormSuccess';
import '../Form.css';


const SignUp = () =>  {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
     <>   
    <h1 className='sign-up'>SIGN UP</h1>
    <div className='form-container'>
     <span className='close-btn'>x</span>
     {/* <div className='form-content-left'>
         <img className='form-img' src='img/'
     </div> */}
    {!isSubmitted ? ( <FormSignUp submitForm={submitForm}/> ): (
        <FormSuccess />
    )}
    </div>
    <Footer />
    
    
    </>
    );
};

export default SignUp;