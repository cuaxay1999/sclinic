export const SSHOP_SPA_TOKEN = 'sshop-spa-token';
export const EXPIRED_TOKEN = 60 * 60 * 1000;
export const SSPA_CONSOLE_LOCALE = 'sspa_console_locale';
export const SSPA_LOCALE = 'sspa-locale';
export const CURRENT_CHAIN = 'current-chain';
export const PHONE_PATTERN = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const APP_IDS = {
  SSPA: 'SSPA',
  SSHOP: 'SSHOP',
  SCLINIC: 'SCLINIC',
  SCLINIC_GUIDE: 'SCLINIC_GUIDE',
}

export const APP_ID = "SCLINIC";

export const ACCOUNT_STATE = {
  GENERATE_OTP: 'generate',
  VERIFY_OTP: 'otp',
  REGISTER: 'register',
  RESET_PWD: 'reset-pwd',
  PASSWORD: 'pwd',
  CHAIN_LIST: 'chain-list',
};

const NEXT_PUBLIC_KEY_GG_MAP = process.env.NEXT_PUBLIC_KEY_GG_MAP;
export {NEXT_PUBLIC_KEY_GG_MAP};

export let CONFIG_SERVER = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://proapi.sspa.com.vn',
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'sclinic.com.vn',
};

export const CURRENCIES = [
  {
    label: 'VND',
    unit: 'đ'
  },
  {
    label: 'USD',
    unit: '$'
  },
  {
    label: 'JPY',
    unit: 'Y'
  },
    {
        label: "THB",
        unit: "฿",
    },
];
