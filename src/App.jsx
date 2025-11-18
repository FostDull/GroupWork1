import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [selected, setSelected] = useState([])

  const addTask = (e) =>{
    e.preventDefault()
    if(task.trim() === '') return

    setTasks([...tasks, { id: Date.now(), text: task }])
    setTask('')
    
  }

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(sid => sid !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const deleteSelected = (id) => {
    setTasks(tasks.filter(t => !selected.includes(t.id)) )
    setSelected([])
  }

  return (
    <div className="App">
      <h1>TodoList</h1>

      {/* Task Input Form */}

      <form onSubmit={addTask} style={{ marginBottom: '20px' }}>
        <input 
          type="text"
          placeholder="Write space"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '10px', width: '300px' }}
        />
        <div style={{marginTop: '15px'}}>
          <button type="submit" style={{ padding: '10px', marginRight: '10px' }}>ADD</button>

          <button onClick={deleteSelected} style={{padding: '10px'}}>DELETE</button>

        </div>        
      </form>

      
      {/* Task List */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>N</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={index}>
              <td>
                <input 
                  type="checkbox"
                  checked={selected.includes(t.id)}
                  onChange={() => toggleSelect(t.id)}
                />
              </td>
              <td>{t.text}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
