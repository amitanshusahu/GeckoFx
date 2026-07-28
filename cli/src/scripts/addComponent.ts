import fs from 'fs';
import { logger } from '../lib/consola';

export async function addComponent(componentName: string): Promise<void> {
  logger.start(`Adding component: ${componentName}.tsx`);

  const componentPath = `src/components/fx/${componentName}.tsx`;

  if (fs.existsSync(componentPath)) {
    logger.error(`Component ${componentName}.tsx already exists.`);
    const canOverwrite = await logger.prompt("Do you want to overwrite it? (y/n): ", {
      type: 'confirm'
    });

    if (!canOverwrite) return;
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

  fs.writeFileSync(componentPath, componentContent);

  logger.success(`Component ${componentName}.tsx has been added successfully.`);
}