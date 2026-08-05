import { knowledgeBase } from "./knowledge";
import fs from "fs";

const typeGenPath = "./types/autogenTypes.ts";

function generateTypeDefinitions() {
  const componentNames = Object.entries(knowledgeBase).map(([name]) => name);
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
    console.log("Type definitions generated successfully.");
  } catch (error) {
    console.error("Error generating type definitions:", error);
  }
}

main();