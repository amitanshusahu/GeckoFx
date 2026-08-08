import { createSpinner } from "../lib/clack/spinner";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SKILL_NAME = "geckofx-saas-landing-page-skill";

const AGENT_PATHS: Record<string, string> = {
  agents: ".agents/skills",
  claude: ".claude/skills",
  cursor: ".cursor/skills",
};

export function addSkill(options: { claude?: boolean; cursor?: boolean }): void {
  const spinner = createSpinner("Adding skill...");
  spinner.start();

  const templateDir = path.join(__dirname, `./skills/${SKILL_NAME}`);

  if (!fs.existsSync(templateDir)) {
    spinner.stop(`Skill path does not exist: ${templateDir}`);
    return;
  }

  const selected = [
    ...(options.claude ? ["claude" as const] : []),
    ...(options.cursor ? ["cursor" as const] : []),
  ];
  const agents = selected.length > 0 ? selected : ["agents"];

  const added: string[] = [];
  const existing: string[] = [];

  for (const agent of agents) {
    const agentPath = AGENT_PATHS[agent];
    const destination = path.join(process.cwd(), agentPath, SKILL_NAME);

    if (fs.existsSync(destination)) {
      existing.push(agentPath);
      continue;
    }

    fs.cpSync(templateDir, destination, {
      recursive: true,
      force: true,
    });
    added.push(agentPath);
  }

  const messages = [
    ...(added.length > 0 ? [`Added to ${added.join(", ")}`] : []),
    ...(existing.length > 0 ? [`Already exists in ${existing.join(", ")}`] : []),
  ];

  spinner.stop(messages.length > 0 ? messages.join(". ") + "." : "Nothing to do.");
}