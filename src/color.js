import {createContext, useState} from "react";

export const ColorContext = createContext({
    // color: 'black'} );
    state: {color: 'black', subColor: 'red'},
    actions: {
        setColor: () => {
        },
        setSubColor: () => {
        },
    }
});

const ColorProvider = ( { children } ) => {
    const [ color, setColor ] = useState( 'black');
    const [ subColor, setSubColor ] = useState( 'red');

    const value = {
        state: { color, subColor },
        actions: { setColor, setSubColor },
    };

    return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider 와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };