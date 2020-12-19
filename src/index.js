import "./styles.css";
import "./commands";
import { showCommandbar } from "./commandbar";
import { generateNode, insertNode } from "./nodes";
const doc = document.getElementById("document");
const node = generateNode("p");
insertNode(doc, node);

document.onselectionchange = (e) => {
  showCommandbar();
};
