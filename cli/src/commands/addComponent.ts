import fs from 'fs';
import { createSpinner } from '../lib/clack/spinner';
import { fetchComponentContent, isAvailableInRegistry } from '../lib/registry';
import { log, confirm } from '@clack/prompts';

export async function addComponent(componentName: string): Promise<void> {
  try {
    if (!isAvailableInRegistry(componentName)) {
      log.error(`Component ${componentName} is not available in the registry.`);
      return;
    }

    const spinner = createSpinner(`Adding component: ${componentName}.tsx`);
    spinner.start();

    const componentPath = `src/components/fx/${componentName}.tsx`;

    if (fs.existsSync(componentPath)) {
      log.error(`Component ${componentName}.tsx already exists.`);
      const canOverwrite = await confirm({ message: `Do you want to overwrite ${componentName}.tsx?` });

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

    log.info(`Creating component ${componentPath}`);
    fs.writeFileSync(componentPath, componentContent);

    spinner.stop(`Component ${componentName}.tsx has been added successfully.`);
  } catch (error) {
    log.error(`Error occurred while adding component ${componentName}: ${error}`);
  }
}