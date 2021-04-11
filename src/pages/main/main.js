import React, { useState, useEffect, useCallback } from "react";
import * as S from "./styles";
import { Button, ButtonGroup } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { Lock, Unlock } from "react-bootstrap-icons";
import { DataGrid } from "@material-ui/data-grid";
import { getAllUsers, blockUsersList } from "../../redux/users/usersthunk";

const columns = [
	{ field: "id", headerName: "ID", width: 150 },
	{ field: "username", headerName: "Username", width: 250 },
	{ field: "email", headerName: "Email", width: 250 },
	{ field: "registrationDate", headerName: "registrationDate", width: 350 },
	{ field: "lastLoginDate", headerName: "Last login", width: 350 },
	{ field: "isActive", headerName: "isActive", width: 125 },
];

export default function Main() {
	const { data, isLogIn } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	function deleteClick(e) {
		e.preventDefault();
		console.log("Delete");
	}

	function unbockClick(e) {
		e.preventDefault();
		console.log("unblock");
	}


	const [selectionModel, setSelectionModel] = useState([]);
	


	return (
		<S.Container>
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary">Delete</Button>
				<Button variant="secondary" onClick ={blockUsersList(selectionModel)}>
					<Lock />
				</Button>
				<Button variant="secondary" onClick={unbockClick}>
					<Unlock />
				</Button>
			</ButtonGroup>

			<div style={{ height: "100%", width: "100%" }}>
				<DataGrid
					checkboxSelection
					rows={data}
					columns={columns}
					pregistrationDateSize={5}
					onSelectionModelChange={(newSelection) => {
						setSelectionModel(newSelection.selectionModel);
					}}
				/>
			</div>
		</S.Container>
	);
}

/*
const mapDispatchToProps = {
	submitLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
*/
