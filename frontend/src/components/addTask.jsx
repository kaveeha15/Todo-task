import { useState } from 'react';
import '../css/addTask.css'
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';


const AddTask = () => {
const [data, setData] = useState([])
const { postData,isLoading, err,getData} = useFetch()
const[taskData,setTaskdata]=useState(
  {
    title: "",
    description: ""
  }
)
  const handleValue = (e) => {
    setTaskdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleSubmit = () => {
    if (!taskData.title || !taskData.description) return;

    postData('http://localhost:5000/task/postTasks',taskData).then(() => {
      setTaskdata({ title: "", description: "" })
      refreshTasks()
    })
  }
  const refreshTasks = () => {
    getData('http://localhost:5000/task/getTasks').then((res) => {
      setData(res);
    })
  }
 useEffect(()=>{
  refreshTasks()
 },[])

    return ( 
    <div className="mainContainer">
    
     
      <div className="taskContainer">
        <h2>Add a Task</h2>
        <input type="text" name="title" placeholder="Title" value={taskData.title} onChange={handleValue} />
        <textarea name="description" placeholder="Description" value={taskData.description} onChange={handleValue} />
        <div className="btnContainer">
           <div className="btn" onClick={handleSubmit}>Add</div>
        </div>
      </div>
      <div className="displayTask">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <div className="taskList" key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="doneBtn">Done</div>
            </div>
          ))
        )}
      </div>

    </div>
     )
}
 
export default AddTask;