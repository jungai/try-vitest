import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "node",
    // global: true,
    include: ["**/*.spec.{js,ts.vue,tsx}"],
    // testTimeout: 5000 default lol
    passWithNoTests: true,
  },
});
