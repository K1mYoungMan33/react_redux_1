import {useState} from "react";


const EventPracticeFun=()=>{
    const [username, setUsername] = useState( '' );
    const [message , setMessage] = useState( '' );

    const onChangeUsername = e=> setUsername( e.target.value);
    const onChangeMessage = e=> setMessage( e.target.value);

    const onClick =()=>{
        console.log( username + ":" + message ) ;
        setUsername( '' );
        setMessage( '' );
    }

    const onKeyPress = e=>{
        if ( e.key === 'Enter'){
            onClick();
        }
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const fields = [
        { name: 'username', placeholder: '사용자명', value: username },
        { name: 'message', placeholder: '메시지를 입력해주세요', value: message }
    ];

    return (
        <div>
            <h1>연스</h1>


            {fields.map((field, index) => (
                <input
                    key={index}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={onChangeInput}
                    onKeyDown={onKeyPress}
                />
            ))}

            {/*<input*/}
            {/*    type={'text'}*/}
            {/*    name={'username'}*/}
            {/*    placeholder={'사용자명'}*/}
            {/*    value={username}*/}
            {/*    onChange={onChangeUsername}*/}
            {/*    />*/}

            {/*<input*/}
            {/*    type={'text'}*/}
            {/*    name={'message'}*/}
            {/*    placeholder={'메시지를 입력해주세요'}*/}
            {/*    value={message}*/}
            {/*    onChange={onChangeMessage}*/}
            {/*    onKeyDown={onKeyPress}*/}
            {/*    />*/}
        </div>
    )
}

export default EventPracticeFun;