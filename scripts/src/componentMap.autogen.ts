import { knowledgeBase } from "./knowledge";
import fs from "fs";

const componentMapGenPath = "./src/component.map.autogen.ts";

function generateComponentMap() {
  const componentMapContent = `// IMPORTANT
// This file is auto-generated. Do not edit directly.

export const componentMap = ${JSON.stringify(knowledgeBase, null, 2)};
`;

  fs.writeFileSync(componentMapGenPath, componentMapContent);
  console.log(`Generated: ${componentMapGenPath}`);
}

function main() {
  try {
    generateComponentMap();
    console.log("Component map generated successfully.");
  } catch (error) {
    console.error("Error generating component map:", error);
  }
}

main();