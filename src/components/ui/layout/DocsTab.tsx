import { cn } from "../../../lib/utils";
import { componentMap } from "../../../component.map";

type DocsTabProps = {
  children: React.ReactNode,
}

export default function DocsTab({
  children
}: DocsTabProps) {

  return (
    <div>
      <div className='flex items-center justify-center'>
        {children}
      </div>

      <div className="border border-line border-dashed mt-16">

      </div>
    </div>
  )
}

function DocsTable({
  componentName
}: {
  componentName: string,
}) {

  const component = componentMap.find(c => c.name === componentName)!;
  const props = component.props;

  if (!props) return null;

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-sm text-neutral-400 py-2 px-4 border-r border-r-line border-dashed">props</th>
          <th className="text-left text-sm text-neutral-400 py-2 px-4 border-r border-r-line border-dashed">types</th>
          <th className="text-right text-sm text-neutral-400 py-2 px-4">description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={cn(
            "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line"
          )}>size</td>
          <td className={cn(
            "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line"
          )}>number</td>
          <td className={cn(
            "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line", "text-right")}>size of the server stack component</td>
        </tr>
        <tr>
          <td className={cn(
            "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line"
          )}>color</td>
          <td className={cn(
            "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line"
          )}>string</td>
          <td className={cn(
            "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line",
            "text-right"
          )}>
            color of the server stack component
          </td>
        </tr>
      </tbody>
    </table>
  )
}