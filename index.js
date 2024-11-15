import {rehype} from 'rehype'
import rehypeHighlight from 'rehype-highlight'
import {read} from 'to-vfile'

const file = await rehype()
  .data('settings', {fragment: true})
  .use(rehypeHighlight)
  .process(await read('example.html'))

console.log(String(file))
