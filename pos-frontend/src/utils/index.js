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

export const getAvatarName = (name) => {
  if (!name) return "";

  return name.split(" ").map(word => word[0]).join("").toUpperCase();
};

export const formatDate = (date) => {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
      };

export const formatTime = (date) =>
        `${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes()
        ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;      


