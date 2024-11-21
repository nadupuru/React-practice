import './index.css'
const Destinationsearch=(props)=>{
    const{destinationsList}=props
    const{name,imgUrl}=destinationsList
    return(
        <li className="listcard">
            <img src={imgUrl} alt={name} className='image'/>
            <p>{name}</p>

        </li>
    )
}
export default Destinationsearch