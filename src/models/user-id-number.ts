import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idNumberTypeSchema, type IdNumberType } from "./id-number-type.js";

export type UserIdNumber = {
  value: string;
  type: IdNumberType;
};

export const userIdNumberSchema: Schema<UserIdNumber> = s.object<UserIdNumber>({
  value: s.string(),
  type: idNumberTypeSchema,
});
