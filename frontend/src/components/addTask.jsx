import '../css/addTask.css'

const AddTask = () => {
    return ( 
    <div className="mainContainer">
    
     
      <div className="taskContainer">
        <h2>Add a Task</h2>
        <input type="text" name="title" placeholder="Title"  />
        <textarea name="description" placeholder="Description"  />
        <div className="btnContainer">
          <div className="btn" >Add</div>
        </div>
      </div>

     
       
</div>

     );
}
 
export default AddTask;