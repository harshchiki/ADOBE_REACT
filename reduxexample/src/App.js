
import { useRef, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ContactView } from './ContactView';
import { createContact, deleteContact } from './redux/ActionTypes';

function App() {
  let {contacts} = useSelector(state => state.contacts);
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    let contact = {
      name,
      email
    }
    createNewContact(contact);
  }
  return (
   <div>
    <h1>Contacts</h1>
    <h3>Add Contact</h3>
    <form onSubmit={handleSubmit}>
      Name <input type="text" onChange={(evt) => setName(evt.target.value)} /> <br />
      Email <input type="text" onChange={(evt) => setEmail(evt.target.value)}/> <br />
      <button type="submit">Add Contact</button>
    </form>
    <ul>
    {
      contacts.map(contact => <ContactView 
        contact={contact} 
        deleteEvent={() => dispatch({"type": "REMOVE_CONTACT", payload: contact.email})}
        key ={contact.email}/>)
    }
    </ul>
   </div>
  );
}

// // state ==> redux store state
// // returned values are props to App
// function mapStateToProps(state) {
//   return {
//     contacts: state.contacts
//   }
// }
//  function mapDispatchProps(dispatch) {
//    return {
//     createNewContact: contact => dispatch(createContact(contact)),
//     removeContact: email => dispatch(deleteContact(email))
//    }
//  }
// export default connect(mapStateToProps, mapDispatchProps)(App);

export default App;