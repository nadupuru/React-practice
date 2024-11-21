import './index.css'
const Project=(props)=>{
    const{projectdetails}=props
    const{imageUrl,appName}=projectdetails
    return(
        <li className="card">
            <img src={imageUrl} alt="img" className="image"/>
            <p>{appName}</p>
        </li>
    )

}
export default Project