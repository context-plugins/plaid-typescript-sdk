import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idNumberTypeSchema, type IdNumberType } from "./id-number-type.js";

export type BeaconUserIdNumber = {
  value: string;
  type: IdNumberType;
};

export const beaconUserIdNumberSchema: Schema<BeaconUserIdNumber> = s.object<BeaconUserIdNumber>({
  value: s.string(),
  type: idNumberTypeSchema,
});
