import { Platform } from '..';

declare const __HIPPYNATIVEGLOBAL__: Record<string, any>;

export function isRTL() {
  return getLocalization().direction === 1;
}

/**
 * 获取 Localization 信息
 * 
 * 返回当前设备国家、语言、书写方向（0: LTR, 1: RTL）
 */
export function getLocalization(): { country?: string; language: string; direction: 0 | 1 } {
  let Localization = { country: '', language: '', direction: 0 } as const;
  if (typeof __HIPPYNATIVEGLOBAL__ === 'object') {
    if (Platform.OS === 'android') {
      Localization = __HIPPYNATIVEGLOBAL__.Platform.Localization || Localization;
    } else if (Platform.OS === 'ios') {
      Localization = __HIPPYNATIVEGLOBAL__.Localization || Localization;
    }
  }
  return Localization;
}
