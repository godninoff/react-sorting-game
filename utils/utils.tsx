export const getUniqueValueInRange = (
  quantity: number,
  max: number,
  min: number
): number[] => {
  const set = new Set();
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * (max - min)) + min);
  }
  return Array.from(set) as number[];
};

export const getRandomLetter = (quantity: number) => {
  const set = new Set();
  while (set.size < quantity) {
    set.add(
      Math.floor(
        "А".charCodeAt(0) +
          Math.random() * ("Я".charCodeAt(0) - "А".charCodeAt(0))
      )
    );
  }
  const arr = Array.from(set) as number[];
  return arr.map((e: number) => String.fromCharCode(e));
};

export const getRange = (choosenValue: string, choosenQuantity: number) => {
  let result: Array<number | string> = [];
  if (choosenValue === "A") result = getRandomLetter(choosenQuantity);
  if (choosenValue === "9")
    result = getUniqueValueInRange(choosenQuantity, 1, 9);
  if (choosenValue === "19")
    result = getUniqueValueInRange(choosenQuantity, 10, 19);
  if (choosenValue === "50")
    result = getUniqueValueInRange(choosenQuantity, 20, 50);
  if (choosenValue === "99")
    result = getUniqueValueInRange(choosenQuantity, 51, 99);
  if (choosenValue === "999") {
    result = getUniqueValueInRange(choosenQuantity, 100, 999);
  }
  return result;
};

export const arrayRandElement = <T,>(arr: T[]): T => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export interface gameBg {
  items: string[];
  background: string;
  pallete: string;
  audio: string;
}

export const gameTheme: gameBg[] = [
  {
    items: [
      "/images/burger.png",
      "/images/confetti.png",
      "/images/ring.png",
      "/images/star.png",
      "/images/ring.png",
    ],
    background: "/images/coockiebg.png",
    pallete: "/images/pallet.png",
    audio: "/audio/theme.wav",
  },
  {
    items: [
      "/images/coin1.png",
      "/images/coin2.png",
      "/images/coin3.png",
      "/images/coin2.png",
      "/images/coin3.png",
    ],
    background: "/images/coinbg.png",
    pallete: "/images/pallet2.png",
    audio: "/audio/theme.wav",
  },
  {
    items: [
      "/images/flower1.png",
      "/images/flower2.png",
      "/images/flower3.png",
      "/images/flower4.png",
      "/images/flower5.png",
    ],
    background: "/images/flowersbg.png",
    pallete: "/images/pallet3.png",
    audio: "/audio/theme.wav",
  },
  {
    items: [
      "/images/decor1.png",
      "/images/decor2.png",
      "/images/decor3.png",
      "/images/decor4.png",
      "/images/decor3.png",
    ],
    background: "/images/christmasbg.png",
    pallete: "/images/pallet4.png",
    audio: "/audio/theme.wav",
  },
];
