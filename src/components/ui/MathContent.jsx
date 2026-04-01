import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

export default function MathContent({ content }) {
  return (
    <div className="prose prose-stone max-w-none prose-headings:text-navy prose-a:text-teal prose-strong:text-navy prose-p:text-navy prose-li:text-navy">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content || ''}
      </ReactMarkdown>
    </div>
  )
}
