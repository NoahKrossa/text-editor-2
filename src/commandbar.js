const commansdbar = document.getElementById("commandsbar");
export const updateConfigBar = (btn, state) => {
  console.log(btn);
  btn.dataset.state = `${state}`;
};

export const showCommandbar = () => {
  const selection = document.getSelection();
  if (selection) {
    const range = selection.getRangeAt(0);
    const sRect = range.getBoundingClientRect(range);
    if (sRect.width) commansdbar.style.display = "table";
    else commansdbar.style.display = "none";
  }
};
