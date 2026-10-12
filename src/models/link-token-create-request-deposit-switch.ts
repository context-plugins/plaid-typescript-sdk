import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * (Deprecated) Specifies options for initializing Link for use with the Deposit Switch (beta)
 * product. This field is required if `deposit_switch` is included in the `products` array.
 */
export type LinkTokenCreateRequestDepositSwitch = {
  /** The `deposit_switch_id` provided by the `/deposit_switch/create` endpoint. */
  depositSwitchId: string;
};

export const linkTokenCreateRequestDepositSwitchSchema: Schema<LinkTokenCreateRequestDepositSwitch> =
  s.object<LinkTokenCreateRequestDepositSwitch>({
    depositSwitchId: s.string(),
    _keysMap: {
      depositSwitchId: "deposit_switch_id",
    },
  });
