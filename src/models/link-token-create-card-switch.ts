import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateCardSwitch = {
  cardBin: string;
};

export const linkTokenCreateCardSwitchSchema: Schema<LinkTokenCreateCardSwitch> =
  s.object<LinkTokenCreateCardSwitch>({
    cardBin: s.string(),
    _keysMap: {
      cardBin: "card_bin",
    },
  });
