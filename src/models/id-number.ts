import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idNumberTypeSchema, type IdNumberType } from "./id-number-type.js";

export type IdNumber = {
  value: string;
  type: IdNumberType;
};

export const idNumberSchema: Schema<IdNumber> = s.object<IdNumber>({
  value: s.string(),
  type: idNumberTypeSchema,
});
