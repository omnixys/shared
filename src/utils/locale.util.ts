// import { Language } from "../enums/language.enum.js";
import { Locale } from "../types/locale.type.js";

export type Language =
  | 'ENGLISH'
  | 'SPANISH'
  | 'FRENCH'
  | 'GERMAN'
  | 'CHINESE'
  | 'JAPANESE'
  | 'OTHER';

// const LANGUAGE_TO_LOCALE: Partial<Record<Language, Locale>> = {
//   [Language.ENGLISH]: 'en-US',
//   [Language.GERMAN]: 'de-DE',

//     // optional vorbereiten
//   // SPANISH: 'en-US',
//   // FRENCH: 'en-US',
//   // CHINESE: 'en-US',
//   // JAPANESE: 'en-US',
// };

export const LANGUAGE_TO_LOCALE: Partial<Record<Language, Locale>> = {
  ENGLISH: 'en-US',
  GERMAN: 'de-DE',

  // optional vorbereiten
  // SPANISH: 'en-US',
  // FRENCH: 'en-US',
  // CHINESE: 'en-US',
  // JAPANESE: 'en-US',
};

export function mapLanguageToLocale(language?: Language | null): Locale {
  if (!language) {
    return 'en-US'; // default fallback
  }

  return LANGUAGE_TO_LOCALE[language] ?? 'en-US';
}