import fs from 'fs';
import { Logger } from '../lib/logger';


export async function addComponent(componentName: string): Promise<void> {
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

  const componentContent = `import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`

  Logger.log.info(`Creating component ${componentPath}`);
  fs.writeFileSync(componentPath, componentContent);

  spinner.stop(`Component ${componentName}.tsx has been added successfully.`);
}