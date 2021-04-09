import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "../pages/login/login";
import { path } from "./path";
import { NotFound } from "../pages/notFaund/notFound";
import  Registration from "../pages/registration/registration";
import { useSelector } from "react-redux";
import withInit from '../hoc/withinit'

const Router = () => {
	const isLogin = useSelector((state) => state.account.isLogIn);
  console.log({isLogin})
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={path.main}>
					{!isLogin ? (
            <Redirect to={path.login} />
          ):(
            <div> HI </div>
          )}
				</Route>
				<Route exact path={path.login}>
        {isLogin ? (
            <Redirect to={path.main} />
          ):(
            <Login />
          )}
				</Route>
				<Route exact path={path.signup}>
        {isLogin ? (
            <Redirect to={path.main} />
          ):(
            <Registration />
          )}
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default withInit (Router)