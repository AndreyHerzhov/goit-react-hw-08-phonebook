import * as api  from "shared/api/contacts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkAPI) => {
        try {
            const data = await api.getContacts()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue()
        }
    }
)

const isDuplicate = ({name}, contacts) => {
    const normalizedName = name.toLowerCase()
    const result = contacts.find(item => {
        return (normalizedName === item.name.toLowerCase())
    })
   return Boolean(result)
}


export const addContact = createAsyncThunk( 
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
         
            const result = await api.addContact(data)
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState()
            // console.log(contacts.items)
            if(isDuplicate(data, contacts.items)){
                alert("Alert")
                return false
            }
            }
        }
    

 )

export const removeContact = createAsyncThunk( 
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
 )
 