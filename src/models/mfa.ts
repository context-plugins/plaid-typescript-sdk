import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies the multi-factor authentication settings to use with this test account */
export type Mfa = {
  /**
   * Possible values are `device`, `selections`, or `questions`.
   *
   * If value is `device`, the MFA answer is `1234`.
   *
   * If value is `selections`, the MFA answer is always the first option.
   *
   * If value is `questions`, the MFA answer is `answer_<i>_<j>` for the j-th question in the i-th
   * round, starting from 0. For example, the answer to the first question in the second round is
   * `answer_1_0`.
   */
  type: string;
  /** Number of rounds of questions. Required if value of `type` is `questions`. */
  questionRounds: number;
  /**
   * Number of questions per round. Required if value of `type` is `questions`. If value of type is
   * `selections`, default value is 2.
   */
  questionsPerRound: number;
  /** Number of rounds of selections, used if `type` is `selections`. Defaults to 1. */
  selectionRounds: number;
  /** Number of available answers per question, used if `type` is `selections`. Defaults to 2. */
  selectionsPerQuestion: number;
};

export const mfaSchema: Schema<Mfa> = s.object<Mfa>({
  type: s.string(),
  questionRounds: s.float64(),
  questionsPerRound: s.float64(),
  selectionRounds: s.float64(),
  selectionsPerQuestion: s.float64(),
  _keysMap: {
    questionRounds: "question_rounds",
    questionsPerRound: "questions_per_round",
    selectionRounds: "selection_rounds",
    selectionsPerQuestion: "selections_per_question",
  },
});
