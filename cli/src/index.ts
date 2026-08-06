#!/usr/bin/env node

import { cac } from "cac";
import { addComponent } from "./commands/addComponent";
import { addComponents } from "./commands/addComponents";
import { findNAddComponents } from "./commands/findNAddComponents";
import { searchComponent } from "./commands/searchComponent";
import { addSkill } from "./commands/addSkill";

const cli = cac("geckofx");

cli.command("", "MultiSelect Components to add to your project")
    .action(async () => {
        await addComponents();
    })

cli.command("add", "Add a components from the registry to the project")
    .action(async () => {
        const components = process.argv.slice(3); // first 3 is bun, geckofx, add
        for (const component of components) {
            await addComponent(component);
        }
    });

cli.command("find", "Find and add a component from the registry to the project in a loop")
    .action(async () => {
        await findNAddComponents();
    });

cli.command("search <query>", "Search for a component in the registry")
    .action(async (query: string) => {
        await searchComponent(query);
    });

cli.command("skill", "Add a skill to your project")
    .action(() => {
        addSkill();
    });

cli.help();

cli.parse();