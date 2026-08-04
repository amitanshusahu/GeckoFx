import { createSpinner } from "../lib/clack/spinner";
import { componentMap } from "../registry.autogen";

export async function searchComponent(query: string): Promise<void> {
  const spinner = createSpinner("Searching for components...");
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
    return;
  }

  // log the results in a formatted way
  results.forEach((component) => {
    console.log(`- ${component.name}: ${component.description}`);
  });

  spinner.stop(`Found ${results.length} components for query: "${query}"`);
}