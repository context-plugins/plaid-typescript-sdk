import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferWireDetails = {
  messageToBeneficiary?: string | null;
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
