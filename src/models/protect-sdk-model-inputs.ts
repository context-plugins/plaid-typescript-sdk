import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectSdkModelInputs = {
  sdkSessionId: string;
};

export const protectSdkModelInputsSchema: Schema<ProtectSdkModelInputs> = s.object<ProtectSdkModelInputs>({
  sdkSessionId: s.string(),
  _keysMap: {
    sdkSessionId: "sdk_session_id",
  },
});
