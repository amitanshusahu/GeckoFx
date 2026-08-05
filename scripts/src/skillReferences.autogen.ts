import { knowledgeBase } from "./knowledge"
import fs from "fs";

const createComponentSkillReferenceDir = "./cli/src/skills/geckofx-saas-landing-page-skill/references/components";

function generateComponentSkillReferenceFiles() {
  if (!fs.existsSync(createComponentSkillReferenceDir)) {
    fs.mkdirSync(createComponentSkillReferenceDir, { recursive: true });
  }

  for (const component of knowledgeBase) {
    const referenceFilePath = `${createComponentSkillReferenceDir}/${component.name}.json`;
    const referenceContent = component;
    fs.writeFileSync(referenceFilePath, JSON.stringify(referenceContent, null, 2));
    console.log(`Generated: ${referenceFilePath}`);
  }

  console.log(`\nDone! Generated ${knowledgeBase.length} component skill reference files in ${createComponentSkillReferenceDir} \n`);
}

function main() {
  try {
    generateComponentSkillReferenceFiles();
    console.log("Component skill reference files generated successfully.");
    console.log("\n\n")
  } catch (error) {
    console.error("Error generating component skill reference files:", error);
  }
}

main();