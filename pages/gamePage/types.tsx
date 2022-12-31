export enum IImageKeys {
  CookieBg = "cookieBg",
  CookieImg = "cookiesImg",
  Popup = "popup",
  Sorted = "sorted",
  Increase = "increase",
  Decrease = "decrease",
}
export type IImage = { [K in IImageKeys]?: string };

export type Pallete = {
  pallete: string;
  sorted: string;
};
