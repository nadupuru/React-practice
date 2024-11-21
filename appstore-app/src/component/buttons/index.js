import './index.css'
const Button=(props)=>{
    const{buttonlist,setactiveid,isActive}=props
    const{name,id}=buttonlist
    const buttonchange=()=>{
        setactiveid(id)
    }
    const Activecolor=isActive?"tabitem":""
    return(
        <li className="list1">
            <button className={`button ${Activecolor}`} type="button" onClick={buttonchange}>{name}</button>
        </li>
    )
}
export default Button