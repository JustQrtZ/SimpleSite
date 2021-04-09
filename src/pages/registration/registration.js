import React, { Component } from "react";
import * as S from "./styles";
import { Button, Form } from "react-bootstrap";

export const Registration = () => {
	return (
		<S.Container>
			<Form>
				<S.Text>Sign up</S.Text>
        <Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="Enter username" />
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>
				<Button variant="outline-primary">Submit</Button>
				<p className="register text-center">
					Don't have an account? <a href={"/Login"}>register!</a>
				</p>
			</Form>
		</S.Container>
	);
};
