import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Phone number associated with a business */
export type BusinessPhoneNumber = {
  /** Phone number in E.164 format */
  number: string | null;
};

export const businessPhoneNumberSchema: Schema<BusinessPhoneNumber> = s.object<BusinessPhoneNumber>({
  number: s.nullable(s.string()),
});
