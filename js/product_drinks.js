

/* ==============================================
  1. DATASET SẢN PHẨM
  ============================================== */
const products = [
  {
    id: 'caffe-mocha',
    name: 'Caffè Mocha',
    calories: 370,
    imageSrc: '../assets/images/duong-241230692/Caffè Mocha.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Starbucks® Blonde Roast - Veranda Blend®',
    name: 'Starbucks® Blonde Roast - Veranda Blend®',
    calories: 5,
    imageSrc:
      '../assets/images/duong-241230692/Starbucks® Blonde Roast - Veranda Blend®.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Medium Roast - Pike Place® Roast',
    name: 'Medium Roast - Pike Place® Roast',
    calories: 5,
    imageSrc:
      '../assets/images/duong-241230692/Starbucks® Blonde Roast - Veranda Blend®.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Medium Roast - Guatemala Casi Cielo®',
    name: 'Medium Roast - Guatemala Casi Cielo®',
    calories: 5,
    imageSrc:
      '../assets/images/duong-241230692/Medium Roast - Guatemala Casi Cielo®.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Dark Roast - Caffè Verona®',
    name: 'Dark Roast - Caffè Verona®',
    calories: 5,
    imageSrc:
      '../assets/images/duong-241230692/Dark Roast - Caffè Verona®.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Decaf Roast - Pike Place® Roast',
    name: 'Decaf Roast - Pike Place® Roast',
    calories: 5,
    imageSrc:
      '../assets/images/duong-241230692/Decaf Roast - Pike Place® Roast.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Caffè Misto',
    name: 'Caffè Misto',
    calories: 5,
    imageSrc: '../assets/images/duong-241230692/Caffè Misto.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: true,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Caffè Americano',
    name: 'Caffè Americano',
    calories: 15,
    imageSrc: '../assets/images/duong-241230692/Caffè Americano.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Caffè Latte',
    name: 'Caffè Latte',
    calories: 190,
    imageSrc: '../assets/images/duong-241230692/Caffè Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Pumpkin Spice Latte',
    name: 'Pumpkin Spice Latte',
    calories: 390,
    imageSrc: '../assets/images/duong-241230692/Pumpkin Spice Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Pecan Crunch Oatmilk Latte',
    name: 'Pecan Crunch Oatmilk Latte',
    calories: 190,
    imageSrc: '../assets/images/duong-241230692/Pecan Crunch Oatmilk Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'CVanilla Protein Latte',
    name: 'Vanilla Protein Latte',
    calories: 370,
    imageSrc: '../assets/images/duong-241230692/Vanilla Protein Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: false,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Sugar-Free Vanilla Protein Latte',
    name: 'Sugar-Free Vanilla Protein Latte',
    calories: 370,
    imageSrc:
      '../assets/images/duong-241230692/Sugar-Free Vanilla Protein Latte.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Cinnamon Dolce Latte',
    name: 'Cinnamon Dolce Latte',
    calories: 5,
    imageSrc: '../assets/images/duong-241230692/Cinnamon Dolce Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Cappuccino',
    name: 'Cappuccino',
    calories: 5,
    imageSrc: '../assets/images/duong-241230692/Cappuccino.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Starbucks® Blonde Vanilla Latte',
    name: 'Starbucks® Blonde Vanilla Latte',
    calories: 250,
    imageSrc:
      '../assets/images/duong-241230692/Starbucks® Blonde Vanilla Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'White Chocolate Mocha',
    name: 'White Chocolate Mocha',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/White Chocolate Mocha.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true, // LỖI 2 (TYPO): Sửa 'flase' -> 'false'
    },
  },
  {
    id: 'Espresso Macchiato',
    name: 'Espresso Macchiato',
    calories: 15,
    imageSrc: '../assets/images/duong-241230692/Espresso Macchiato.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Caramel Macchiato',
    name: 'Caramel Macchiato',
    calories: 5,
    imageSrc: '../assets/images/duong-241230692/Caramel Macchiato.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Flat White',
    name: 'Flat White',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Flat White.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Cortado',
    name: 'Cortado',
    calories: 90,
    imageSrc: '../assets/images/duong-241230692/Cortado.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Pecan Oatmilk Cortado',
    name: 'Pecan Oatmilk Cortado',
    calories: 120,
    // LỖI 3 (SAI ẢNH): Thiếu dấu "/"
    imageSrc: '../assets/images/duong-241230692/Pecan Oatmilk Cortado.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Brown Sugar Oatmilk Cortado',
    name: 'Brown Sugar Oatmilk Cortado',
    calories: 150,
    imageSrc:
      '../assets/images/duong-241230692/Brown Sugar Oatmilk Cortado.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Espresso',
    name: 'Espresso',
    calories: 15,
    imageSrc: '../assets/images/duong-241230692/Espresso.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Coffee Traveler – Decaf Pike Place® Roast',
    name: 'Coffee Traveler – Decaf Pike Place® Roast',
    calories: 35,
    imageSrc:
      '../assets/images/duong-241230692/Coffee Traveler – Decaf Pike Place® Roast.jpg',
    customizers: {
      sizes: false,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Pumpkin Cream Cold Brew',
    name: 'Pumpkin Cream Cold Brew',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Pumpkin Cream Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Raspberry Cream Cold Brew',
    name: 'Raspberry Cream Cold Brew',
    calories: 160,
    imageSrc: '../assets/images/duong-241230692/Raspberry Cream Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Chocolate Cream Protein Cold Brew',
    name: 'Chocolate Cream Protein Cold Brew',
    calories: 190,
    imageSrc:
      '../assets/images/duong-241230692/Chocolate Cream Protein Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Vanilla Sweet Cream Cold Brew',
    name: 'Vanilla Sweet Cream Cold Brew',
    calories: 150,
    imageSrc:
      '../assets/images/duong-241230692/Vanilla Sweet Cream Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Nondairy Vanilla Sweet Cream Cold Brew',
    name: 'Nondairy Vanilla Sweet Cream Cold Brew',
    calories: 100,
    imageSrc:
      '../assets/images/duong-241230692/Nondairy Vanilla Sweet Cream Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Nondairy Salted Caramel Cream Cold Brew',
    name: 'Nondairy Salted Caramel Cream Cold Brew',
    calories: 150,
    imageSrc:
      '../assets/images/duong-241230692/Nondairy Salted Caramel Cream Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Cold Brew with Nondairy Vanilla Sweet Cream Cold',
    name: 'Cold Brew with Nondairy Vanilla Sweet Cream Cold',
    calories: 150,
    imageSrc:
      '../assets/images/duong-241230692/Cold Brew with Nondairy Vanilla Sweet Cream Cold.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Nondairy Chocolate Cream Cold Brew',
    name: 'Nondairy Chocolate Cream Cold Brew',
    calories: 150,
    imageSrc:
      '../assets/images/duong-241230692/Nondairy Chocolate Cream Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: true,
      hot: false,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Nitro Cold Brew',
    name: 'Nitro Cold Brew',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Nitro Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Vanilla Sweet Cream Nitro Cold Brew',
    name: 'Vanilla Sweet Cream Nitro Cold Brew',
    calories: 10,
    imageSrc:
      '../assets/images/duong-241230692/Vanilla Sweet Cream Nitro Cold Brew.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Iced Espresso',
    name: 'Iced Espresso',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Iced Espresso.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Caffè Americano',
    name: 'Iced Caffè Americano',
    calories: 15,
    imageSrc: '../assets/images/duong-241230692/Iced Caffè Americano.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Pumpkin Spice Latte',
    name: 'Iced Pumpkin Spice Latte',
    calories: 370,
    imageSrc: '../assets/images/duong-241230692/Iced Pumpkin Spice Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Vanilla Protein Latte',
    name: 'Iced Vanilla Protein Latte',
    calories: 270,
    imageSrc: '../assets/images/duong-241230692/Iced Vanilla Protein Latte.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Pecan Crunch Oatmilk Latte',
    name: 'Iced Pecan Crunch Oatmilk Latte',
    calories: 410,
    imageSrc:
      '../assets/images/duong-241230692/Iced Pecan Crunch Oatmilk Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Sugar-Free Vanilla Protein Latte',
    name: 'Iced Sugar-Free Vanilla Protein Latte',
    calories: 200,
    imageSrc:
      '../assets/images/duong-241230692/Iced Sugar-Free Vanilla Protein Latte.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Caffè Mocha',
    name: 'Iced Caffè Mocha',
    calories: 350,
    imageSrc: '../assets/images/duong-241230692/Iced Caffè Mocha.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Caramel Macchiato',
    name: 'Iced Caramel Macchiato',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Iced Caramel Macchiato.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: true,
      topping: true,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Iced Flat White',
    name: 'Iced Flat White',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Iced Flat White.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false, // LỖI 4 (TYPO): Sửa 'flase' -> 'false'
      hot: false,
      topping: false,
      flavors: false,
      shots: true,
      espresso: true,
    },
  },
  {
    id: 'Chai Latte',
    name: 'Tea Latte',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Tea Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: false,
      shots: false,
      espresso: false,
    },
  },
  {
    id: 'Protein Matcha',
    name: 'Protein Matcha',
    calories: 200,
    imageSrc: '../assets/images/duong-241230692/Protein Matcha.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: false,
    },
  },
  {
    id: 'Matcha Latte',
    name: 'Matcha Latte',
    calories: 220,
    imageSrc: '../assets/images/duong-241230692/Matcha Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'London Fog Latte',
    name: 'London Fog Latte',
    calories: 180,
    imageSrc: '../assets/images/duong-241230692/London Fog Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: false,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Honey Citrus Mint Tea',
    name: 'Honey Citrus Mint Tea',
    calories: 130,
    imageSrc: '../assets/images/duong-241230692/Honey Citrus Mint Tea.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Royal English Breakfast Tea',
    name: 'Royal English Breakfast Tea',
    calories: 0,
    imageSrc: '../assets/images/duong-241230692/Royal English Breakfast Tea.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Iced Chai Latte',
    name: 'Iced Chai Latte',
    calories: 240,
    imageSrc: '../assets/images/duong-241230692/Iced Chai Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Iced Matcha Latte',
    name: 'Iced Matcha Latte',
    calories: 190,
    imageSrc: '../assets/images/duong-241230692/Iced Matcha Latte.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Iced Black Tea',
    name: 'Iced Black Tea',
    calories: 0,
    imageSrc: '../assets/images/duong-241230692/Iced Black Tea.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Iced Passion Tango® Tea',
    name: 'Iced Passion Tango® Tea',
    calories: 0,
    imageSrc: '../assets/images/duong-241230692/Iced Passion Tango® Tea.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Matcha Crème Frappuccino® Blended Beverage',
    name: 'Matcha Crème Frappuccino® Blended Beverage',
    calories: 320,
    imageSrc:
      '../assets/images/duong-241230692/Matcha Crème Frappuccino® Blended Beverage.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Strawberry Açaí Lemonade Refresher',
    name: 'Strawberry Açaí Lemonade Refresher',
    calories: 140,
    imageSrc:
      '../assets/images/duong-241230692/Strawberry Açaí Lemonade Refresher.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Mango Dragonfruit Lemonade Refresher',
    name: 'Mango Dragonfruit Lemonade Refresher',
    calories: 140,
    imageSrc:
      '../assets/images/duong-241230692/Mango Dragonfruit Lemonade Refresher.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Pink Drink',
    name: 'Pink Drink',
    calories: 140,
    imageSrc: '../assets/images/duong-241230692/Pink Drink.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Dragon Drink®',
    name: 'Dragon Drink®',
    calories: 140,
    imageSrc: '../assets/images/duong-241230692/Dragon Drink®.jpg',
    customizers: {
      sizes: true,
      milk: false,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Caramel Ribbon Crunch Frappuccino® Blended Beverage',
    name: 'Caramel Ribbon Crunch Frappuccino® Blended Beverage',
    calories: 420,
    imageSrc:
      '../assets/images/duong-241230692/Caramel Ribbon Crunch Frappuccino® Blended Beverage.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Pumpkin Spice Frappuccino® Blended Beverage',
    name: 'Pumpkin Spice Frappuccino® Blended Beverage',
    calories: 420,
    imageSrc:
      '../assets/images/duong-241230692/Pumpkin Spice Frappuccino® Blended Beverage.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Brown Sugar Strato™ Frappuccino® Blended Beverage',
    name: 'Brown Sugar Strato™ Frappuccino® Blended Beverage',
    calories: 420,
    imageSrc:
      '../assets/images/duong-241230692/Brown Sugar Strato™ Frappuccino® Blended Beverage.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Strawberry Matcha Strato™ Frappuccino® Blended Beverage',
    name: 'Strawberry Matcha Strato™ Frappuccino® Blended Beverage',
    calories: 420,
    imageSrc:
      '../assets/images/duong-241230692/Strawberry Matcha Strato™ Frappuccino® Blended Beverage.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: false,
      hot: false,
      topping: true,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Hot Chocolate',
    name: 'Hot Chocolate',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Hot Chocolate.jpg',
    customizers: {
      sizes: true,
      milk: true,
      roast: true,
      hot: true,
      topping: true,
      flavors: true,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Ethos® Water',
    name: 'Ethos® Water',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/Ethos® Water.jpg',
    customizers: {
      sizes: false,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'Spindrift® Lemon Sparkling Water',
    name: 'Spindrift® Lemon Sparkling Water',
    calories: 150,
    imageSrc:
      '../assets/images/duong-241230692/Spindrift® Lemon Sparkling Water.jpg',
    customizers: {
      sizes: false,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'DASANI® Water',
    name: 'DASANI® Water',
    calories: 150,
    imageSrc: '../assets/images/duong-241230692/DASANI® Water.jpg',
    customizers: {
      sizes: false,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: false,
      shots: false,
      espresso: true,
    },
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Coffee',
    calories: 5,
    imageSrc: '../assets/images/duong-241230692/Cold Brew.jpg',
    customizers: {
      sizes:false,
      milk: false,
      roast: false,
      hot: false,
      topping: false,
      flavors: true,
      shots: true,
      espresso: true,
    },
  },
];

/* ==============================================
    2. CÁC BIẾN VÀ HÀM HELPER
    ============================================== */

// Helpers để lấy URL param
const getParam = (key) => new URL(window.location.href).searchParams.get(key);

// Helpers để chọn sản phẩm
function pickProduct() {
  const pid = getParam('id') || 'caffe-mocha'; // Mặc định là 'caffe-mocha'
  return products.find((p) => p.id === pid) || products[0];
}

// Helper tạo phần tử (rất hữu ích)
function createEl(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.cls) el.className = options.cls;
  if (options.id) el.id = options.id;
  if (options.text) el.textContent = options.text;
  if (options.html) el.innerHTML = options.html;
  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

// --- DỮ LIỆU CỦA BẠN (GIỮ NGUYÊN) ---
const initialImages = {
  short: '../assets/images/duong-241230692/short.png',
  tall: '../assets/images/duong-241230692/tall.png',
  grande: '../assets/images/duong-241230692/grande.png',
  venti: '../assets/images/duong-241230692/venti.png',
};

// --- CÁC BIẾN TRẠNG THÁI CƠ BẢN (GIỮ NGUYÊN) ---
let selectedSize = null;
let selectedImageIndex = null;
let cost = 0;
const roast_select = [
  'Bọt',
  'Foam (Bọt sữa)',
  'Nhiều bọt',
  'Ít bọt',
  'Không bọt',
];
const hot_select = ['Nóng', 'Hấp nóng (Steamed Hot)', 'Rất nóng', 'Ấm'];
const milk_select = [
  'Sữa',
  'Sữa 2% béo',
  'Sữa hạnh nhân',
  'Sữa dừa',
  'Breve (Nửa sữa, nửa kem)',
  'Kem béo',
];
const topping_select = [
  'Topping (Phụ)',
  'Kem tươi (Whipped Cream)',
  'Nhiều kem tươi',
  'Ít kem tươi',
  'Không kem',
];
const espresso_select = [
  'Espresso',
  'Espresso rang sáng (Blonde)',
  'Espresso đặc trưng (Signature)',
  'Espresso 1/2 Decaf',
  'Espresso rang Decaf',
  'Espresso 1/3 Decaf',
  'Espresso 2/3 Decaf',
];
const sizes = { short: 40000, tall: 45000, grande: 50000, venti: 55000 };
let type_milk = [0, 0, 5000, 5000, 7000, 7000];
let type_hot = [0, 0, 0, 0];
let type_roast = [0, 0, 3000, 3000, 0];
let type_topping = [0, 5000, 7000, 3000, 7000];
let type_espresso = [0, 5000, 0, 3000, 3000, 3000, 3000];
let cost_shot = 5000;
let cost_flavor = 3000;
let shots = 0;
let flavors = 0;

// --- BIẾN DOM (SẼ ĐƯỢC GÁN TRONG DOMCONTENTLOADED) ---
// Chúng ta khai báo chúng ở đây để các hàm global có thể "thấy"
let box1, box2, box3, box4, box5, box6, box7;
let leg1, leg2, leg3, leg4, leg5, leg6, leg7;
let select1, select2, select3, select4, select7;

/* ==============================================
    3. HÀM RENDER (PHẦN MỚI)
    ============================================== */

// Hàm render thông tin sản phẩm CƠ BẢN (Ảnh, Tên, Calo)
function renderProduct(product) {
  const container = document.getElementById('product-section');
  if (!container) return;

  container.innerHTML = ''; // Xóa nội dung cũ

  // 1. Render ảnh
  if (product.imageSrc) {
    const img = createEl('img', {
      attrs: {
        src: product.imageSrc,
        alt: product.name,
        width: '400px',
        height: '300px',
      },
    });
    container.appendChild(img);
  }

  // 2. Render thông tin
  const infoDiv = createEl('div', { cls: 'info' });
  if (product.name) {
    infoDiv.appendChild(createEl('label', { text: product.name }));
  }
  if (product.calories) {
    infoDiv.appendChild(createEl('p', { text: `${product.calories} calories` }));
  }
  container.appendChild(infoDiv);
}

// Hàm render CÁC TÙY CHỌN (Phần phức tạp)
function renderCustomizer(customizers) {
  const container = document.getElementById('custom-section');
  if (!container) return;

  container.innerHTML = ''; // Xóa sạch

  // Tạo cột trái và phải
  const left = createEl('div', { cls: 'left' });
  const right = createEl('div', { cls: 'right' });
  right.appendChild(createEl('h3', { text: 'Bao gồm những gì?' }));

  // --- 1. Render Cột Trái (Sizes) ---
  if (customizers.sizes) {
    left.appendChild(createEl('h3', { text: 'Lựa chọn kích thước' }));
    const sizeContainer = createEl('div', { cls: 'select-size' });

    // Helper để tạo 1 nút size
    const createSizeOption = (size, name, oz) => {
      const wrapper = createEl('div', {
        cls: `size-option ${size}`,
        attrs: {
          'data-selected-image': `../assets/images/duong-241230692/venti.png`,
        }, // Giả sử bạn có ảnh _selected
      });
      const btn = createEl('button', { attrs: { onclick: 'changeImage(this)' } });
      btn.appendChild(
        createEl('img', { attrs: { src: initialImages[size], alt: size } })
      );
      wrapper.appendChild(btn);
      wrapper.appendChild(createEl('h4', { text: name }));
      wrapper.appendChild(createEl('p', { text: `${oz} fl oz` }));
      return wrapper;
    };

    sizeContainer.appendChild(createSizeOption('short', 'Nhỏ', 8));
    sizeContainer.appendChild(createSizeOption('tall', 'Vừa', 12));
    sizeContainer.appendChild(createSizeOption('grande', 'Lớn', 16));
    sizeContainer.appendChild(createSizeOption('venti', 'Rất lớn', 24));
    left.appendChild(sizeContainer);

    // Render khu vực giá
    const priceDiv = createEl('div', { cls: 'price' });
    // Sửa “Price” -> “Giá”, “0.00” -> “0”, “$” -> “VND”
    priceDiv.innerHTML = `<p style="font-weight: bold;">Giá: <span style="font-size: 32px; font-weight: bold; color: red;" id="price">0</span> VND<p>`;
    left.appendChild(priceDiv);
  }

  // --- 2. Render Cột Phải (Dropdowns & Counters) ---

  // Helper tạo Dropdown (select)
  const createDropdown = (id, legend, options) => {
    const fieldset = createEl('fieldset', { id: `box${id}` });
    fieldset.appendChild(
      createEl('legend', { html: `<span class="legend-left" id="leg${id}">${legend}</span>` })
    );
    const select = createEl('select', {
      id: `select${id}`,
      // LỖI 5 (SỰ KIỆN): Sửa 'onclick' -> 'onchange'
      attrs: { name: `select${id}`, onchange: `changed${id}()` },
    });

    options.forEach((opt, index) => {
      const optionEl = createEl('option', { value: index, text: opt });
      if (index === 1) optionEl.selected = true; // Mặc định chọn cái thứ 2
      if (index === 0) optionEl.disabled = true; // Vô hiệu hóa cái đầu tiên
      select.appendChild(optionEl);
    });

    fieldset.appendChild(select);
    return createEl('div', { cls: 'option', html: fieldset.outerHTML });
  };

  // Helper tạo Counter (tăng/giảm)
  const createCounter = (id, legend, value, decFunc, incFunc) => {
    const fieldset = createEl('fieldset', { id: `box${id}` });
    fieldset.innerHTML = `
        <legend><span class="legend-left" id="leg${id}">${legend}</span></legend>
        <div class="options">
            <label>${legend}</label>
            <div class="in-de">
                <button onclick="${decFunc}()">
                    <i class="fa-regular fa-circle-down fa-xl" style="color: #008000;"></i>
                </button>
                <p id="${value}-value">${legend === 'Flavors' ? flavors : shots}</p>
                <button onclick="${incFunc}()">
                    <i class="fa-regular fa-circle-up fa-xl" style="color: #008000;"></i>
                </button>
            </div>
        </div>`;
    return createEl('div', { cls: 'option', html: fieldset.outerHTML });
  };

  // Dùng data để render
  if (customizers.milk) {
    right.appendChild(createDropdown('1', 'Sữa', milk_select));
  }
  if (customizers.roast) {
    right.appendChild(createDropdown('2', 'Bọt', roast_select));
  }
  if (customizers.hot) {
    right.appendChild(createDropdown('3', 'Nhiệt độ', hot_select));
  }
  if (customizers.topping) {
    right.appendChild(createDropdown('4', 'Toppings', topping_select));
  }
  if (customizers.flavors) {
    right.appendChild(
      createCounter('5', 'Flavors', 'flavors', 'decreaseFlavors', 'increaseFlavors')
    );
  }
  if (customizers.shots) {
    right.appendChild(
      createCounter('6', 'Shots', 'shots', 'decreaseShots', 'increaseShots')
    );
  }
  if (customizers.espresso) {
    right.appendChild(createDropdown('7', 'Tùy chọn Espresso', espresso_select));
  }

  // Nút Add/Reset (chỉ hiển thị nếu có CỘT PHẢI)
  if (right.children.length > 1) {
    // >1 vì đã có <h3>
    const buttonsDiv = createEl('div', { cls: 'cus-res' });
    buttonsDiv.innerHTML = `
        <button class="cus" onclick="add_order()">
            <i class="fa-solid fa-wand-magic-sparkles" style="color: #FFD43B;"></i> Thêm đơn hàng
        </button>
        <button class="res" onclick="reset_val()">
            <i class="fa-solid fa-rotate-right" style="color: #FFD43B;"></i> Đặt lại công thức tiêu chuẩn
        </button>
    `;
    right.appendChild(buttonsDiv);
  }

  // Gắn cột vào container chính
  if (left.children.length > 0) container.appendChild(left);
  if (right.children.length > 1) container.appendChild(right); // >1 vì đã có <h3>
}

/* ==============================================
    4. CODE CƠ BẢN (ĐÃ SỬA ĐỂ CHẠY LẠI)
    ============================================== */

// Các hàm của bạn giờ phải KIỂM TRA xem phần tử có tồn tại không
function updatePrice() {
  if (selectedSize != null && selectedImageIndex != null) {
    cost = sizes[selectedImageIndex];
    // Chỉ cộng nếu select tồn tại
    if (select1) cost += type_milk[select1.selectedIndex];
    if (select2) cost += type_roast[select2.selectedIndex];
    if (select3) cost += type_hot[select3.selectedIndex];
    if (select4) cost += type_topping[select4.selectedIndex];
    if (select7) cost += type_espresso[select7.selectedIndex];
    cost += cost_shot * shots + cost_flavor * flavors;
  } else {
    cost = 0;
  }

  const priceEl = document.getElementById('price');
  if (priceEl) {
    // Phải kiểm tra xem #price có tồn tại không
    priceEl.textContent = Math.round(cost).toLocaleString('vi-VN');
  }
}

// Hàm này được gọi bằng onclick, nên nó phải ở global scope
function changeImage(button) {
  const selectedOption = button.parentElement;
  const img = selectedOption.querySelector('img');
  const initialImageSrc = initialImages[selectedOption.classList[1]];
  const selectedImageSrc = selectedOption.getAttribute('data-selected-image');
  const sizeOptions = document.querySelectorAll('.size-option');

  if (selectedOption.classList.contains('selected')) {
    selectedOption.classList.remove('selected');
    img.src = initialImageSrc;
    selectedSize = null;
    selectedImageIndex = null;
  } else {
    sizeOptions.forEach((option) => {
      option.classList.remove('selected');
      const optionImg = option.querySelector('img');
      optionImg.src = initialImages[option.classList[1]];
    });
    selectedOption.classList.add('selected');
    img.src = selectedImageSrc;
    selectedSize = selectedOption.classList[1];
    selectedImageIndex = selectedOption.classList[1];
  }
  updatePrice();
}

// Các hàm changedX phải kiểm tra null
function changed1() {
  if (box1) box1.style.border = '3px solid green';
  if (leg1) leg1.style.color = 'green';
  updatePrice();
}
function changed2() {
  if (box2) box2.style.border = '3px solid green';
  if (leg2) leg2.style.color = 'green';
  updatePrice();
}
function changed3() {
  if (box3) box3.style.border = '3px solid green';
  if (leg3) leg3.style.color = 'green';
  updatePrice();
}
function changed4() {
  if (box4) box4.style.border = '3px solid green';
  if (leg4) leg4.style.color = 'green';
  updatePrice();
}
function changed7() {
  if (box7) box7.style.border = '3px solid green';
  if (leg7) leg7.style.color = 'green';
  updatePrice();
}

function add_order() {
  if (selectedSize == null) {
    alert('Bạn chưa chọn Size!');
  } else {
    // Xây dựng thông báo một cách an toàn
    let message = `Bạn đã thêm sản phẩm thành công! \nKích thước: ${selectedSize.toUpperCase()}`;
    if (select1) message += `, Sữa: ${milk_select[select1.selectedIndex]}`;
    if (select2) message += `\nBọt: ${roast_select[select2.selectedIndex]}`;
    if (select3) message += `, Nhiệt độ: ${hot_select[select3.selectedIndex]}`;
    if (select4) message += `\nToppings: ${topping_select[select4.selectedIndex]}`;
    if (document.getElementById('flavors-value'))
      message += `, Flavors: ${flavors}`;
    if (document.getElementById('shots-value')) message += `, Shots: ${shots}`;
    if (select7)
      message += `\nEspresso: ${espresso_select[select7.selectedIndex]}`;
    // LỖI 8 (HIỂN THỊ): Sửa định dạng giá cho nhất quán
    message += `\nGiá: ${Math.round(cost).toLocaleString('vi-VN')} VND`;

    alert(message);
  }
}

function reset_val() {
  // Reset selects
  if (select1) select1.selectedIndex = 1;
  if (select2) select2.selectedIndex = 1;
  if (select3) select3.selectedIndex = 1;
  if (select4) select4.selectedIndex = 3;
  if (select7) select7.selectedIndex = 3;

  // Reset styles
  const boxes = [box1, box2, box3, box4, box5, box6, box7];
  const legs = [leg1, leg2, leg3, leg4, leg5, leg6, leg7];
  boxes.forEach((box) => {
    if (box) box.style.border = '3px solid #D4E9E2';
  });
  legs.forEach((leg) => {
    if (leg) leg.style.color = 'gray';
  });

  // Reset counters
  const shotsVal = document.getElementById('shots-value');
  const flavorsVal = document.getElementById('flavors-value');
  // LỖI 7 (LOGIC): Đặt lại về 0 cho nhất quán với giá trị khởi tạo
  if (shotsVal) shotsVal.textContent = 0;
  if (flavorsVal) flavorsVal.textContent = 0;
  shots = 0;
  flavors = 0;
  const sizeOptions = document.querySelectorAll('.size-option');
  if (sizeOptions.length > 0) {
    sizeOptions.forEach((option) => {
      option.classList.remove('selected');
      const optionImg = option.querySelector('img');
      optionImg.src = initialImages[option.classList[1]];
    });
    selectedSize = null;
    selectedImageIndex = null;
  }

  updatePrice();
}

// Các hàm tăng/giảm phải kiểm tra null
function increaseFlavors() {
  flavors++;
  const el = document.getElementById('flavors-value');
  if (el) el.textContent = flavors;
  if (box5) box5.style.border = '3px solid green';
  if (leg5) leg5.style.color = 'green';
  updatePrice();
}
function decreaseFlavors() {
  if (flavors > 0) { // Sửa thành > 0 để có thể reset về 0
    flavors--;
    const el = document.getElementById('flavors-value');
    if (el) el.textContent = flavors;
    if (box5) box5.style.border = '3px solid green';
    if (leg5) leg5.style.color = 'green';
    updatePrice();
  }
}
function increaseShots() {
  shots++;
  const el = document.getElementById('shots-value');
  if (el) el.textContent = shots;
  if (box6) box6.style.border = '3px solid green';
  if (leg6) leg6.style.color = 'green';
  updatePrice();
}
function decreaseShots() {
  if (shots > 0) { // Sửa thành > 0 để có thể reset về 0
    shots--;
    const el = document.getElementById('shots-value');
    if (el) el.textContent = shots;
    if (box6) box6.style.border = '3px solid green';
    if (leg6) leg6.style.color = 'green';
    updatePrice();
  }
}

/* ==============================================
    5. KHỞI TẠO TRANG (GOM TẤT CẢ LẠI)
    ============================================== */

// LỖI 6 (LOGIC): Toàn bộ code khởi tạo và gán sự kiện phải nằm TRONG 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. LẤY VÀ RENDER DỮ LIỆU SẢN PHẨM ---
  const product = pickProduct();
  renderProduct(product);
  renderCustomizer(product.customizers); // Truyền vào các tùy chọn

  // --- 2. GÁN CÁC BIẾN DOM CƠ BẢN (QUAN TRỌNG) ---
  // Bây giờ các phần tử đã tồn tại, ta mới gán biến
  box1 = document.getElementById('box1');
  box2 = document.getElementById('box2');
  box3 = document.getElementById('box3');
  box4 = document.getElementById('box4');
  box5 = document.getElementById('box5');
  box6 = document.getElementById('box6');
  box7 = document.getElementById('box7');
  leg1 = document.getElementById('leg1');
  leg2 = document.getElementById('leg2');
  leg3 = document.getElementById('leg3');
  leg4 = document.getElementById('leg4');
  leg5 = document.getElementById('leg5');
  leg6 = document.getElementById('leg6');
  leg7 = document.getElementById('leg7');
  select1 = document.getElementById('select1');
  select2 = document.getElementById('select2');
  select3 = document.getElementById('select3');
  select4 = document.getElementById('select4');
  select7 = document.getElementById('select7');

  // Khởi tạo giá trị cho counter (nếu tồn tại)
  const flavorsVal = document.getElementById('flavors-value');
  const shotsVal = document.getElementById('shots-value');
  if (flavorsVal) flavorsVal.textContent = flavors;
  if (shotsVal) shotsVal.textContent = shots;

  // --- 3. LOGIC MENU BURGER (ĐÃ DI CHUYỂN VÀO ĐÂY) ---
  const burger = document.getElementById('burger');
  const overlay = document.getElementById('overlay');
  const drawer = overlay?.querySelector('.drawer');

  // Hàm lấy các phần tử có thể focus bên trong drawer
  const getFocusable = () => {
    return drawer
      ? Array.from(
          drawer.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        )
      : [];
  };

  // Hàm mở menu
  function openMenu() {
    if (!overlay) return;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    burger?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('lock');
    const focusables = getFocusable();
    if (focusables.length > 0) focusables[0].focus();
  }

  // Hàm đóng menu
  function closeMenu() {
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('lock');
    burger?.focus();
  }

  // Hàm bật/tắt menu
  function toggleMenu() {
    const isOpen = overlay?.classList.contains('open') ?? false;
    isOpen ? closeMenu() : openMenu();
  }

  // Lắng nghe sự kiện click vào burger để mở/đóng menu
  burger?.addEventListener('click', toggleMenu);

  // Đóng menu khi click ra ngoài overlay
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  // Đóng menu khi nhấn phím Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay?.classList.contains('open')) closeMenu();
  });

  // Giữ focus trong menu khi tab
  document.addEventListener('keydown', (e) => {
    if (!overlay?.classList.contains('open') || e.key !== 'Tab') return;
    const focusables = getFocusable();
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Xử lý khi màn hình đủ lớn (tự đóng menu)
  const mql = window.matchMedia('(min-width: 960px)');
  const handleMediaQueryChange = (e) => {
    if (e.matches && overlay?.classList.contains('open')) closeMenu();
  };
  mql.addEventListener('change', handleMediaQueryChange);
  handleMediaQueryChange(mql);

  // --- 4. KHỞI TẠO GIÁ BAN ĐẦU (ĐÃ DI CHUYỂN VÀO ĐÂY) ---
  updatePrice();
});
