import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function App(props){
	const [taskArray, setTaskArray] = useState([]);
	const [newTask, setNewTask] = useState("");

	function handleSubmit(event){
		event.preventDefault();
		event.target[1].value = ""
		let tmp = taskArray.slice();
		tmp.push(newTask);
		setTaskArray(tmp);
	}

	function handleDeleteButton(index){
		const newTaskArray = [...taskArray];
		newTaskArray.splice(index, 1);
		setTaskArray(newTaskArray);
	}

	return (
		<div>
			<ul>
				{taskArray.map((taskContent, index) => (
					<li key={index}>
						<button onClick={()=> handleDeleteButton(index)}>X</button>
						{taskContent}
					</li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
				<input type="submit" value="add task"/>
				<input type="text" name="newTask" onChange={(event) => setNewTask(event.target.value)}/>
			</form>
		</div>
	);
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);