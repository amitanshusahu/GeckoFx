import { createSpinner } from "../lib/clack/spinner";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function addSkill(): void {
  const spinner = createSpinner("Adding skill...");
  spinner.start();

  const templateDir = path.join(
    __dirname,
    "./skills/geckofx-saas-landing-page-skill"
  );

  const destination = path.join(
    process.cwd(),
    ".agents/skills/geckofx-saas-landing-page-skill"
  );

  if (!fs.existsSync(templateDir)) {
    spinner.stop(`Skill path does not exist: ${templateDir}`);
    return;
  }

  if (fs.existsSync(destination)) {
    spinner.stop("Skill already exists.");
    return;
  }

  fs.cpSync(templateDir, destination, {
    recursive: true,
    force: true,
  });

  spinner.stop("Skill added successfully!");
}