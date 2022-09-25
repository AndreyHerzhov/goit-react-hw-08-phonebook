export const getFilteredContacts = (store) => {

    if(!store.contacts.filter){
        return store.contacts.items;
    }
    const normalizedFilter = store.contacts.filter.toString().toLowerCase();
    const result = store.contacts.items.filter(({name}) => {
        const normalizedName = name.toLowerCase();
        
        return (normalizedName.includes(normalizedFilter))
    });

    return result;
}
 
export const getFilter = ({contacts}) => contacts.filter;
