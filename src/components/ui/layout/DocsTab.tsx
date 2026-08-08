import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../../../lib/utils";
import { componentMap } from "../../../component.map.autogen";
import { CopyIcon } from "@phosphor-icons/react";

type DocsTabProps = {
  children: ReactNode,
  componentName?: string,
}

export default function DocsTab({
  children,
  componentName,
}: DocsTabProps) {

  const component = componentMap.find(c => c.name === componentName);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div>
      <div className='flex items-center justify-center'>
        {children}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8 lg:mt-16">
        <div className="w-full lg:w-1/2 gap-4">
          <div
            onClick={() => {
              navigator.clipboard.writeText(`npx geckofx add ${componentName}`);
              setCopied(true);
            }}
            className="border border-line border-dashed px-4 py-2 w-full flex items-center justify-between gap-4"
          >
            <span className="text-neutral-300 text-xs">npx geckofx add {componentName}</span>
            {
              copied ? (
                <span className="text-xs text-secondary">Copied!</span>
              ) : (
                <CopyIcon size={16} className="text-neutral-400" />
              )
            }
          </div>

          {component?.tags && (
            <div className="border border-line border-dashed p-4 w-full">
              <h3 className="text-sm font-medium text-neutral-400 mb-2">tags</h3>
              <div className="flex flex-wrap gap-2">
                {component.tags.map((tag) => (
                  <span key={tag} className="text-xs text-neutral-300 px-2 py-1 bg-white/5 border border-white/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 h-fit border border-line border-dashed overflow-x-auto">
          {componentName && <DocsTable componentName={componentName} />}
        </div>
      </div>
    </div>
  )
}

function DocsTable({
  componentName
}: {
  componentName: string,
}) {

  const component = componentMap.find(c => c.name === componentName);
  if (!component?.props) return null;

  const entries = Object.entries(component.props);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-sm text-neutral-400 py-2 px-4 border-r border-r-line border-dashed">props</th>
          <th className="text-left text-sm text-neutral-400 py-2 px-4">types</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([prop, type]) => (
          <tr key={prop}>
            <td className={cn(
              "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line"
            )}>{prop}</td>
            <td className={cn(
              "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed"
            )}>{Array.isArray(type) ? type.join(" | ") : type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}