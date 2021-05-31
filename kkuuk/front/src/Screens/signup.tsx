import React, { useState } from 'react';
import api from "../Api/api";
import {Link} from "react-router-dom";


type signupProps = {

}

function SignUp({}:signupProps){


    //state
    const input = document.querySelector('input');

        return(
            <section className="container">
                <h1>가게등록</h1>
                <p>전화번호 : 
                    <input 
                        type="text"
                        
                    /></p>
                <p>가게명 : <input type="text"/></p>
                <p>비밀번호 : <input type="text"/></p>
                <p>비밀번호확인 : <input type="text"/></p>
                <button
                onClick={()=>
                    {       
                        console.log(typeof input);
                        console.log(input);
                               api.signUp({
                                //   name : 
                                //   call : 
                                //   password :
                               }).then((response) => {
                                   return response.data
                               }).then((data) => {
                                   if (data.success) {
                                        <Link to="/">업체등록</Link>
                                   }
                                   else {
                                       alert('Already register');
                                   }
                               }) 
                    }
                   
                   }>등록</button>
            </section>
        )
}

export default SignUp;