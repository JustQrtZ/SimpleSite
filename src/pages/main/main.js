import React, { useState } from "react";
import * as S from "./styles";
import { Button, Form } from "react-bootstrap";
import { register } from "../../redux/account/thunk";
import { connect } from "react-redux";
	
const Register = ({ submitRegistration }) => {
	const [state, setState] = useState({ email: "",username: "", password: "" });
	const onChange = (field) => (event) => {
		setState((state) => ({ ...state, [field]: event.target.value }));
	};	

return (
		<S.Container>
			<Form>
				<S.Text>Sign up</S.Text>
        <Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={state.email} onChange={onChange("email")}/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="Enter username" value={state.username} onChange={onChange("username")}/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" value={state.password} onChange={onChange("password")}/>
				</Form.Group>
				<Button variant="outline-primary" onClick={()=>submitRegistration(state.email,state.username, state.password)} >Submit</Button>
				<p className="register text-center">
					Don't have an account? <a href={"/Login"}>register!</a>
				</p>
			</Form>
		</S.Container>
	);
};


const mapDispatchToProps = {
	submitRegistration: register,
};
export default connect(null, mapDispatchToProps)(Register);
