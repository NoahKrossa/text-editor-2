const commansdbar = document.getElementById("commandsbar");

const setCommandsbarPos = (top, left) => {
  if (left < 0) left = 0;
  commansdbar.style.left = left + "px";
  commansdbar.style.top = top + "px";
};

export const updateConfigBar = (btn, state) => {
  console.log(btn);
  btn.dataset.state = `${state}`;
};

export const showCommandbar = () => {
  const selection = document.getSelection();
  if (selection) {
    const range = selection.getRangeAt(0);
    const sRect = range.getBoundingClientRect(range);
    if (!sRect.width) {
      commansdbar.style.display = "none";
      return;
    } else {
      commansdbar.style.display = "table";
      let top = sRect.top - commansdbar.offsetHeight - 10;
      let left =
        sRect.left + sRect.width / 2 - commansdbar.offsetWidth / 2;
      setCommandsbarPos(top, left);
    }
  }
};
