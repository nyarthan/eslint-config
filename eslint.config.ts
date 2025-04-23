import { defineConfig } from "eslint/config";

import { baseConfig } from "./src/base";
import { typescriptConfig } from "./src/typescript";

export default defineConfig({files: ['**/*.{ts,tsx}']}, baseConfig, typescriptConfig);
