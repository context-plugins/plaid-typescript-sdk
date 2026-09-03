import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpirationDate = {
  NotExpired: "not_expired",
  Expired: "expired",
  NoData: "no_data",
} as const;
export type ExpirationDate = (typeof ExpirationDate)[keyof typeof ExpirationDate] | (string & {});

export const expirationDateSchema: EnumSchema<ExpirationDate> = s.enumOf<ExpirationDate>(ExpirationDate);
