import { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please, input text");
      return;
    }
    if (!day) {
      alert("please, input day");
      return;
    }
    props.onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check ">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
