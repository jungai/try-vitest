/// <reference types="vitest" />

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    global: true,
    environment: "node",
    include: ["**/*.spec.ts"],
    setupFiles: ["node_modules/dotenv/config"],
    clearMocks: true,
  },
});
