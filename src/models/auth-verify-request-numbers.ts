import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authVerifyNumbersAchSchema, type AuthVerifyNumbersAch } from "./auth-verify-numbers-ach.js";

/** An object containing identifying account numbers for verification via Database Auth */
export type AuthVerifyRequestNumbers = {
  /** ACH numbers for verification via Database Auth */
  ach: AuthVerifyNumbersAch;
};

export const authVerifyRequestNumbersSchema: Schema<AuthVerifyRequestNumbers> =
  s.object<AuthVerifyRequestNumbers>({
    ach: authVerifyNumbersAchSchema,
  });
