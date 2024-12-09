import {readContacts} from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contactList = await readContacts;
    return contactList;
};

console.log(await getAllContacts());
