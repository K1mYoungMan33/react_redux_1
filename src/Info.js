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

    let aaa = 'onChange';
    let bbb = {}

    const CustomInput = ({ param }) => (
        console.log( 'onChange'+param ) ||
        // console.log( 'onChange'+param.charAt(0).toUpperCase() + param.slice(1) ) ||
        // console.log( ['name'] ) ||
        // console.log( ['onChangeName'] ) ||
        // (false&(aaa = ('onChange'+param.charAt(0).toUpperCase() + param.slice(1) ) ) )||
        // (const {name}=param)||
        // console.log( Info.call(param ) ||
        (false&(bbb={
            name:{value:name,onChange:onChangeName},
            nickname:{value:nickname,onChange:onChangeNickname},
        }[param]))||
        // console.log( [aaa] ) ||
        // <input type='text' value={[param]} onChange={['onChange'+param.charAt(0).toUpperCase() + param.slice(1)]} />
        // <input type='text' value={param} onChange={(e)=>Info.call(onChangeName)} />
        <input type='text' {...bbb} />
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