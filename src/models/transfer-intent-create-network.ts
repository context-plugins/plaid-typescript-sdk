import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferIntentCreateNetwork = {
  Ach: "ach",
  SameDayAch: "same-day-ach",
  Rtp: "rtp",
} as const;
export type TransferIntentCreateNetwork =
  | (typeof TransferIntentCreateNetwork)[keyof typeof TransferIntentCreateNetwork]
  | (string & {});

export const transferIntentCreateNetworkSchema: EnumSchema<TransferIntentCreateNetwork> =
  s.enumOf<TransferIntentCreateNetwork>(TransferIntentCreateNetwork);
