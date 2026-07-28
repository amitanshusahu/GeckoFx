import { toKebab } from "../utils";
import { componentMap } from "../../registry.autogen";
import { CONFIG } from "../../config";

export async function fetchComponentContent(componentName: string): Promise<string> {

  const componentNameKebab = toKebab(componentName);

  const response = await fetch(`${CONFIG.registryUrl}/${componentNameKebab}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch component content for ${componentName}`);
  }

  const data = await response.json() as { name: string; content: string };
  return data.content;
}

export async function isAvailableInRegistry(componentName: string): Promise<boolean> {
  for (const component of componentMap) {
    if (component.name === componentName) {
      return true;
    }
  }
  return false;
}