export const CREATE_NEW_CONTACT = "create_new_contact";
export const REMOVE_CONTACT = "remove_contact";

// action creators => return Action object
export const createContact = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        payload: contact
    }
}

export const deleteContact = (email) => {
    return {
        type: REMOVE_CONTACT,
        payload : email
    }
}


