// export const getValidationError = (number, countryCode) => {
//   try {
//     const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
//     const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
//     return phoneUtil.isPossibleNumberWithReason(numberObj);
//   } catch (e) {
//     //* Here I convert thrown errors into ValidationResult enums (if possible).
//     //* errors are from i18n.phonenumbers.Error in the file https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/phonenumberutil.js.
//     if (e.message === i18n.phonenumbers.Error.INVALID_COUNTRY_CODE) {
//       return i18n.phonenumbers.PhoneNumberUtil.ValidationResult
//         .INVALID_COUNTRY_CODE;
//     }
//     if (
//       //* Hack to solve issue where parseAndKeepRawInput throws weird error for zero or 1-digit (national) numbers e.g. "3" or "+13" s
//       number.length <= 3 ||
//       e.message === i18n.phonenumbers.Error.TOO_SHORT_AFTER_IDD ||
//       e.message === i18n.phonenumbers.Error.TOO_SHORT_NSN
//     ) {
//       return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT;
//     }
//     if (e.message === i18n.phonenumbers.Error.TOO_LONG) {
//       return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG;
//     }

//     //* Broken
//     return -99;
//   }
// };