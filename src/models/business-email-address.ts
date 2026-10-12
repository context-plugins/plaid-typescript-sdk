import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Email address associated with a business */
export type BusinessEmailAddress = {
  /** Email address of the business */
  emailAddress: string | null;
};

export const businessEmailAddressSchema: Schema<BusinessEmailAddress> = s.object<BusinessEmailAddress>({
  emailAddress: s.nullable(s.string()),
  _keysMap: {
    emailAddress: "email_address",
  },
});
