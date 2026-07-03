import { Highlight } from 'prism-react-renderer';
import type { PrismTheme } from 'prism-react-renderer';
import Button from './Button';
import { useState } from 'react';

const hotPinkTheme: PrismTheme = {
  plain: {
    backgroundColor: '#000000',
    color: '#e0e0e0',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#555555', fontStyle: 'italic' } },
    { types: ['punctuation'], style: { color: '#888888' } },
    { types: ['namespace'], style: { opacity: 0.7 } },
    { types: ['tag', 'keyword', 'boolean', 'number', 'operator', 'constant'], style: { color: '#ff69b4' } },
    { types: ['function', 'builtin', 'attr-name', 'property', 'function-variable'], style: { color: '#ff1493' } },
    { types: ['string', 'attr-value', 'char'], style: { color: '#ffc3d6' } },
    { types: ['class-name'], style: { color: '#ff69b4' } },
    { types: ['variable'], style: { color: '#e0e0e0' } },
    { types: ['deleted'], style: { color: '#ff1493' } },
    { types: ['inserted'], style: { color: '#ffc3d6' } },
  ],
};

type CodeTabProps = {
  source: string,
  width?: number,
}

export default function CodeTab({
  source,
  width,
}: CodeTabProps) {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="w-full h-full relative border border-line border-dashed rounded">
      <Button
        className='absolute top-0 right-0 text-xs px-2 py-1 bg-white/10 border-white/20 z-10 hover:bg-white/20 rounded border-t-0 border-r-0'
        onClick={handleCopy}
        edgeWidth={7}
        edgeOpacity={0}
      >
        <span className='flex gap-1'>
          {copied ? 'copied!' : 'copy'}
        </span>
      </Button>
      <Highlight code={source} language="tsx" theme={hotPinkTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              maxWidth: width ? `${width}px` : "100%",
              overflowX: "auto",
              padding: "1em",
              borderRadius: "0.5em",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} style={{ display: "table-row" }}>
                <span style={{ display: "table-cell", textAlign: "right", paddingRight: "1em", userSelect: "none", opacity: 0.4 }}>
                  {i + 1}
                </span>
                <span style={{ display: "table-cell", paddingLeft: "1em" }}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}