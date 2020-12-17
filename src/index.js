import "./styles.css";
import "./commands";
import { generateNode, insertNode } from "./nodes";
const doc = document.getElementById("document");
const node = generateNode("p");
insertNode(doc, node);
