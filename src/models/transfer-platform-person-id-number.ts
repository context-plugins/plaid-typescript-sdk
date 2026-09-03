import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idNumberTypeSchema, type IdNumberType } from "./id-number-type.js";

export type TransferPlatformPersonIdNumber = {
  value: string;
  type: IdNumberType;
};

export const transferPlatformPersonIdNumberSchema: Schema<TransferPlatformPersonIdNumber> =
  s.object<TransferPlatformPersonIdNumber>({
    value: s.string(),
    type: idNumberTypeSchema,
  });
