import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mfaSchema, type Mfa } from "./mfa.js";
import { overrideAccountsSchema, type OverrideAccounts } from "./override-accounts.js";

export type UserCustomPassword = {
  version?: string | null;
  seed: string;
  overrideAccounts: OverrideAccounts[];
  mfa: Mfa;
  recaptcha: string;
  forceError: string;
};

export const userCustomPasswordSchema: Schema<UserCustomPassword> = s.object<UserCustomPassword>({
  version: s.optionalNullable(s.string()),
  seed: s.string(),
  overrideAccounts: s.array(s.lazy(() => overrideAccountsSchema)),
  mfa: mfaSchema,
  recaptcha: s.string(),
  forceError: s.string(),
  _keysMap: {
    overrideAccounts: "override_accounts",
    forceError: "force_error",
  },
});
