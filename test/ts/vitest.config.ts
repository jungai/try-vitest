import { defineConfig } from "vite";

export default defineConfig({
  test: {
    global: true,
    environment: "node",
    include: ["**/*.spec.ts"],
    setupFiles: ["node_modules/dotenv/config"],
    clearMocks: true,
  },
});
