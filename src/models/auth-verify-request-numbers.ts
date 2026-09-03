import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authVerifyNumbersAchSchema, type AuthVerifyNumbersAch } from "./auth-verify-numbers-ach.js";

export type AuthVerifyRequestNumbers = {
  ach: AuthVerifyNumbersAch;
};

export const authVerifyRequestNumbersSchema: Schema<AuthVerifyRequestNumbers> =
  s.object<AuthVerifyRequestNumbers>({
    ach: authVerifyNumbersAchSchema,
  });
