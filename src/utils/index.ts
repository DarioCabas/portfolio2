interface TintFunction {
  (hex: string, amount: number): string;
}

export const tint: TintFunction = (hex, amount) => {
  try {
    let R = parseInt(hex.substring(1, 3), 16);
    let G = parseInt(hex.substring(3, 5), 16);
    let B = parseInt(hex.substring(5, 7), 16);

    const getSingle = (number: number) => Math.min(255, Math.floor(number * (1 + amount / 100)));

    R = getSingle(R);
    G = getSingle(G);
    B = getSingle(B);

    const RR = getSingle(R);
    const GG = getSingle(G);
    const BB = getSingle(B);

    const getDouble = (number: number) =>
      number.toString(16).length === 1 ? `0${number.toString(16)}` : number.toString(16);

    return `#${getDouble(RR)}${getDouble(GG)}${getDouble(BB)}`;
  } catch (error) {
    console.log(error);
    return '';
  }
};

interface HexaFunction {
  (hex: string, alpha: number): string;
}

export const hexa: HexaFunction = (hex, alpha) => {
  try {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha >= 0) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  } catch (error) {
    console.log(error);
    return '';
  }
};
