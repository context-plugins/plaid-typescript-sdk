import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idNumberTypeSchema, type IdNumberType } from "./id-number-type.js";

/** ID number of the person */
export type TransferPlatformPersonIdNumber = {
  /** Value of the person's ID Number. Alpha-numeric, with all formatting characters stripped. */
  value: string;
  /**
   * A globally unique and human readable ID type, specific to the country and document category.
   * For more context on this field, see [Input Validation
   * Rules](https://plaid.com/docs/identity-verification/hybrid-input-validation/#id-numbers).
   */
  type: IdNumberType;
};

export const transferPlatformPersonIdNumberSchema: Schema<TransferPlatformPersonIdNumber> =
  s.object<TransferPlatformPersonIdNumber>({
    value: s.string(),
    type: idNumberTypeSchema,
  });
