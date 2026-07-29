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
