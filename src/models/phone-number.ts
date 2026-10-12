import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** A phone number */
export type PhoneNumber = {
  /** The phone number. */
  data: string;
  /** When `true`, identifies the phone number as the primary number on an account. */
  primary: boolean;
  /** The type of phone number. */
  type: Type;
};

export const phoneNumberSchema: Schema<PhoneNumber> = s.object<PhoneNumber>({
  data: s.string(),
  primary: s.boolean(),
  type: typeSchema,
});
