import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Email = {
  data: string;
  primary: boolean;
  type: Type1;
};

export const emailSchema: Schema<Email> = s.object<Email>({
  data: s.string(),
  primary: s.boolean(),
  type: type1Schema,
});
