#!/usr/bin/env node

import { cac } from "cac";
import { addComponent } from "./scripts/addComponent";
import { addComponents } from "./scripts/addComponents";
import { searchComponent } from "./scripts/searchComponent";

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