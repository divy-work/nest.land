import { Command, green, red, bold } from "../deps.ts";
import { KEY_LOC } from "../utilities/files.ts";

export const link = new Command()
  .version("0.1.0")
  .description("Links your nest.land API key to the CLI")
  .action(async () => {
    if (Deno.args.length < 3) {
      console.error(
        red(
          "You need to pass in your API key! To do this, add `--key <your_key>` to the end of this command.",
        ),
      );
      Deno.exit(1);
    }

    await Deno.writeFile(KEY_LOC, new TextEncoder().encode(Deno.args[2]));
    console.log(
      bold(green("Successfully updated ~/.nest-api-key with your key!")),
    );
  });
