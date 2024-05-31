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

import fs from "fs";
import { retext } from "retext";
import { reporter } from "vfile-reporter";
import retextSentenceSpacing from "./plugins/index.js";

const buffer = fs.readFileSync("example.md");

retext()
  .use(retextSentenceSpacing)
  .process(buffer)
  .then((file) => {
    console.error(reporter(file));
  });
