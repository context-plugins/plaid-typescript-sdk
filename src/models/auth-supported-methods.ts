import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthSupportedMethods = {
  instantAuth: boolean;
  instantMatch: boolean;
  automatedMicroDeposits: boolean;
  instantMicroDeposits: boolean;
};

export const authSupportedMethodsSchema: Schema<AuthSupportedMethods> = s.object<AuthSupportedMethods>({
  instantAuth: s.boolean(),
  instantMatch: s.boolean(),
  automatedMicroDeposits: s.boolean(),
  instantMicroDeposits: s.boolean(),
  _keysMap: {
    instantAuth: "instant_auth",
    instantMatch: "instant_match",
    automatedMicroDeposits: "automated_micro_deposits",
    instantMicroDeposits: "instant_micro_deposits",
  },
});
