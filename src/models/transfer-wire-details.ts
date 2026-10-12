import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information specific to wire transfers. */
export type TransferWireDetails = {
  /** Additional information from the wire originator to the beneficiary. Max 140 characters. */
  messageToBeneficiary?: string | null;
  /** The fee amount deducted from the original transfer during a wire return, if applicable. */
  wireReturnFee?: string | null;
};

export const transferWireDetailsSchema: Schema<TransferWireDetails> = s.object<TransferWireDetails>({
  messageToBeneficiary: s.optionalNullable(s.string()),
  wireReturnFee: s.optionalNullable(s.string()),
  _keysMap: {
    messageToBeneficiary: "message_to_beneficiary",
    wireReturnFee: "wire_return_fee",
  },
});
