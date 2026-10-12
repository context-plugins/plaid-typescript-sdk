import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata specifically related to which auth methods an institution supports. */
export type AuthSupportedMethods = {
  /** Indicates if instant auth is supported. */
  instantAuth: boolean;
  /** Indicates if instant match is supported. */
  instantMatch: boolean;
  /** Indicates if automated micro-deposits are supported. */
  automatedMicroDeposits: boolean;
  /** Indicates if instant micro-deposits are supported. */
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
