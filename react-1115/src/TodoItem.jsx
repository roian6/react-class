import React from "react";

const TodoItem = props =>{
  React.useEffect(()=>{
    console.log("mount")
    return ()=>{
      console.log("unmount")
    }
  }, []);

  return(
    <div>todo</div>
  )
} 
export default TodoItem;
