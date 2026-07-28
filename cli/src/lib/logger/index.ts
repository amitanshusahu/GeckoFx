import { confirm, text, select, log } from "@clack/prompts";
import { spinner } from "@clack/prompts";

export function createSpinner(message: string) {
  const s = spinner();

  return {
    start() {
      s.start(message);
    },

    stop(message?: string) {
      s.stop(message);
    },

    error(message?: string) {
      s.stop(message);
    }
  };
}

const prompt = {
  confirm,
  text,
  select,
};

export abstract class Logger {
  static log = log;
  static prompt = prompt;
  static spinner = createSpinner;
}