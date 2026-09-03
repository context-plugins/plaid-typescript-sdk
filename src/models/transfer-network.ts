import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferNetwork = {
  Ach: "ach",
  SameDayAch: "same-day-ach",
  Rtp: "rtp",
  Wire: "wire",
  Rfp: "rfp",
} as const;
export type TransferNetwork = (typeof TransferNetwork)[keyof typeof TransferNetwork] | (string & {});

export const transferNetworkSchema: EnumSchema<TransferNetwork> = s.enumOf<TransferNetwork>(TransferNetwork);
