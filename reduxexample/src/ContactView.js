export function ContactView({contact, deleteEvent}) {
    return <li>
        {contact.email}, {contact.name} 
        <button onClick={deleteEvent}>Delete</button>
    </li>
}