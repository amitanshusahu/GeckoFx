import { createSpinner } from "../lib/clack/spinner";
import { componentMap } from "../registry.autogen";
import { log, type Option, autocompleteMultiselect, isCancel, text } from "@clack/prompts";
import { addComponent } from "./addComponent";

export async function searchComponent(): Promise<void> {
  try {
    let shouldContinue = true;

    while (shouldContinue) {
      const query = await text({
        message: "Enter a query to search for components:",
        placeholder: "Type to search... (ESC) to exit",
      });

      if (isCancel(query)) {
        log.error('Operation cancelled');
        shouldContinue = false;
        process.exit(0);
      }

      if (!query || query.trim() === "") {
        log.error("Query cannot be empty. Please provide a valid search term.");
        shouldContinue = false;
        return;
      }

      const spinner = createSpinner(`Searching for components matching "${query}"...`);
      spinner.start();
      const results = componentMap.filter((component) => {
        if (
          component.name.toLowerCase().includes(query.toLowerCase()) ||
          component.description.toLowerCase().includes(query.toLowerCase()) ||
          component.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
          component.category.some((cat) => cat.toLowerCase().includes(query.toLowerCase()))
        ) return true;
      })

      if (results.length === 0) {
        spinner.stop(`No components found for query: "${query}"`);
        continue;
      }

      spinner.stop(`Found ${results.length} components for query: "${query}"`);

      const options: Option<string>[] = results.map((component) => ({
        value: component.name,
        label: component.name,
        hint: component.description,
      }));

      const selectedOptions = await autocompleteMultiselect({
        message: "Select components to add:",
        options: options,
        placeholder: "Type to search components... (ESC) to cancel",
      });

      if (isCancel(selectedOptions)) {
        log.error('Operation cancelled');
        return;
      }

      await Promise.all(selectedOptions.map(async (component) => {
        await addComponent(component);
      }))

      log.success(`Successfully added ${selectedOptions.length} components to the project.`);
    }
  } catch (error) {
    log.error("An error occurred while searching for components.");
  }
}