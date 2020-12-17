import { updateConfigBar } from "./commandbar";
const buttonCommands = document.querySelectorAll("button");

const onClickButtonCommand = (e) => {
  const btn = e.target;
  const command = btn.name;
  document.execCommand(command);
  updateConfigBar(btn, document.queryCommandState(command));
};

buttonCommands.forEach((btn) => {
  btn.onclick = onClickButtonCommand;
});
