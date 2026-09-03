import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { emailSchema, type Email } from "./email.js";
import { phoneNumberSchema, type PhoneNumber } from "./phone-number.js";

export type Owner = {
  names: string[];
  phoneNumbers: PhoneNumber[];
  emails: Email[];
  addresses: Address[];
};

export const ownerSchema: Schema<Owner> = s.object<Owner>({
  names: s.array(s.string()),
  phoneNumbers: s.array(s.lazy(() => phoneNumberSchema)),
  emails: s.array(s.lazy(() => emailSchema)),
  addresses: s.array(s.lazy(() => addressSchema)),
  _keysMap: {
    phoneNumbers: "phone_numbers",
  },
});
