import { knowledgeBase } from "./knowledge";
import fs from "fs";

const typeGenPath = "./scripts/src/types/autogenTypes.ts";

function generateTypeDefinitions() {
  const componentNames = knowledgeBase.map((entry) => entry.name);
  const typeDefinitions = `// IMPORTANT
// This file is auto-generated. Do not edit directly.

export type ComponentName = ${componentNames.map(name => `"${name}"`).join(" | ")};
`;

  fs.writeFileSync(typeGenPath, typeDefinitions);
  console.log(`Generated: ${typeGenPath}`);
}

function main() {
  try {
    generateTypeDefinitions();
    console.log("Type definitions generated successfully. \n");
  } catch (error) {
    console.error("Error generating type definitions:", error);
  }
}

main();