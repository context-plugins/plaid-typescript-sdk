import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

export type EntityScreeningHitPhoneNumbers = {
  type: PhoneType;
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
