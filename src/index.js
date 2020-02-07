import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import reminders from "./store/reducers/reminders";

// Redux Chrome Devtool Extension
const composeEnhancers =
	process.env.NODE_ENV === "development"
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: null || compose;

const store = createStore(reminders, composeEnhancers(applyMiddleware(thunk)));

const appShell = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(appShell, document.getElementById("root"));
registerServiceWorker();
