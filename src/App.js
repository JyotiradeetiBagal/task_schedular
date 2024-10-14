import React, { useState } from "react"; 
import "./App.css"; 

function App() { 
	const [tasks, setTasks] = useState([]); 
	const [completedTasks, setCompletedTasks] = useState([]); 
	const [task, setTask] = useState(""); 
	const [priority, setPriority] = useState("high"); 
	const [deadline, setDeadline] = useState(""); 

	const handleTaskChange = (e) => { 
		setTask(e.target.value); 
	}; 

	const handlePriorityChange = (e) => { 
		setPriority(e.target.value); 
	}; 

	const handleDeadlineChange = (e) => { 
		setDeadline(e.target.value); 
	}; 

	const addTask = () => { 
		//checks if task is already exist or not
		if (tasks.some((t) => t.task === task)) {
		alert("Task already exists.");
		return;
		}

		if (task.trim() === "" || deadline === "") { 
			alert("Please enter a task and select a valid deadline."); 
			return; 
		} 

		const selectedDate = new Date(deadline); 
		const currentDate = new Date(); 

		//ensure deadline must be from future
		if (selectedDate <= currentDate) { 
			alert("Please select a future date for the deadline."); 
			return; 
		} 

		const newTask = {
			id: Date.now(), // Generates a unique timestamp as the ID
			task,
			priority,
			deadline,
			done: false,
		};
     
		setTasks([...tasks, newTask]); 
		setTask(""); 
		setPriority("high"); 
		setDeadline(""); 
	}; 

	const markDone = (id) => { 
		const updatedTasks = tasks.map((t) => 
			t.id === id ? { ...t, done: true } : t 
		); 
		setTasks(updatedTasks); 

		const completedTask = tasks.find((t) => t.id === id); 
		if (completedTask) { 
			setCompletedTasks([...completedTasks, completedTask]); 
		} 
	};
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

	const upcomingTasks = tasks.filter((t) => !t.done); 

  //const sortedTasks = upcomingTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));


	return ( 
		<div className="App"> 
			<header> 
				<h1>Task Scheduler</h1> 
			</header> 
			<main> 
				<div className="task-form"> 
					<input 
						type="text"
						id="task"
						placeholder="Enter task..."
						value={task} 
						onChange={handleTaskChange} 
					/> 
					<select 
						id="priority"
						value={priority} 
						onChange={handlePriorityChange} 
					> 
						<option value="high">High Priority</option> 
						<option value="middle">Middle Priority</option> 
						<option value="low">Less Priority</option> 
					</select> 
					<input 
						type="date"
						id="deadline"
						value={deadline} 
						onChange={handleDeadlineChange} 
					/> 
					<button id="add-task" onClick={addTask}> 
						Add Task 
					</button> 
				</div> 
				<h2 className="heading">Upcoming Tasks</h2> 
				<div className="task-list" id="task-list"> 
					<table> 
						<thead> 
							<tr> 
								<th>Task Name</th> 
								<th>Priority</th> 
								<th>Deadline</th> 
								<th>Action</th> 
                				<th>Delete Task</th> 
							</tr> 
						</thead> 
						<tbody> 
							{upcomingTasks.map((t) => ( 
								<tr key={t.id}> 
									<td>{t.task}</td> 
									<td>{t.priority}</td> 
									<td>{t.deadline}</td> 
									<td>
										{!t.done && (
										<button
											className={`mark-done ${t.priority}`}
											onClick={() => markDone(t.id)}
										>
											Mark Done
										</button>
										)}
									</td>
									<td>
										<button className="delete-task" onClick={() => deleteTask(t.id)}>
										Delete
										</button>
									</td>
								</tr> 
							))} 
						</tbody> 
					</table> 
				</div> 
				<div className="completed-task-list"> 
					<h2 className="cheading">Completed Tasks</h2> 
					<table> 
						<thead> 
							<tr> 
								<th>Task Name</th> 
								<th>Priority</th> 
								<th>Deadline</th> 
							</tr> 
						</thead> 
						<tbody> 
							{completedTasks.map((ct) => ( 
								<tr key={ct.id}> 
									<td>{ct.task}</td> 
									<td>{ct.priority}</td> 
									<td>{ct.deadline}</td> 
								</tr> 
							))} 
						</tbody> 
					</table> 
				</div> 
			</main> 
		</div> 
	); 
} 

export default App; 
