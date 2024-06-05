import { visit } from "unist-util-visit";

let length = 0;

export default function plugin(options) {
  return function (tree) {
    visit(tree, "text", function (node) {
      length += node.value.length;
      console.log("length", length);
    });
  };
}
