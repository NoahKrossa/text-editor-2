import "./styles.css";
import "./commands";
import { buttonCommands } from "./commands";
import { showCommandbar, updateAllConfigBar } from "./commandbar";
import { generateNode, insertNode } from "./nodes";
const doc = document.getElementById("document");
const node = generateNode("p");
insertNode(doc, node);

document.onselectionchange = (e) => {
  console.log(buttonCommands);
  updateAllConfigBar(buttonCommands);
  showCommandbar();
};
