import styles from "./CSSModule.module.css";
import styles2 from "./CSSModule2.module.css";


export const CSSModules=()=>{

    console.log( styles )
    console.log( styles2 )

    const MySpan = (()=><>안녕하세요, 저는 <span className="something">CSS Module!</span></>);

    return <>
            <div className={styles.wrapper}>
                <MySpan/>
            </div>
            <div className={`${styles2.wrapper2} ${styles.inverted}`}>
                <MySpan/>
            </div>

            </>
}