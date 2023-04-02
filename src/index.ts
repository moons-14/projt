import { program } from "commander";

program
  .name("Proj")
  .version("0.1.0", "-v, --version")
  .description(
    "npx package for project template deployment and config installation with a few commands"
  );

// program.addCommand(configProgram);
// program.addCommand(createProgram);

program.parse(process.argv);
