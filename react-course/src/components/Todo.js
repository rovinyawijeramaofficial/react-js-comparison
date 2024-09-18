function Todo(props){

    function showModalHandler() {
       
      }

    return (
    <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'> 
      <button className='btn' onClick={showModalHandler}>Delete</button>
    </div>
  </div>
    );
}

export default Todo;