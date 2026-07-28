import fs from 'fs';
import { Logger } from '../lib/logger';
import { fetchComponentContent, isAvailableInRegistry } from '../lib/registry';

export async function addComponent(componentName: string): Promise<void> {
  try {
    if (!isAvailableInRegistry(componentName)) {
      Logger.log.error(`Component ${componentName} is not available in the registry.`);
      return;
    }

    const spinner = Logger.spinner(`Adding component: ${componentName}.tsx`);
    spinner.start();

    const componentPath = `src/components/fx/${componentName}.tsx`;

    if (fs.existsSync(componentPath)) {
      Logger.log.error(`Component ${componentName}.tsx already exists.`);
      const canOverwrite = await Logger.prompt.confirm({ message: `Do you want to overwrite ${componentName}.tsx?` });

      if (!canOverwrite) {
        spinner.error(`Component ${componentName}.tsx was not added.`);
        return;
      };
    }

    const componentDir = componentPath.substring(0, componentPath.lastIndexOf('/'));
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }

    const componentContent = await fetchComponentContent(componentName);

    Logger.log.info(`Creating component ${componentPath}`);
    fs.writeFileSync(componentPath, componentContent);

    spinner.stop(`Component ${componentName}.tsx has been added successfully.`);
  } catch (error) {
    Logger.log.error(`Error occurred while adding component ${componentName}: ${error}`);
  }
}