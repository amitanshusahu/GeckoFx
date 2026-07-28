#!/usr/bin/env node

import { cac } from "cac";
import { addComponent } from "./scripts/addComponent";

const cli = cac("geckofx");

cli.command("add <component>")
.action((component) => {
    addComponent(component);
});

cli.help();

cli.parse();