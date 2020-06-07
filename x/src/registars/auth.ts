import { Router, hash, compare, nanoid, Status, Context } from "../deps.ts";
import { assertBody } from "../middleware/assert_body.ts";

import { assertFields } from "../utils/assert_fields.ts";
import { createUser, fetchUser } from "../utils/driver.ts";

interface UserAuthPayload {
  username: string;
  password: string;
}

export function authRegistar(router: Router) {
  router.post("/signup", assertBody, async ctx => {
    const { body } = ctx.state as { body: UserAuthPayload };
    validateUserData(ctx, body);

    const user = {
      _id: body.username,
      // TODO(@zorbyte): #36 Make API keys be generated on request, instead of intrinsic.
      apiKey: nanoid(24),
      // TODO(@zorbyte): Use argon2 when it works with deno.
      passwordHash: await hash(body.password),
      packageIds: [],
    };

    if (await fetchUser(body.username)) return ctx.throw(Status.Conflict);

    await createUser(user);

    ctx.response.body = {
      apiKey: user.apiKey,
    };
  });

  // TODO(@zorbyte): Make this more secure and less repetitive.
  router.post("/getkey", assertBody, async ctx => {
    const { body } = ctx.state as { body: UserAuthPayload };
    validateUserData(ctx, body);

    const user = await fetchUser(body.username);
    if (!user) return ctx.throw(Status.Unauthorized);
    if (!(await compare(body.password, user.passwordHash))) {
      return ctx.throw(Status.Unauthorized);
    }

    ctx.response.body = { apiKey: user.apiKey };
  });
}

// TODO(@zorbyte): Convert this into middleware.
function validateUserData(ctx: Context, body: UserAuthPayload) {
  assertFields(ctx, body, {
    username: "string",
    password: "string",
  });
}
