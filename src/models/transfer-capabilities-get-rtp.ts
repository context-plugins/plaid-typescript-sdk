import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the supported service types in RTP */
export type TransferCapabilitiesGetRtp = {
  /** When `true`, the linked Item's institution supports RTP credit transfer. @default false */
  credit?: boolean;
};

export const transferCapabilitiesGetRtpSchema: Schema<TransferCapabilitiesGetRtp> =
  s.object<TransferCapabilitiesGetRtp>({
    credit: s.defaulted(s.boolean(), false),
  });
