import styled from "styled-components";
import { useState } from "react";

import { IoIosAdd } from "react-icons/io";
import { uniqueId } from "lodash";
import { FaTrashAlt } from "react-icons/fa";

export default function GoalsRegister() {
	const [namesList, setNamesList] = useState([]);

	const addNameToList = (name) => setNamesList((previousNames) => [...previousNames, name]);

	const [task, setTask] = useState("");
	const handleClickTask = (event) => setTask(event.target.value);

	function removeNames(indice) {
		const newVector = [...namesList];
		newVector.splice(indice, 1);
		setNamesList(newVector);
	}

	const clearField = () => setTask("");

	const handleSubmit = (event) => {
		event.preventDefault();
		addNameToList({ id: uniqueId(), task });
		clearField();
	};

	return (
		<Container>
			<p>Meta:</p>
			<Content onSubmit={handleSubmit}>
				<input type="text" placeholder="Adicione uma meta" onChange={handleClickTask} value={task} required />
				<button type="submit">
					<IoIosAdd currentcolor="true" />
				</button>
			</Content>
			
				<ul>
					{namesList.length > 0 &&
						namesList.map((item) => (
							<li key={item.id}>
								{item.task}
								<FaTrashAlt onClick={removeNames} />
							</li>
						))}
				</ul>
			
		</Container>
	);
}

const Container = styled.div`
	padding: 30px;
	width: 100%;
	height: 100%;
	box-shadow: 0px 1px 3px #00000029;
	background-color: #ffffff90;
	border: 1px solid #a9abac40;
	border-radius: 5px;
	color: #0a4060;
	display: flex;
	flex-direction: column;

	p {
		margin-bottom: 3px;
		font-weight: 600;
		font-size: 20px;
	}

	ul {
		display: flex;
		flex-direction: column;
		margin-top: 3px;
		gap: 3px;
		list-style: none;
		
		overflow-y: auto;
		width: 495px;
		height: 100%;
		::-webkit-scrollbar {
			width: 3px;
			
		}

		::-webkit-scrollbar-track {
			background-color: #ffffff90;
			border-radius: 50px;
		}

		::-webkit-scrollbar-thumb {
			background-color: #0a4060;
			border-radius: 50px;
		}
		li {
			display: flex;
			justify-content: space-between;
			padding: 9px 5px;
			width: 488px;
			box-shadow: 0px 1px 3px #00000029;
			background-color: #ffffff90;
			border: 1px solid #a9abac40;
			border-radius: 5px;
			color: #0a4060;
			font-weight: 600;
			word-break: break-all;
		}
	
	}
	@media screen and (max-width: 930px){
		padding: 20px;
		/* margin-top: 40px; */
		ul{
			width: 81%;
			height: 100vh;
			li{
				width: 100%;
			}
		}
	}
`;

const Content = styled.form`
	display: flex;
	align-items: center;
	gap: 3px;

	input {
		width: 450px;
		height: 35px;
		padding-left: 5px;
		font-size: 20px;
		box-shadow: 0px 1px 3px #00000029;
		background-color: #ffffff90;
		border: 1px solid #a9abac40;
		border-radius: 5px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		width: 35px;
		height: 35px;
		box-shadow: 0px 1px 3px #00000029;
		background-color: #ffffff90;
		border: 1px solid #a9abac40;
		border-radius: 5px;
		color: #0a4060;
	}

	svg { // arrumar click remove responsivo
		width: 30px;
		height: 30px;
	}
	@media screen and (max-width: 930px){
		padding-left: 0px;
		input{
			width: 75%;
		}
	}
	
`;

