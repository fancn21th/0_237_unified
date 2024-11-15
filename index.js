// import { stream } from "unified-stream";
// import { unified } from "unified";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";

// const processor = unified()
//   .use(remarkParse)
//   .use(remarkRehype)
//   .use(rehypeStringify);

// process.stdin.pipe(stream(processor)).pipe(process.stdout);

// import fs from "fs";
// import { retext } from "retext";
// import { reporter } from "vfile-reporter";
// import retextSentenceSpacing from "./plugins/index.js";

// const buffer = fs.readFileSync("example.md");

// retext()
//   .use(retextSentenceSpacing)
//   .process(buffer)
//   .then((file) => {
//     console.error(reporter(file));
//   });

// import { stream } from "unified-stream";
// import { unified } from "unified";
// import remarkParse from "remark-parse";
// import remarkGfm from "remark-gfm";
// import remarkRehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";

// const processor = await unified()
//   .use(remarkParse)
//   .use(remarkGfm)
//   // .use(remarkRehype)
//   .use(remarkRehype, {
//     footnoteBackLabel(referenceIndex, rereferenceIndex) {
//       return (
//         "Hochspringen nach: " +
//         (referenceIndex + 1) +
//         (rereferenceIndex > 1 ? "-" + rereferenceIndex : "")
//       );
//     },
//     footnoteLabel: "Fußnoten",
//   })
//   .use(rehypeStringify);

// process.stdin.pipe(stream(processor)).pipe(process.stdout);

import { stream } from "unified-stream";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import { default as plugin } from "./plugin.js";

const processor = unified()
  .use(remarkParse) // markdown -> mdast
  .use(remarkGfm)
  .use(plugin)
  // .use(headingPlugin)
  .use(remarkRehype) // mdast -> hast
  .use(rehypeStringify); // hast -> html

process.stdin.pipe(stream(processor)).pipe(process.stdout);
