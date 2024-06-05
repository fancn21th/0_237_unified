import { visit } from "unist-util-visit";

export default function myPlugin(options) {
  return function (tree) {
    visit(tree, "heading", function (node) {
      node.data = {
        ...node.data,
        hProperties: { className: "heading" },
      };
    });
  };
}
