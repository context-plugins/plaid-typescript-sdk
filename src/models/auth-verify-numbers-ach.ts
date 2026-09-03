import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthVerifyNumbersAch = {
  account: string;
  routing: string;
};

export const authVerifyNumbersAchSchema: Schema<AuthVerifyNumbersAch> = s.object<AuthVerifyNumbersAch>({
  account: s.string(),
  routing: s.string(),
});
