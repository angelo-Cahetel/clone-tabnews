const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,

  // Ignorar pastas que não precisam ser monitoradas
  watchPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/coverage/",
    "/.git/",
    "/dist/",
    "/build/",
    "/.vercel/",
    "/out/",
  ],

  // Limitar a quantidade de workers (opcional, mas ajuda)
  maxWorkers: 1,
});

module.exports = jestConfig;
