import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectLinkModelInputsSchema, type ProtectLinkModelInputs } from "./protect-link-model-inputs.js";
import { protectSdkModelInputsSchema, type ProtectSdkModelInputs } from "./protect-sdk-model-inputs.js";

export type ProtectModelInputs = {
  link?: ProtectLinkModelInputs | null;
  sdk?: ProtectSdkModelInputs | null;
};

export const protectModelInputsSchema: Schema<ProtectModelInputs> = s.object<ProtectModelInputs>({
  link: s.optionalNullable(s.lazy(() => protectLinkModelInputsSchema)),
  sdk: s.optionalNullable(s.lazy(() => protectSdkModelInputsSchema)),
});
