import { visit } from "unist-util-visit";

export default function plugin(options) {
  return function (tree) {
    visit(tree, "heading", function (node) {
      node.data = {
        ...node.data,
        hProperties: { className: "i-am-highlighted" },
      };
    });
  };
}
