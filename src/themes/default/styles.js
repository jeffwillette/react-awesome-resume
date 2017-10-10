export const topBottomMargin = {
  margin: '20px 0px',
};

export const bottomMargin = {
  marginBottom: '20px',
};

export const topMargin = {
  marginTop: '20px',
};

export const smallFont = {
  fontSize: '12px',
  fontWeight: 'bold',
};

export const spanTinyMargin = {
  padding: '2px 5px',
};

export const emTwo = {
  fontSize: '2em',
};

export const bold = {
  fontWeight: 'bold',
};

export const emOneHalf = {
  fontSize: '1.5em',
};

export const emOneTwo = {
  fontSize: '1.2em',
};

export const color = (c) => {
  return {
    color: c,
  };
};

export const colors = {
  red: '#A0A0A0',
  orange: '#FE9A76',
  yellow: '#FFD700',
  olive: '#32CD32',
  green: '#016936',
  teal: '#008080',
  blue: '#0E6EB8',
  violet: '#EE82EE',
  purple: '#B413EC',
  pink: '#FF1493',
  brown: '#A52A2A',
  grey: '#A0A0A0',
  darkGrey: '#484848',
  black: '#000000',
};

export const c = (...args) => {
  return Object.assign({}, ...args);
};

/* eslint-disable */
export const hexToRgb = hex => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = bigint >> 16 & 255;
  const g = bigint >> 8 & 255;
  const b = bigint & 255;

  return `${r},${g},${b}`;
};
/* eslint-enable */

export const faded = (col) => {
  return {
    color: `rgba(${hexToRgb(col)}, .8)`,
  };
};
