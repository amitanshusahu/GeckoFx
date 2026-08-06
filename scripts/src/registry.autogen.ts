import fs, { readFile } from "fs";
import path from "path";
import { toKebab } from "../../src/lib/utils";
import { knowledgeBase } from "./knowledge";

async function getComponentContent(componentName: string): Promise<string> {
  const file = path.resolve(
    "./src/components/svg",
    `${componentName}.tsx`
  );

  return new Promise((resolve, reject) => {
    readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getRouteFilePath(componentName: string) {
  const componentNameKebab = toKebab(componentName);
  return `public/registry/${componentNameKebab}.json`;
}

async function generateResgistryJsonFiles() {
  const registryDir = "public/registry";
  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true });
  }

  for (const component of knowledgeBase) {
    const content = await getComponentContent(component.name);
    const registryJson = {
      name: component.name,
      content: content,
    };
    const filePath = getRouteFilePath(component.name);
    fs.writeFileSync(filePath, JSON.stringify(registryJson, null, 2));
    console.log(`Generated: ${filePath}`);
  }

  console.log(`\nDone! Generated ${knowledgeBase.length} registry json files in ${registryDir} \n`);
}

async function generateRegistryIndexFile() {
  const registryIndexDir = "cli/src"
  if (!fs.existsSync(registryIndexDir)) {
    fs.mkdirSync(registryIndexDir, { recursive: true });
  }

  const registryFilePath = path.join(registryIndexDir, "registry.autogen.ts");
  const registryIndexContent = ` // IMPORTANT
// This file is auto-generated. Do not edit directly.

export const componentMap = ${JSON.stringify(knowledgeBase, null, 2)};
`;
  fs.writeFileSync(registryFilePath, registryIndexContent);
  console.log(`Generated: ${registryFilePath} \n`);
}

async function main() {
  try {
    await generateResgistryJsonFiles();
    await generateRegistryIndexFile();
    console.log("\n\n")
  }
  catch (error) {
    console.error("Error generating registry:", error);
    process.exit(1);
  }
}

main();