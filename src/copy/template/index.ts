import { Command } from "commander";

const configProgram = new Command("set");

configProgram
  .command("temp")
  .argument("<configValue>", "Value of the config")
  .action(async (value) => {});

export default configProgram;
