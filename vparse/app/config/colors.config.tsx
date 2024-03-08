const colorConfig = {
  black: "#111",
  "black.400": "#19191A",

  white: "#fff",
  "white.400": "#f1f1f1",

  gray: "#212121",
  "gray.400": "#767676",
  "gray.300": "#616161",
  "gray.200": "#757575",

  primary: "#E53935",
  "primary.400": "#FF3347",

  purple: "#501A3B",
  "purple.200": "#800E4F",

  pink: "#B880A3",
  "pink.200": "#E76484",

  blue: "#1C80FC",
  "blue.200": "#83EAF1",

  yellow: "#FBC903",
  orange: "#FFAB40",
  lilac: "#B36DEA",
  green: "#4CAF50",
};

export const getColor = (color: keyof typeof colorConfig) => colorConfig[color];

export const getAuthGradientColors = () => [
  colorConfig.gray,
  colorConfig["pink.200"],
];

// export const getAuthGradientColors = () =>{
//   // Синий слева
//   const leftColor = colorConfig["blue.200"]; // или любой другой синий цвет
//   // Серый в середине
//   const middleColor = colorConfig.gray; // основной серый цвет
//   // Розовый справа
//   const rightColor = colorConfig["pink.200"]; // или любой другой розовый цвет

//   // Создаем массив цветов для градиента
//   // Синий и розовый занимают по 5%, серый - 90%
//   return [
//     leftColor, // начало градиента, синий
//     `${middleColor} 5%`, // начало серого сектора, 5%
//     middleColor, // середина, серый
//     `${middleColor} 95%`, // конец серого сектора, 95%
//     rightColor // конец градиента, розовый
//   ];

// }
