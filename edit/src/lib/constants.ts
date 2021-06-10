export const SITE_NAME = 'アソビノン編集補助サイト';
export const SITE_URL = 'edit.asobinon.org';
export const TWITTER_ID = 'asobinon';
export const SITE_DESC = 'アソビノンの編集を補助します';
export const SITE_FULL_URL =
  process.env.HTTPS_URL ?? 'https://' + process.env.VERCEL_URL ?? 'edit.asobinon.org';
