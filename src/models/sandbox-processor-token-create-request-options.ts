import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxProcessorTokenCreateRequestOptions = {
  overrideUsername?: string | null;
  overridePassword?: string | null;
};

export const sandboxProcessorTokenCreateRequestOptionsSchema: Schema<SandboxProcessorTokenCreateRequestOptions> =
  s.object<SandboxProcessorTokenCreateRequestOptions>({
    overrideUsername: s.optionalNullable(s.string()),
    overridePassword: s.optionalNullable(s.string()),
    _keysMap: {
      overrideUsername: "override_username",
      overridePassword: "override_password",
    },
  });
