import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReceiverDetails = {
  availableBalance: string | null;
};

export const receiverDetailsSchema: Schema<ReceiverDetails> = s.object<ReceiverDetails>({
  availableBalance: s.nullable(s.string()),
  _keysMap: {
    availableBalance: "available_balance",
  },
});
