import { visit } from "unist-util-visit";

// // 定义一个函数，用于将文本拆分成三部分
// function splitTextIntoThreeParts(text) {
//   const length = Math.ceil(text.length / 3);
//   return [
//     text.slice(0, length),
//     text.slice(length, length * 2),
//     text.slice(length * 2),
//   ];
// }

export default function plugin(options) {
  return function (tree) {
    visit(tree, "text", (node, index, parent) => {
      console.log(node);

      // // 如果当前 `text` 节点的父节点不是 `paragraph`，进行转换
      // if (parent && parent.type !== "paragraph") {
      //   const parts = splitTextIntoThreeParts(node.value); // 拆分文本
      //   const newChildren = parts.map((part) => ({
      //     type: "inlineCode",
      //     value: part,
      //     data: { hProperties: { className: ["i-am-highlighted"] } },
      //   })); // 为每个部分创建新的 `text` 节点

      //   const paragraphNode = {
      //     type: "paragraph",
      //     children: newChildren,
      //   }; // 创建新的 `paragraph` 节点

      //   parent.children.splice(index, 1, paragraphNode); // 替换旧的 `text` 节点
      // }
    });
  };
}
