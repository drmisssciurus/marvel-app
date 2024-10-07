import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import MarvelServise from "./services/MarvelService";
import "./style/style.scss";

const marvelService = new MarvelServise();

marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)))


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

console.log('Hello There! My name is Alina! Here I am learning to use React, if you are interested in giving me a job, feel free to contact me: https://www.linkedin.com/in/alina-levintas/ \nMay The Force be with you!');