import { Highlight } from 'prism-react-renderer';
import type { PrismTheme } from 'prism-react-renderer';

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
}

export default function CodeTab({
  source,
}: CodeTabProps) {
  return (
    <Highlight code={source} language="tsx" theme={hotPinkTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            maxWidth: "60vw",
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
  )
}