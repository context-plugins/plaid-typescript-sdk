import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessEmailAddress = {
  emailAddress: string | null;
};

export const businessEmailAddressSchema: Schema<BusinessEmailAddress> = s.object<BusinessEmailAddress>({
  emailAddress: s.nullable(s.string()),
  _keysMap: {
    emailAddress: "email_address",
  },
});
