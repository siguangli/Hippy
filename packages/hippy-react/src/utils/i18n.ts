import { Platform } from "..";

declare const __HIPPYNATIVEGLOBAL__: Record<string, any>

export function isRTL() {
  return getLocalization().direction === 1;
}

export function getLocalization(): { country?: string; language: string; direction: number } {
  var Localization = { country: "", language: "", direction: 0 };
  if (typeof __HIPPYNATIVEGLOBAL__ === "object") {
    if (Platform.OS === "android") {
      Localization = __HIPPYNATIVEGLOBAL__.Platform.Localization || Localization;
    } else if (Platform.OS === "ios") {
      Localization = __HIPPYNATIVEGLOBAL__.Localization || Localization;
    }
  }
  return Localization;
}
