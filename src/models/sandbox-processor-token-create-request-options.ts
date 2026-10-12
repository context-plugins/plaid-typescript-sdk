import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional set of options to be used when configuring the Item. If specified, must not be
 * `null`.
 */
export type SandboxProcessorTokenCreateRequestOptions = {
  /**
   * Test username to use for the creation of the Sandbox Item. Default value is `user_good`. You
   * can also use a custom test user — either set this to the username of a custom user configured
   * in the Dashboard, or set it to `user_custom` and pass the JSON-stringified custom user
   * configuration object as `override_password` to define one entirely via API. See [Sandbox Custom
   * Users](https://plaid.com/docs/sandbox/user-custom) for more details.
   *
   * @default "user_good"
   */
  overrideUsername?: string | null;
  /**
   * Test password to use for the creation of the Sandbox Item. Default value is `pass_good`. You
   * can also use a custom test user — reference one configured in the Dashboard via
   * `override_username`, or set `override_username` to `user_custom` and pass the JSON-stringified
   * custom user configuration object as this field to define one entirely via API. See [Sandbox
   * Custom Users](https://plaid.com/docs/sandbox/user-custom) for more details.
   *
   * @default "pass_good"
   */
  overridePassword?: string | null;
};

export const sandboxProcessorTokenCreateRequestOptionsSchema: Schema<SandboxProcessorTokenCreateRequestOptions> =
  s.object<SandboxProcessorTokenCreateRequestOptions>({
    overrideUsername: s.defaulted(s.nullable(s.string()), "user_good"),
    overridePassword: s.defaulted(s.nullable(s.string()), "pass_good"),
    _keysMap: {
      overrideUsername: "override_username",
      overridePassword: "override_password",
    },
  });
