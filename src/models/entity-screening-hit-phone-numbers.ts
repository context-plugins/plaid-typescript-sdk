import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

/** Phone number information associated with the entity screening hit */
export type EntityScreeningHitPhoneNumbers = {
  /** An enum indicating whether a phone number is a phone line or a fax line. */
  type: PhoneType;
  /** A phone number in E.164 format. */
  phoneNumber: string;
};

export const entityScreeningHitPhoneNumbersSchema: Schema<EntityScreeningHitPhoneNumbers> =
  s.object<EntityScreeningHitPhoneNumbers>({
    type: phoneTypeSchema,
    phoneNumber: s.string(),
    _keysMap: {
      phoneNumber: "phone_number",
    },
  });
