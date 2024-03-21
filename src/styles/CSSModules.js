import styles from "./CSSModule.module.css";


export const CSSModules=()=>{
    return <div className={styles.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
}