import React, { useState } from 'react';

type LoginProps = {

}

type memberProps = {
    num : string;
    name : string;
}

function Login({}:LoginProps){
        const [member,setMember] = useState<memberProps>(
            {
                num : "",
                name : "",
            }
        );

        const joinmemberHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
            setMember({
                ...member,
                [e.target.name] : e.target.value,
            })
        }


        return(
            <section className="container">
                <div>
                    {/* useEffect => get 으로 회원정보 보여줌.*/ }
                    <h3>업체명</h3>
                    <p>총 회원수</p>
                    <p>총 포인트</p>
                </div>
                <div>
                    <h3>회원추가</h3>
                    <p>전화번호(끝 4자리)<input type="text" onChange={joinmemberHandler} value={member.num} name="num"/></p>
                    <p>이름<input type="text" onChange={joinmemberHandler} value={member.name} name="name"/></p>
                    <button>추가</button>
                </div>
                <div>
                    <h3>적립</h3>
                    <p>전화번호(끝 4자리)<input type="text"/></p>
                    <button>조회</button>
                </div>
                <div>
                    <h3>사용</h3>
                    <p>전화번호(끝 4자리)<input type="text"/></p>
                    <button>조회</button>
                </div>

            </section>
        )
}

export default Login;