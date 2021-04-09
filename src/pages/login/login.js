import React, { useState } from "react";
import * as S from "./styles";
import { Button, Form } from "react-bootstrap";
import { login } from "../../redux/account/thunk";
import { connect } from "react-redux";

const Login = ({ submitLogin }) => {
	const [state, setState] = useState({ email: "", password: "" });
	const onChange = (field) => (event) => {
		setState((state) => ({ ...state, [field]: event.target.value }));
	};	
	
	return (
		<S.Container>
			<Form>
				<S.Text>Sign in</S.Text>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={state.email}
						onChange={onChange("email")}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter password"
						value={state.password}
						onChange={onChange("password")}
					/>
				</Form.Group>
				<Button variant="outline-primary" onClick={()=>submitLogin(state.email, state.password)}>Submit</Button>
				<p className="register text-center">
					Don't have an account? <a href={"/signup"}>register!</a>
				</p>
			</Form>
		</S.Container>
	);
};

const mapDispatchToProps = {
	submitLogin: login,
};
export default connect(null, mapDispatchToProps)(Login);
