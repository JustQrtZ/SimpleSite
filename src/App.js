import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import { generateStore } from "./redux/store/createStore";
import Router from "./routers/routers";

const store = generateStore();

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
