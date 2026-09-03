import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectModelInputsSchema, type ProtectModelInputs } from "./protect-model-inputs.js";
import { protectUserSchema, type ProtectUser } from "./protect-user.js";

export type ProtectComputeRequest = {
  clientId?: string;
  secret?: string;
  model: string;
  user: ProtectUser;
  modelInputs?: ProtectModelInputs | null;
};

export const protectComputeRequestSchema: Schema<ProtectComputeRequest> = s.object<ProtectComputeRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  model: s.string(),
  user: protectUserSchema,
  modelInputs: s.optionalNullable(s.lazy(() => protectModelInputsSchema)),
  _keysMap: {
    clientId: "client_id",
    modelInputs: "model_inputs",
  },
});
