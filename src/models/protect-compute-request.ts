import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectModelInputsSchema, type ProtectModelInputs } from "./protect-model-inputs.js";
import { protectUserSchema, type ProtectUser } from "./protect-user.js";

/** Request object for /protect/compute */
export type ProtectComputeRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The name of the Trust Index model to use for scoring, with a major.minor version suffix.
   * Examples: `ti-link-session-2.0` (link-session fraud), `ti-identity-2.0` (identity fraud),
   * `cash-advance-onboarding-1.0` (first cash advance), and `cash-advance-ongoing-1.0` (subsequent
   * cash advances). The model specified may require certain fields within `model_inputs`; for
   * example, `ti-link-session-2.0` requires the `link` field. Cash-advance models do not use
   * `model_inputs`.
   */
  model: string;
  /** Represents an end user for `/protect/compute` requests. */
  user: ProtectUser;
  /**
   * Inputs required by certain Trust Index models. The `link` field is required for link-session
   * models. Other model families (including cash-advance) are identified by `user` alone and do not
   * use this object.
   */
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
