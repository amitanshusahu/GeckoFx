import { autocompleteMultiselect, type Option, isCancel, log } from "@clack/prompts";
import { componentMap } from "../registry.autogen";
import { addComponent } from "./addComponent";

export async function addComponents(): Promise<void> {

  try {
    const componentOptions: Option<string>[] = componentMap.map(component => ({
      value: component.name,
      label: component.name,
      hint: component.description,
    }));

    const selectedOptions = await autocompleteMultiselect({
      message: "Select components to add:",
      options: componentOptions,
      placeholder: "Type to search components... (ESC) to exit",
    });

    if (isCancel(selectedOptions)) {
      log.error('Operation cancelled');
      return;
    }

    await Promise.all(selectedOptions.map(async (component) => {
      await addComponent(component);
    }))
  } catch (error) {
    log.error(`Error occurred while adding components: ${error}`);
  }
}