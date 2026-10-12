import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional details for receiver events. Currently always `null`. */
export type ReceiverDetails = {
  /** The available balance associated with the receiver event. */
  availableBalance: string | null;
};

export const receiverDetailsSchema: Schema<ReceiverDetails> = s.object<ReceiverDetails>({
  availableBalance: s.nullable(s.string()),
  _keysMap: {
    availableBalance: "available_balance",
  },
});
