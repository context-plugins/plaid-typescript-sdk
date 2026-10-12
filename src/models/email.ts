import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** An object representing an email address */
export type Email = {
  /** The email address. */
  data: string;
  /** When `true`, identifies the email address as the primary email on an account. */
  primary: boolean;
  /** The type of email account as described by the financial institution. */
  type: Type1;
};

export const emailSchema: Schema<Email> = s.object<Email>({
  data: s.string(),
  primary: s.boolean(),
  type: type1Schema,
});
