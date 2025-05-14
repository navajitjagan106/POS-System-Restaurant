import bonda from '../assets/images/bonda.jpeg';
import cholapuri from '../assets/images/cholapuri.avif';
import dosa from '../assets/images/dosa.avif';
import idiyappam from '../assets/images/idiyappam.avif';
import idli from '../assets/images/idli.avif';
import masalagheeroast from '../assets/images/masalagheeroast.jpeg';
import minimeals from '../assets/images/minimeals.avif';
import onionbhaji from '../assets/images/onionbhaji.jpeg';
import parotta from '../assets/images/parotta.avif';
import pavbhaji from '../assets/images/pavbhaji.avif';
import pongal from '../assets/images/pongal.avif';
import poori from '../assets/images/poori.avif';
import ravadosai from '../assets/images/ravadosai.jpeg';
import vefmeals from '../assets/images/vefmeals.avif';

export const popularDishes = [
    { id: 1, image: dosa, name: "Dosa", numberofOrders: 250 },
    { id: 2, image: bonda, name: "Bonda", numberofOrders: 190 },
    { id: 3, image: cholapuri, name: "Cholapuri", numberofOrders: 175 },
    { id: 4, image: idiyappam, name: "Idiyappam", numberofOrders: 140 },
    { id: 5, image: idli, name: "Idli", numberofOrders: 220 },
    { id: 6, image: masalagheeroast, name: "Masala Ghee Roast", numberofOrders: 260 },
    { id: 7, image: minimeals, name: "Mini Meals", numberofOrders: 165 },
    { id: 8, image: onionbhaji, name: "Onion Bhaji", numberofOrders: 130 },
    { id: 9, image: parotta, name: "Parotta", numberofOrders: 210 },
    { id: 10, image: pavbhaji, name: "Pav Bhaji", numberofOrders: 185 },
    { id: 11, image: pongal, name: "Pongal", numberofOrders: 145 },
    { id: 12, image: poori, name: "Poori", numberofOrders: 195 },
    { id: 13, image: ravadosai, name: "Rava Dosai", numberofOrders: 205 },
    { id: 14, image: vefmeals, name: "Veg Meals", numberofOrders: 230 },
];

export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 }
  ];
  

  


 export const breakfast = [
  { id: 1, name: "Idli Vada", price: 60, rating: 4.5 },
  { id: 2, name: "Mini Tiffin", price: 90, rating: 4.7 },
  { id: 3, name: "Pongal", price: 50, rating: 4.4 },
  { id: 4, name: "Plain Dosa", price: 60, rating: 4.3 },
  { id: 5, name: "Rava Dosa", price: 70, rating: 4.2 },
  { id: 6, name: "Upma", price: 45, rating: 4.1 }
];

export const southIndian = [
  { id: 1, name: "Masala Dosa", price: 80, rating: 4.6 },
  { id: 2, name: "Onion Rava Dosa", price: 85, rating: 4.5 },
  { id: 3, name: "Poori Masala", price: 70, rating: 4.3 },
  { id: 4, name: "Idiyappam with Kurma", price: 65, rating: 4.2 },
  { id: 5, name: "Tomato Rice", price: 60, rating: 4.1 },
  { id: 6, name: "Curd Rice", price: 55, rating: 4.4 }
];

export const northIndian = [
  { id: 1, name: "Paneer Butter Masala", price: 150, rating: 4.5 },
  { id: 2, name: "Chole Bhature", price: 90, rating: 4.6 },
  { id: 3, name: "Dal Tadka", price: 80, rating: 4.3 },
  { id: 4, name: "Butter Naan", price: 50, rating: 4.4 },
  { id: 5, name: "Jeera Rice", price: 60, rating: 4.2 },
  { id: 6, name: "Aloo Paratha", price: 70, rating: 4.1 }
];

export const chinese = [
  { id: 1, name: "Veg Fried Rice", price: 100, rating: 4.3 },
  { id: 2, name: "Paneer Fried Rice", price: 120, rating: 4.4 },
  { id: 3, name: "Veg Noodles", price: 100, rating: 4.2 },
  { id: 4, name: "Gobi Manchurian Dry", price: 110, rating: 4.5 },
  { id: 5, name: "Spring Roll", price: 70, rating: 4.1 },
  { id: 6, name: "Schezwan Fried Rice", price: 115, rating: 4.3 }
];

export const snacks = [
  { id: 1, name: "Samosa", price: 25, rating: 4.1 },
  { id: 2, name: "Cutlet", price: 30, rating: 4.0 },
  { id: 3, name: "Bajji", price: 20, rating: 4.2 },
  { id: 4, name: "Medu Vada", price: 25, rating: 4.3 },
  { id: 5, name: "Kara Boondi", price: 50, rating: 4.4 },
  { id: 6, name: "Murukku", price: 40, rating: 4.1 }
];

export const sweets = [
  { id: 1, name: "Mysore Pak", price: 100, rating: 4.8 },
  { id: 2, name: "Badam Halwa", price: 120, rating: 4.7 },
  { id: 3, name: "Gulab Jamun", price: 40, rating: 4.5 },
  { id: 4, name: "Rasmalai", price: 55, rating: 4.6 },
  { id: 5, name: "Milk Peda", price: 45, rating: 4.3 },
  { id: 6, name: "Kaju Katli", price: 110, rating: 4.7 }
];

export const juices = [
  { id: 1, name: "Fresh Lime Juice", price: 35, rating: 4.3 },
  { id: 2, name: "Orange Juice", price: 50, rating: 4.4 },
  { id: 3, name: "Watermelon Juice", price: 45, rating: 4.2 },
  { id: 4, name: "Grape Juice", price: 50, rating: 4.1 },
  { id: 5, name: "Pineapple Juice", price: 55, rating: 4.3 },
  { id: 6, name: "Mango Juice", price: 60, rating: 4.6 }
];

export const comboMeals = [
  { id: 1, name: "Mini Meals", price: 130, rating: 4.6 },
  { id: 2, name: "South Indian Full Meals", price: 160, rating: 4.7 },
  { id: 3, name: "North Indian Thali", price: 180, rating: 4.5 },
  { id: 4, name: "Executive Lunch", price: 200, rating: 4.6 },
  { id: 5, name: "Roti Combo", price: 140, rating: 4.3 },
  { id: 6, name: "Tiffin Combo", price: 120, rating: 4.2 }
];


export const menus = [
  { id: 1, name: "Breakfast",color:"#b73e3e", icon: "☀️", items: breakfast },
  { id: 2, name: "South Indian",color:"#5b45b0", icon: "🍛", items: southIndian },
  { id: 3, name: "North Indian",color:"#7f167f", icon: "🍲", items: northIndian },
  { id: 4, name: "Chinese",color:"#735f32", icon: "🥡", items: chinese },
  { id: 5, name: "Snacks",color:"#1d2569", icon: "🍟", items: snacks },
  { id: 6, name: "Sweets",color:"#285430", icon: "🍬", items: sweets },
  { id: 7, name: "Juices",color:"#b73e3e", icon: "🧃", items: juices },
  { id: 8, name: "Combo Meals",color:"#5b45b0", icon: "🍱", items: comboMeals }
];
