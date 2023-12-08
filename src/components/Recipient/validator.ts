import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import Email from 'email-validator';

const phoneUtil = PhoneNumberUtil.getInstance();

/**
 * Email validation
 */
export const email = (text: string) => {
  try {
    return Email.validate(text.toLowerCase().replaceAll(' ', '')) && text;
  } catch (error) {
    return false;
  }
};

/**
 * Phone number validation
 */
export const phone = (text: string) => {
  try {
    const phoneNumber = phoneUtil.parse(text.toLowerCase().replaceAll(' ', ''));
    return phoneUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
  } catch (error) {
    return false;
  }
};
