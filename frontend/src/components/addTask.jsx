import { useState } from 'react';
import '../css/addTask.css'
import useFetch from '../hooks/useFetch';

const AddTask = () => {

const { postData,isLoading, err } = useFetch();
const[taskData,setTaskdata]=useState(
  {
    title: "",
    description: ""
  }
)
  const handleValue = (e) => {
    setTaskdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!taskData.title || !taskData.description) return;

    postData('http://localhost:5000/task/postTasks',taskData).then(() => {
      setTaskdata({ title: "", description: "" });
      
    });
  };


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




    </div>
     );
}
 
export default AddTask;