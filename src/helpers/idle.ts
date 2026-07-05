import { BTN, Lang } from "../constants";
import { buttonFor } from "../content";

export const getIdleVariants = (
  lang: Lang,
): {
  from_scratch_message: string;
  no_penalty_message: string;
  set_own_interval: string;
} => ({
  from_scratch_message: buttonFor(BTN.Ignore_Full_Reset, lang).text,
  no_penalty_message: buttonFor(BTN.Ignore_Just_Go_On, lang).text,
  set_own_interval: buttonFor(BTN.Ignore_Set_Own_Interval, lang).text,
});
