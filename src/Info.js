import {useEffect, useState} from "react";

const Info=()=> {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log('렌더링이 완료되었습니다!');
        console.log( name, nickname )
        return ()=>{
            console.log( "z클린업")
            console.log( name, nickname );
        }
    },[name])


    const onChangeName = e => {
        console.log("이름변경");
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        console.log("닉네임 변경");
        setNickname(e.target.value);
    }

    const CustomInput = ({ param }) => (
        // <input type='text' value={this[param]} onChange={this['onChange'+param]} />
        <></>
    );

    return (
        <div>
            {/*<input type={'text'} value={name} onChange={onChangeName}/><br/>*/}
            {/*<input type={'text'} value={nickname} onChange={onChangeNickname}/><br/>*/}
            <CustomInput param={'name'}/><br/>
            <CustomInput param={'nickname'}/><br/>
            <label>이름:</label>{name}<br/>
            <label>닉네임:</label>{nickname}<br/>
        </div>
    )
}
export  default  Info;