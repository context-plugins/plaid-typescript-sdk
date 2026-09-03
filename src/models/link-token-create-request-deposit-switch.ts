import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestDepositSwitch = {
  depositSwitchId: string;
};

export const linkTokenCreateRequestDepositSwitchSchema: Schema<LinkTokenCreateRequestDepositSwitch> =
  s.object<LinkTokenCreateRequestDepositSwitch>({
    depositSwitchId: s.string(),
    _keysMap: {
      depositSwitchId: "deposit_switch_id",
    },
  });
