import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectLinkModelInputsSchema, type ProtectLinkModelInputs } from "./protect-link-model-inputs.js";
import { protectSdkModelInputsSchema, type ProtectSdkModelInputs } from "./protect-sdk-model-inputs.js";

/**
 * Inputs required by certain Trust Index models. The `link` field is required for link-session
 * models. Other model families (including cash-advance) are identified by `user` alone and do not
 * use this object.
 */
export type ProtectModelInputs = {
  /** Inputs for link session Trust Index models. */
  link?: ProtectLinkModelInputs | null;
  /** Inputs for Protect SDK Trust Index models. */
  sdk?: ProtectSdkModelInputs | null;
};

export const protectModelInputsSchema: Schema<ProtectModelInputs> = s.object<ProtectModelInputs>({
  link: s.optionalNullable(s.lazy(() => protectLinkModelInputsSchema)),
  sdk: s.optionalNullable(s.lazy(() => protectSdkModelInputsSchema)),
});
