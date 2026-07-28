#!/usr/bin/env node

import { cac } from "cac";
import { addComponent } from "./commands/addComponent";
import { addComponents } from "./commands/addComponents";
import { searchComponent } from "./commands/searchComponent";

const cli = cac("geckofx");

cli.command("", "MultiSelect Components to add to your project")
.action(async () => {
    await addComponents();
})

cli.command("add <component>", "Add a component from the registry to the project")
.action(async (component) => {
    await addComponent(component);
});

cli.command("search", "Search for a component in the registry")
.action(async () => {
    await searchComponent();
});

cli.help();

cli.parse();