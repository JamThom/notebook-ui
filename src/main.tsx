import App from "./App";
import { createRoot } from "react-dom/client";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const container = document.getElementById("root");

const root = createRoot(container as HTMLElement);
root.render(<App />);
