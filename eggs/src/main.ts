import { Command } from "./deps.ts";
import { link } from "./commands/link.ts";
import { init } from "./commands/init.ts";
import { publish } from "./commands/publish.ts";
import { update } from "./commands/update.ts";
import config from "./config.ts";

export async function commandHandler() {
  await new Command()
    .name(config.name)
    .version(config.version)
    .description(config.desc)
    .command("link", link)
    .option("-k, --key <value:string>", "Your API Key")
    .command("init", init)
    .command("publish", publish)
    .command("update", update)
    .parse(Deno.args);
}
