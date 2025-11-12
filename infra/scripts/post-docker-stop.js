const { spawn } = require("child_process");
const { execSync } = require("child_process");
const { error } = require("console");

const nextDev = spawn("next", ["dev"], {
  stdio: "inherit",
  shell: true,
});

function cleanup() {
  console.log("\n🛑 Parando servidor de desenvolvimento");
  try {
    execSync("npm run services:stop", { stdio: "inherit" });
  } catch (err) {
    console.error("Erro ao parar servidor de desenvolvimento:", error.message);
  }
  process.exit();
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

nextDev.on("exit", (code) => {
  if (code !== 0) {
    cleanup();
  }
});
