import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessPhoneNumber = {
  number: string | null;
};

export const businessPhoneNumberSchema: Schema<BusinessPhoneNumber> = s.object<BusinessPhoneNumber>({
  number: s.nullable(s.string()),
});
