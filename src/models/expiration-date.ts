import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A description of whether the associated document was expired when the verification was performed.
 *
 * Note: In the case where an expiration date is not present on the document or failed to be
 * extracted, this value will be `no_data`.
 */
export const ExpirationDate = {
  NotExpired: "not_expired",
  Expired: "expired",
  NoData: "no_data",
} as const;
export type ExpirationDate = (typeof ExpirationDate)[keyof typeof ExpirationDate] | (string & {});

export const expirationDateSchema: EnumSchema<ExpirationDate> = s.enumOf<ExpirationDate>(ExpirationDate);
