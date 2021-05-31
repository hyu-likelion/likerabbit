import React from 'react';

type LoginProps = {

}

function Login({}:LoginProps){
    //state
        return(
            <section className="container">
                <div>
                    <h3>업체명</h3>
                    <p>총 회원수</p>
                    <p>총 포인트</p>
                </div>
                <div>
                    <h3>회원추가</h3>
                    <p>전화번호(끝 4자리)<input type="text"/></p>
                    <p>이름<input type="text"/></p>
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