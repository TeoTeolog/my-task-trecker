import Task from "./Task";

const Tasks = (props) => {
  return (
    <>
      {props.tasks.length > 0
        ? props.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={props.onDelete}
              onToggle={props.onToggle}
            />
          ))
        : "task list is empty"}
    </>
  );
};

export default Tasks;
