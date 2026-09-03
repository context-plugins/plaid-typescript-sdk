import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type PhoneNumber = {
  data: string;
  primary: boolean;
  type: Type;
};

export const phoneNumberSchema: Schema<PhoneNumber> = s.object<PhoneNumber>({
  data: s.string(),
  primary: s.boolean(),
  type: typeSchema,
});
