import {
  Command,
  Input,
  Confirm,
  List,
  writeJson,
  yellow,
  exists,
} from "../deps.ts";

export const init = new Command()
  .version("0.1.0")
  .description("Initiates a new package for the nest.land registry.")
  .action(async () => {
    if (await exists("egg.json")) {
      console.warn(
        yellow("An egg.json file already exists here! Overriding..."),
      );
    }

    const pName: string = await Input.prompt({
      message: "Package name:",
      minLength: 2,
      maxLength: 40,
    });

    const pDesc: string = await Input.prompt({
      message: "Package description:",
      maxLength: 4294967295,
    });

    const pStable: boolean = await Confirm.prompt("Is this a stable version?");
    const pFiles: string[] = await List.prompt(
      "Enter the files and relative directories that nest.land will publish separated by a comma.",
    );

    const eggJson = {
      name: pName,
      description: pDesc,
      stable: pStable,
      files: pFiles,
    };

    await writeJson("egg.json", eggJson);
  });
