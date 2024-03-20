import {useState} from "react";
import EventPracticeFun from "./EventPracticeFun";


const EventPracticeFun2=()=>{
    const [form, setForm] = useState({
        username:'aaa',
        address:'bbb',
        age:333,
        tel:'ddd',
    });
    const { username, address, age, tel } = form;

    const onChange=e=>{
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm( nextForm )
    }

    const onClick = ()=>{
        console.log( username + ":" + address+ ":" + age + ":" + tel )

        setForm( {
            username:'',
            address:'',
            age:'',
            tel:''
        })
    }
    const onKeyPress =e=>{
        if ( e.key === 'Enter')
            onClick();
    }


    const fields = [
        { name: 'username', placeholder: '사용자명' },
        { name: 'address', placeholder: '주소' },
        { name: 'age', placeholder: '나이', type:'number' },
        { name: 'tel', placeholder: '전화번호', onKeyDown:onKeyPress },
    ];

    return(
        <div>
            <h1>연스</h1>
            {fields.map((field, index) => (
                <input
                    {...field}
                    key={index}
                    value={form[field.name]}
                    type={field.type || 'text'}
                    onChange={onChange}
                />
            ))}
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPracticeFun2;