import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** User phone number information. */
export type ClientUserIdentityPhoneNumber = {
  /** User's phone number. */
  data: string;
  /** Indicates whether this is the primary phone number for the User. */
  primary: boolean;
};

export const clientUserIdentityPhoneNumberSchema: Schema<ClientUserIdentityPhoneNumber> =
  s.object<ClientUserIdentityPhoneNumber>({
    data: s.string(),
    primary: s.boolean(),
  });
