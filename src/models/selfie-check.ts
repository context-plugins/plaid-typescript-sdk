import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieCheckSelfieSchema, type SelfieCheckSelfie } from "./selfie-check-selfie.js";
import { selfieCheckStatusSchema, type SelfieCheckStatus } from "./selfie-check-status.js";

export type SelfieCheck = {
  status: SelfieCheckStatus;
  selfies: SelfieCheckSelfie[];
};

export const selfieCheckSchema: Schema<SelfieCheck> = s.object<SelfieCheck>({
  status: selfieCheckStatusSchema,
  selfies: s.array(s.lazy(() => selfieCheckSelfieSchema)),
});
