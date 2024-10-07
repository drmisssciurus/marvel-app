import { createRoot } from "react-dom/client";
import App from "./components/app/App";

import "./style/style.scss";




const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

console.log('Hello There! My name is Alina! Here I am learning to use React, if you are interested in giving me a job, feel free to contact me: https://www.linkedin.com/in/alina-levintas/ \nMay The Force be with you!');