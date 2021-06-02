import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {signup} from "../Api/api";


type signupProps = {
    name : string;
    call : string;
    password : string;
}

function SignUp({name,call,password}:signupProps){


    //state
    const [seller,setSeller] = useState<signupProps>({
        name : "",
        call : "",
        password : "",
    });

    const signupHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSeller({
            ...seller,
            [e.target.name]:e.target.value,
        });
    }

    const passwordCorrectHandler = ()=>{
        //if(seller.password === )
    }
    //유효성검사 추가 중복 등.

        return(
            <section className="container">
                <h1>가게등록</h1>
                <p>전화번호 : <input type="text" onChange={signupHandler} value={seller.call} name="call"/></p>
                <p>상호명 : <input type="text" onChange={signupHandler} value={seller.name} name="name"/></p>
                <p>비밀번호 : <input type="text" onChange={signupHandler} value={seller.password} name="password"/></p>
                <p>비밀번호확인 : <input type="text" onChange={passwordCorrectHandler}/></p>  {/*유효성 검사*/}
                <button
                onClick={()=>
                    {       
                        //post
                        console.log(seller);
                        signup(seller).then(response=>response.data).then((data)=>{
                            if(data.success){
                                <Link to="/"/>
                            }else{

                            }
                        })
                    }
                   
                   }>등록</button>
            </section>
        )
}

export default SignUp;