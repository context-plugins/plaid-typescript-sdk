import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferCapabilitiesGetRtp = {
  credit?: boolean;
};

export const transferCapabilitiesGetRtpSchema: Schema<TransferCapabilitiesGetRtp> =
  s.object<TransferCapabilitiesGetRtp>({
    credit: s.optional(s.boolean()),
  });
