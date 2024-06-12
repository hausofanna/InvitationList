import { useState } from 'react';
import { deletePerson, getPersons, savePersonName, updatePerson } from './services/people';
import { Content } from './components/app.styles';
function App() {
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [people, setPeople] = useState([]);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <h3>Create people</h3>
            <label> Write your name here: <input type="text" onChange={(e) => setName(e.target.value)} /></label>
            <button onClick={() => savePersonName({ name: name })}> Save</button>
            <h3>Delete people</h3>
            <label> Write the ID to delete: <input type="text" onChange={(e) => setId(e.target.value)} /></label>
            <button onClick={() => deletePerson(id)}> Delete</button>
            <h3>Update people</h3>
            <label> Write the ID to update: <input type="text" onChange={(e) => setId(e.target.value)} /></label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => updatePerson(id, ({ name: name }))}>Update</button>
            <h3>People List</h3>
            <button onClick={() => {
                setVisible(!visible), getPersons().then(data => {
                    setPeople(data)
                })
            }}>Show</button>
            <Content isVisible={visible}>
                {people.map(person => (
                    <div key={person.id}>
                        <p>{person.id} - {person.name}</p>
                    </div>
                ))}
            </Content>
        </>
    )
}

export default App
