import fs from "fs";
import { toKebab } from "../src/lib/utils";
import { componentMap } from "../src/component.map";

function generateDocsPageContent(componentName: string) {

  const componentNameKebab = toKebab(componentName);

  const content = `
import { createLazyFileRoute } from '@tanstack/react-router';
import ${componentName} from '../../components/svg/${componentName}';
import ${componentName}Code from '../../components/svg/${componentName}?raw';
import Button from '../../components/ui/layout/Button';
import DocsTab from '../../components/ui/layout/DocsTab';
import { useState, useRef, useEffect } from 'react';
import CodeTab from '../../components/ui/layout/CodeTab';

export const Route = createLazyFileRoute('/docs/${componentNameKebab}')({
  component: RouteComponent,
})

function RouteComponent() {
  const [tab, setTab] = useState<"docs" | "code">("docs");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth - 100);
    }
  }, []);

  return <div className='p-4'>
    <div ref={containerRef} className='h-fit w-full p-8 flex flex-col gap-8'>
      <div className="flex justify-between">
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>{"<"}</h1>
          <h1 className='text-xl font-bold text-primary'>{${componentName}.name}</h1>
          <h1 className='text-xl font-bold ml-2'>{"/>"}</h1>
        </div>
        <div className="flex gap-4">
          <Button
            edgeOpacity={tab === "docs" ? 100 : 50}
            edgeWidth={7}
            className={tab !== "docs" ? 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10' : 'bg-primary text-white hover:bg-primary/90 border-white font-semibold'}
            onClick={() => setTab("docs")}
          >
            docs
          </Button>
          <Button
            edgeOpacity={tab === "code" ? 100 : 50}
            edgeWidth={7}
            className={tab !== "code" ? 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10' : 'bg-primary text-white hover:bg-primary/90 border-white font-semibold'}
            onClick={() => setTab("code")}
          >
            code
          </Button>
        </div>
      </div>
      {tab === "docs" ? (
        <DocsTab>
          <div className='flex flex-col gap-20 h-full w-full items-center justify-center'>
            <${componentName} />
          </div>
        </DocsTab>
      ) : (
        <CodeTab source={${componentName}Code} width={containerWidth} />
      )}
    </div>
  </div>
}

  `
  return content
}

function getRouteFilePath(componentName: string) {
  const componentNameKebab = toKebab(componentName);
  return `src/routes/docs/${componentNameKebab}.lazy.tsx`;
}

async function main() {
  try {
    const docsDir = "src/routes/docs";
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    for (const component of componentMap) {
      const content = generateDocsPageContent(component.name);
      const filePath = getRouteFilePath(component.name);
      fs.writeFileSync(filePath, content.trimStart());
      console.log(`Generated: ${filePath}`);
    }

    console.log(`\nDone! Generated ${componentMap.length} docs pages.`);
  }
  catch (error) {
    console.error("Error generating docs:", error);
    process.exit(1);
  }
}

main();