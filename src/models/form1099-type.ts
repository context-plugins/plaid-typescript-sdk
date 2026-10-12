import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Form 1099 Type */
export const Form1099Type = {
  Form1099TypeUnknown: "FORM_1099_TYPE_UNKNOWN",
  Form1099TypeMisc: "FORM_1099_TYPE_MISC",
  Form1099TypeK: "FORM_1099_TYPE_K",
} as const;
export type Form1099Type = (typeof Form1099Type)[keyof typeof Form1099Type] | (string & {});

export const form1099TypeSchema: EnumSchema<Form1099Type> = s.enumOf<Form1099Type>(Form1099Type);
