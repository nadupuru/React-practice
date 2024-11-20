import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './component/contactlist'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Police',
    mobileNo: 100,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Firestation',
    mobileNo: 104,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Amubulance',
    mobileNo: 108,
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, mobileNo} = this.state
    const newcontact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    }
    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newcontact],
      name:"",
      mobileNo:""
    }))
  }
  getdeleted=(id)=>{
    const{contactsList}=this.state
    const deletedietms=contactsList.filter(each=>each.id !== id)
    this.setState({contactsList:deletedietms})

  }
  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }
  onfavoriteitem=(id)=>{
    this.setState(prevState=>({
      contactsList:prevState.contactsList.map(each=>{
        if(id===each.id){
          return{...each,isFavorite:!each.isFavorite}
        }
        return each
      }

      )
    })
    )
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem key={eachContact.id} contactDetails={eachContact} 
              onfavoriteitem={this.onfavoriteitem}
              getdeleted={this.getdeleted}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
