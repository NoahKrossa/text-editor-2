/** Event controllers */
const onfocusNode = (e) => {};
const onBlurNode = (e) => {};

export const generateNode = (tagName) => {
  const node = document.createElement(tagName);
  node.contentEditable = true;
  node.onfocus = onfocusNode;
  node.onblur = onBlurNode;
  return node;
};

export const insertNode = (parent, node) => {
  parent.appendChild(node);
};
