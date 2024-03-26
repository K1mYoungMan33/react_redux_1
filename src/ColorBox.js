import {ColorConsumer, ColorContext} from "./color";

export const ColorBox=()=>{
    return <>
            {/*<ColorContext.Consumer>*/}
        <ColorConsumer>
                { value =>
                    console.log ( value ) ||
                    <>
                    <div
                    style={{
                        width: '64px',
                        height: '64px',
                        background: value.state.color
                    }}
                    />
                    <div
                    style={{
                        width: '32px',
                        height: '32px',
                        background: value.state.subColor
                    }}
                    />
                    </>
                }
            {/*</ColorContext.Consumer>*/}
        </ColorConsumer>
    </>
}