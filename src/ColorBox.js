import {ColorContext} from "./color";

export const ColorBox=()=>{
    return <>
            <ColorContext.Consumer>
                { value =>
                    console.log ( value ) ||
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        background: value.color
                    }}
                    />
                }
            </ColorContext.Consumer>
    </>
}