import { instance } from "./api";

export const savePersonName = async (obj) => {
    console.log(obj);
    await instance.post('/', obj)
}

export const deletePerson = async (id) => {
    await instance.delete('/' + id);
}

export const getPersons = async () => {
    const data = await instance.get('/');
    return data.data;
}

export const updatePerson = async (id, obj) => {
    await instance.put('/' + id, obj);
}