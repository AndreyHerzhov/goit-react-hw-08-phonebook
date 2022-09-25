// import { combineReducers, createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, removeContact } from "./contacts-operations";

// const itemsSlice = createSlice({
//     name: "items",
//     initialState: [],
//     extraReducers: {
//         [fetchContacts.fulfilled]: (_, {payload}) => payload,
//         [addContact.fulfilled]: (store, {payload}) => [...store, payload],
//         [removeContact.fulfilled]: (store, {payload}) => store.filter(item => item.id !== payload)
//     }
// })

// const loadingSlice = createSlice({
//     name: "loading",
//     initialState: false,
//     extraReducers: {
//         [fetchContacts.pending]: () => true,
//         [fetchContacts.fulfilled]: () => false,
//         [fetchContacts.rejected]: () => false,
//         [addContact.pending]: () => true,
//         [addContact.fulfilled]: () => false,
//         [addContact.rejected]: () => false,
//         [removeContact.pending]: () => true,
//         [removeContact.fulfilled]: () => false,
//         [removeContact.rejected]: () => false
//     }
// })

// const errorSlice = createSlice({
//     name: "error",
//     initialState: null,
//     extraReducers: {
//         [fetchContacts.pending]: () => null,
//         [fetchContacts.rejected]: (_, {payload}) => payload,
//         [addContact.pending]: () => null,
//         [addContact.rejected]: (_, {payload}) => payload,
//         [removeContact.pending]: () => null,
//         [removeContact.rejected]: (_, {payload}) => payload
//     }
// })

// const contactsReducer = combineReducers({
//     items: itemsSlice.reducer,
//     loading: loadingSlice.reducer,
//     error: errorSlice.reducer
// })


// export default contactsReducer

import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contacts-operations";

const initialState = {
        items:[],
        loading: false,
        error: null,
        filter: ''
    }

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.error = null
            store.loading = true
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.items = payload
            store.loading = false
        },
        [fetchContacts.rejected]: (store, {payload}) =>  {
            store.error = payload
            store.loading = false
        },
        [addContact.pending]: (store) => {
            store.loading = true
            store.error = null
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.loading = false
            store.items = [...store.items, payload]
        },
        [addContact.rejected]: (store, {payload}) => {
            store.loading = false
            store.error = payload
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(item => item.id !== payload)
            store.loading = false
        },
        [removeContact.pending]: (store, {payload}) => {
            store.loading = true
            store.error = null
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.error = payload
            store.loading = false
        },
            
    },
    reducers: {
        setFilter: (store, {payload}) => {
            store.filter = payload
         },
    },
})

export const { setFilter } = contactsSlice.actions
export default contactsSlice.reducer