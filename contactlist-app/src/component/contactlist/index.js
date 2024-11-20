import './index.css'
const ContactItem = props => {
  const {contactDetails,onfavoriteitem,getdeleted} = props
  const {name, mobileNo, isFavorite,id} = contactDetails

  const onchange=()=>{
    onfavoriteitem(id)
  }
  
  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const ondelete=()=>{
    getdeleted(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" className="favorite-icon-container" onClick={onchange}>
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
        <button onClick={ondelete} type='button' className='deletebutton'>Delete</button>
      </div>
    </li>
  )
}

export default ContactItem
