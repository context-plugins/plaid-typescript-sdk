import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ACH numbers for verification via Database Auth */
export type AuthVerifyNumbersAch = {
  /** Account's account number */
  account: string;
  /** Account's routing number */
  routing: string;
};

export const authVerifyNumbersAchSchema: Schema<AuthVerifyNumbersAch> = s.object<AuthVerifyNumbersAch>({
  account: s.string(),
  routing: s.string(),
});
