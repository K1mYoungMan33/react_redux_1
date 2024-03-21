import './SassComponent.scss'

export const SassComponent=()=>{
    return <div className="SassComponent">
        {[ "red", "orange", "yellow", "green", "blue", "indigo", "violet"].map((field,index)=>
            <div className={`box ${field}`} />
        )}
        {/*<div className="box red" />*/}
        {/*<div className="box orange" />*/}
        {/*<div className="box yellow" />*/}
        {/*<div className="box green" />*/}
        {/*<div className="box red" />*/}
        {/*<div className="box red" />*/}
        {/*<div className="box red" />*/}
    </div>
}