import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Inputs for Protect SDK Trust Index models. */
export type ProtectSdkModelInputs = {
  /**
   * A unique identifier for the Protect SDK session, used to compute a Trust Index score and fraud
   * attributes.
   */
  sdkSessionId: string;
};

export const protectSdkModelInputsSchema: Schema<ProtectSdkModelInputs> = s.object<ProtectSdkModelInputs>({
  sdkSessionId: s.string(),
  _keysMap: {
    sdkSessionId: "sdk_session_id",
  },
});
