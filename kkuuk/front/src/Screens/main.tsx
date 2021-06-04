import React, { useEffect, useState } from 'react';
import {getSeller} from "../Api/api.js"
import Loading from '../Components/Loading.js';

type MainProps = {

}

type sellerProps = {
    sellerName : string | undefined;
    totalMember : undefined | number;
    totalPoint : number | undefined;
}
type memberProps = {
    name : string;
    callNum : string; 
}
type memberPointProps = {
    name : string;
    callNum : string;
    point : number;
}

function Main({}:MainProps){
        var pk = 0; // 매장별 primary key
        const [seller,setSeller] = useState<sellerProps>({
            sellerName : undefined,
            totalMember : undefined,
            totalPoint : undefined,
        });
        const [member,setMember] = useState<memberProps>({
            name : "",
            callNum : ""

        });
        const [memberPoint, setMemberPoint] = useState<memberPointProps>({
            name : "",
            callNum : "",
            point : 0,
        })
        
        //seller의 정보 조회
        useEffect(()=>{
            getSeller().then(data=>setSeller(data));
        },[]);


        //member 인풋 상태 변화 state에 저장
        const joinmemberHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
            setMember({
                ...member,
                [e.target.name] : e.target.value,
            })
        }

        const memberPointHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
            setMemberPoint({
                ...memberPoint,
                [e.target.name] : e.target.value,
            })
        }


        return(
            <section className="container">
                {!(seller.sellerName===undefined)? <p>Loading</p>:
                
                <div>
                    <div>
                    {/* useEffect => get 으로 회원정보 보여줌.*/ }
                    <h3>{`업체명 : ${seller.sellerName}`}</h3>
                    <p>{`회원 수 : ${seller.totalMember}`}</p>
                    <p>{`총 포인트 : ${seller.totalPoint}`}</p>
                </div>
                <div>
                    {/*POST 추가*/}
                    {/*POST 시 다시 GET요청 or db에만 적용하고 렌더되는 메모리 상으로 임의로 바꿔줌*/}
                    <h3>회원추가</h3>
                    <p>전화번호(끝 4자리)<input type="text" onChange={joinmemberHandler} value={member.callNum} name="callNum"/></p>
                    <p>이름<input type="text" onChange={joinmemberHandler} value={member.name} name="name"/></p>
                    <button>추가</button>
                </div>
                <div>
                    <h3>적립</h3>
                    <p>전화번호(끝 4자리)<input type="text"/></p>
                    <button>조회</button>
                    <p>적립액<input type="text" onChange={memberPointHandler} value={memberPoint.point*-1} name="point"/></p>
                    <button>적립</button>
                </div>
                <div>
                    <h3>사용</h3>
                    <p>전화번호(끝 4자리)<input type="text"/></p>
                    <button>조회</button>
                    <p>사용액<input type="text" onChange={memberPointHandler} value={memberPoint.point} name="point"/></p>
                    <button>사용</button>
                </div>
                </div>
                }
            </section>
        )
}

export default Main;