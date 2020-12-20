import { updateConfigBar } from "./commandbar";
const buttonCommands = document.querySelectorAll("button");

const onClickButtonCommand = (e) => {
  let btn;
  if (e.target.name) btn = e.target;
  else btn = e.target.parentNode;
  const command = btn.name;
  console.log(command);
  document.execCommand(command);
  updateConfigBar(btn, document.queryCommandState(command));
};

buttonCommands.forEach((btn) => {
  btn.onclick = onClickButtonCommand;
});
