import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

console.log(container);

const root = createRoot(container as HTMLElement);
root.render(<App />);
