import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from './store';;
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>
);
