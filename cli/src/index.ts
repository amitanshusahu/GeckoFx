#!/usr/bin/env node

import { cac } from "cac";
import { addComponent } from "./scripts/addComponent";
import { addComponents } from "./scripts/addComponents";

const cli = cac("geckofx");

cli.command("", "MultiSelect Components to add to your project")
.action(() => {
    addComponents();
})

cli.command("add <component>", "Add a component from the registry to the project")
.action((component) => {
    addComponent(component);
});

cli.help();

cli.parse();