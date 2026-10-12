import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idNumberTypeSchema, type IdNumberType } from "./id-number-type.js";

/**
 * ID number submitted by the user, currently used only for the Identity Verification product. If
 * the user has not submitted this data yet, this field will be `null`. Otherwise, both fields are
 * guaranteed to be filled.
 */
export type UserIdNumber = {
  /**
   * Value of the identity document typed in by the user. Alpha-numeric, with all formatting
   * characters stripped. For specific format requirements by ID type, see [Input Validation
   * Rules](https://plaid.com/docs/identity-verification/hybrid-input-validation/#id-numbers).
   */
  value: string;
  /**
   * A globally unique and human readable ID type, specific to the country and document category.
   * For more context on this field, see [Input Validation
   * Rules](https://plaid.com/docs/identity-verification/hybrid-input-validation/#id-numbers).
   */
  type: IdNumberType;
};

export const userIdNumberSchema: Schema<UserIdNumber> = s.object<UserIdNumber>({
  value: s.string(),
  type: idNumberTypeSchema,
});
