export const getRandomColor = () => {
  const colors = [
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FFA500', // Orange
    '#800080', // Purple
    '#00FFFF', // Cyan
    '#FFC0CB', // Pink
    '#A52A2A', // Brown
    '#808080', // Gray
    '#000000', // Black
    '#1a1a1a', // White (not great for bg but included)
    '#008000', // Dark Green
    '#00008B', // Dark Blue
    '#FFD700'  // Gold
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};


export const getBgColor = () => {
  const bgarr = ["#b73e3e", "#5b45b0", "#7f167f", "#735f32", "#1d2569", "#285430"];
  const randomBg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randomBg];
  return color;
};

