import { defineConfig } from "eslint/config";

import { baseConfig } from "./src/base";
import { typescriptDisableBaseConfig } from "./src/typescript";

export default defineConfig(baseConfig, typescriptDisableBaseConfig);
