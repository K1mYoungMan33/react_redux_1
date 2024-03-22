import styles from "./CSSModule.module.css";
import styles2 from "./CSSModule2.module.css";
import classNames from 'classnames/bind';

const cx = classNames.bind( styles );

export const CSSModules=()=>{

    console.log( styles )
    console.log( styles2 )

    const MySpan = (()=><>안녕하세요, 저는 <span className="something">CSS Module!</span></>);

    const MyComponent=({highlighted, theme}) => <div className={classNames('MyComponent', { highlighted }, theme )}>Hello</div>
    const MyComponent2=({highlighted, theme}) => <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' :''}`}>Hello</div>

    return <>
            <div className={cx('wrapper')}>
                <MySpan/>
            </div>
            {/*<div className={`${styles2.wrapper2} ${styles.inverted}`}>*/}
            <div className={cx('wrapper', 'inverted')}>
                <MySpan/>
            </div>

            <MyComponent/>
            <MyComponent2/>

            <MyComponent highlighted='true' theme='wrapper'/>
            <MyComponent2 highlighted='true' theme='wrapper'/>
            </>
}