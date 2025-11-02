/*
============================================================
  PHẦN 1: DATASET (Tất cả sản phẩm)
============================================================
*/

// QUAN TRỌNG: Tên các key (ví dụ: 'Bakery') 
// phải TRÙNG KHỚP với giá trị `data-category` bạn đặt trong HTML
const allCategoryData = {
    
    // ------- ĐỒ ĂN --------
    'Bakery': { 
        pageTitle: 'Tiệm bánh',
        categoryName: 'Tiệm bánh',
        productType: 'food', // Link tới product_food.html
        categoryClass: 'food', 
        subCategories: [
            {
                title: 'Bánh sừng bò & Bánh Đan Mạch',
                items: [
                    { id: 'baked-apple-croissant', name: 'Bánh sừng bò táo nướng', img: '../assets/images/MaiThiYenNhi_241230810/baked_apple_croissant.jpg' },
                    { id: 'Ham_Swiss_Croissant', name: 'Bánh sừng bò thịt nguội & phô mai Thụy Sĩ', img: '../assets/images/MaiThiYenNhi_241230810/ham_swiss_croissant.jpg' },
                    { id: 'Butter_Croissant', name: 'Bánh sừng bò bơ', img: '../assets/images/MaiThiYenNhi_241230810/butter_croissant.jpg' },
                    { id: 'Chocolate_Croissant', name: 'Bánh sừng bò sô-cô-la', img: '../assets/images/MaiThiYenNhi_241230810/Chocolate_Croissant.jpg' }
                ]
            },
            {
                title: 'Bánh mì, Muffin & Bánh ngọt',
                items: [
                    { id: 'Pumpkin_Cream_Cheese_Muffin', name: 'Bánh muffin bí đỏ kem phô mai', img: '../assets/images/MaiThiYenNhi_241230810/pumpkin_cream_cheese_muffin.jpg' },
                    { id: 'Blueberry_Streusel_Muffin', name: 'Bánh muffin việt quất', img: '../assets/images/MaiThiYenNhi_241230810/blueberry_streusel_muffin.jpg' }
                ]
            },
             {
                title: 'Bánh vòng',
                items: [
                    { id: 'Plain_Bagel', name: 'Bánh vòng truyền thống', img: '../assets/images/MaiThiYenNhi_241230810/plain_bagel.jpg' },
                    { id: 'Everything_Bagel', name: 'Bánh vòng thập cẩm', img: '../assets/images/MaiThiYenNhi_241230810/Everything_Bagel.jpg' },
                    { id: 'Avocado_Spread', name: 'Sốt bơ nghiền', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' }
                ]
            }
        ]
    },

    'Snacks': { 
        pageTitle: 'Đồ ăn vặt',
        categoryName: 'Đồ ăn vặt',
        productType: 'food',
        categoryClass: 'food',
        subCategories: [
            {
                title: 'Oishi',
                items: [
                    { id: 'Oishi_Corn_Snack', name: 'Bắp Oishi', img: '../assets/images/MaiThiYenNhi_241230810/oishi_bap.jpg' },
                    { id: 'Oishi_Crab_Snack', name: 'Snack cua Oishi', img: '../assets/images/MaiThiYenNhi_241230810/oishi_cua.jpg' },
                ]
            },
            {
                title: 'Lays',
                items: [
                    { id: 'LaysKhoaiTâyVịGàCayPhôMaiHànQuốc', name: 'Khoai tây Lays vị Gà cay phô mai Hàn Quốc', img: '../assets/images/MaiThiYenNhi_241230810/lays_ga_cay_pho_mai_han_quoc.jpg' },
                ]
            }
        ]
    },

'Breakfast': {
    pageTitle: 'Bữa Sáng',
    categoryName: 'Bữa sáng',
    productType: 'food',
    categoryClass: 'food',
    subCategories: [
        {
            title: 'Bánh mì kẹp bữa sáng',
            items: [
                { id: 'egg_pesto_mozzarella_sandwich', name: 'Bánh mì trứng, pesto & mozzarella', img: '../assets/images/MaiThiYenNhi_241230810/Egg-Pesto_Mozzarella_Sandwich.jpg' },
                { id: 'Bacon_Gouda_Egg_Sandwich', name: 'Bánh mì thịt xông khói, phô mai gouda & trứng', img: '../assets/images/MaiThiYenNhi_241230810/Bacon-Gouda-Egg-Sandwich.jpg' },
                { id: 'Double_Smoked_Bacon_Cheddar_Egg_Sandwich', name: 'Bánh mì thịt xông khói hun khói kép, phô mai cheddar & trứng', img: '../assets/images/MaiThiYenNhi_241230810/Bacon_Cheddar_Egg_Sandwich.jpg' },
                { id: 'Sausage_Cheddar_Egg_Sandwich', name: 'Bánh mì xúc xích, phô mai cheddar & trứng', img: '../assets/images/MaiThiYenNhi_241230810/Sausage-Cheddar-Egg-Sandwich.jpg' },
                { id: 'Turkey_Bacon_Cheddar_Egg_White_Sandwich', name: 'Bánh mì thịt gà tây, phô mai cheddar & lòng trắng trứng', img: '../assets/images/MaiThiYenNhi_241230810/Turkey-Bacon-Cheddar-Egg-White-Sandwich.jpg' },
                { id: 'Impossible_Breakfast_Sandwich', name: 'Bánh mì bữa sáng Impossible', img: '../assets/images/MaiThiYenNhi_241230810/impossible_Breakfast_Sandwich.jpg' },
                { id: 'Avocado_Spread', name: 'Bơ nghiền Avocado', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' },
            ]
        },
        {
            title: 'Bánh cuộn bữa sáng',
            items: [
                { id: 'Bacon_Sausage_Egg_Wrap', name: 'Cuộn thịt xông khói, xúc xích & trứng', img: '../assets/images/MaiThiYenNhi_241230810/bacon_sausage_egg_wrap.jpg' },
                { id: 'Spinach_Feta_Egg_White_Wrap', name: 'Cuộn rau chân vịt, phô mai feta & lòng trắng trứng', img: '../assets/images/MaiThiYenNhi_241230810/spinach_feta_egg_white.jpg' },
                { id: 'Avocado_Spread', name: 'Bơ nghiền Avocado', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' }
            ]
        },
        {
            title: 'Món trứng & nướng',
            items: [
                { id: 'Bacon_Gruyère_Egg_Bites', name: 'Trứng nướng với thịt xông khói & phô mai Gruyère', img: '../assets/images/MaiThiYenNhi_241230810/bacon_gruyere_egg_bites.jpg' },
                { id: 'Egg_White_Roasted_Red_Pepper_Egg_Bites', name: 'Trứng nướng lòng trắng & ớt đỏ nướng', img: '../assets/images/MaiThiYenNhi_241230810/egg_white_and-red_pepper_egg_bites_product.jpg' },
                { id: 'Avocado_Spread', name: 'Bơ nghiền Avocado', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' }
            ]
        },
        {
            title: 'Món cổ điển bữa sáng khác',
            items: [
                { id: 'Rolled_Steel_Cut_Oatmeal', name: 'Yến mạch cán & yến mạch cắt thép', img: '../assets/images/MaiThiYenNhi_241230810/oatmeal.jpg' },
                { id: 'Ellenos_Muesli_Yogurt', name: 'Sữa chua Muesli Ellenos', img: '../assets/images/MaiThiYenNhi_241230810/EllenosMuesli.jpg' }
            ]
        }
    ]
        },
    'Lunch': {
    pageTitle: 'Bữa trưa',
    categoryName: 'Bữa trưa',
    productType: 'food',
    categoryClass: 'food',
    subCategories: [
        {
            title: 'Bánh sandwich bữa trưa',
            items: [
                { id: 'Crispy_Grilled_Cheese_on_Sourdough', name: 'Phô mai nướng giòn trên bánh Sourdough', img: '../assets/images/MaiThiYenNhi_241230810/crisp_grilled_cheese_on_sourdough.jpg' },
                { id: 'Ham_Swiss_on_Baguette', name: 'Bánh mì baguette với giăm bông & phô mai Thụy Sĩ', img: '../assets/images/MaiThiYenNhi_241230810/HamSwissOnBaguette.jpg' },
                { id: 'Tomato_Mozzarella_on_Focaccia', name: 'Cà chua & Mozzarella trên bánh Focaccia', img: '../assets/images/MaiThiYenNhi_241230810/tomato_mozzarella_on_focaccia.jpg' },
                { id: 'Avocado_Spread', name: 'Sốt bơ nghiền', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' },
            ]
        },
        {
            title: 'Bánh kẹp (Pockets)',
            items: [
                { id: 'Spicy_Falafel_Pocket', name: 'Bánh kẹp Falafel cay', img: '../assets/images/MaiThiYenNhi_241230810/spicy_falafel_pocket.jpg' },
                { id: 'Jalapeno_Chicken_Pocket', name: 'Bánh kẹp gà Jalapeño', img: '../assets/images/MaiThiYenNhi_241230810/jalapeno_chicken_pocket.jpg' },
                { id: 'Avocado_Spread', name: 'Sốt bVơ nghiền', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' }
            ]
        },
        {
            title: 'Hộp protein',
            items: [
                { id: 'Cheese_Trio_Protein_Box', name: 'Hộp protein ba loại phô mai', img: '../assets/images/MaiThiYenNhi_241230810/cheese_trio_protein_box.jpg' },
                { id: 'Cheese_Fruit_Protein_Box', name: 'Hộp protein phô mai & trái cây', img: '../assets/images/MaiThiYenNhi_241230810/Cheese-Fruit_Protein_Box.jpg' }
            ]
        }
    ]
    },
   'Treats': {
    pageTitle: 'Món ngọt',
    categoryName: 'Món ngọt',
    productType: 'food',
    categoryClass: 'food',
    subCategories: [
        {
            title: 'Bánh que (Cake Pops)',
            items: [
                { id: 'Strawberries_Cream_Cake_Pop', name: 'Bánh Cake Pop Dâu & Kem', img: '../assets/images/MaiThiYenNhi_241230810/strawberries_cream_cake_pop.jpg' },
                { id: 'Racoon_Cake_Pop', name: 'Bánh Cake Pop Gấu Trúc', img: '../assets/images/MaiThiYenNhi_241230810/racoon_cake_pop.jpg' },
                { id: 'Birthday_Cake_Pop', name: 'Bánh Cake Pop Sinh Nhật', img: '../assets/images/MaiThiYenNhi_241230810/birthday_cake_pop.jpg' },
                { id: 'Chocolate_Cake_Pop', name: 'Bánh Cake Pop Sô cô la', img: '../assets/images/MaiThiYenNhi_241230810/chocolate_cake_pop.jpg' },
            ]
        },
        {
            title: 'Bánh quy & Brownies',
            items: [
                { id: 'Cookie', name: 'Bánh quy', img: '../assets/images/MaiThiYenNhi_241230810/cookie.jpg' },
                { id: 'Brownie', name: 'Bánh Brownie', img: '../assets/images/MaiThiYenNhi_241230810/brownie.jpg' }
            ]
        }
    ]
    },
    'whole_bean': {
    pageTitle: 'Hạt Cà Phê Nguyên Chất (Whole Bean)',
    categoryName: 'Hạt cà phê nguyên chất',
    productType: 'food',
    categoryClass: 'at_home_coffee',
    subCategories: [
        {
            title: 'Rang Nhạt (Blonde Roast)',
            items: [
                { id: 'Sunsera_Blend', name: 'Coffee Since 2025® Sunsera Blend', img: '../assets/images/MaiThiYenNhi_241230810/Sunsera_Blend.jpg' },
                { id: 'Green_Apron_Blend', name: 'Coffee Since 2025® Green Apron Blend', img: '../assets/images/MaiThiYenNhi_241230810/Green_Apron_Blend.jpg' },
                { id: 'Blonde_Espresso_Roast', name: 'Coffee Since 2025® Blonde Espresso Roast', img: '../assets/images/MaiThiYenNhi_241230810/blonde_espresso_roast.jpg' },
            ]
        },
        {
            title: 'Rang Vừa (Medium Roast)',
            items: [
               
            ]
        },
        {
            title: 'Rang Đậm (Dark Roast)',
            items: [
            
            ]
        }
    ]
    },
    'VIA_Instant': {
    pageTitle: 'VIA® Pha Nhanh',
    categoryName: 'VIA® Cà phê hòa tan',
    productType: 'food',
    categoryClass: 'at_home_coffee',
    subCategories: [
        {
            title: 'Hương vị',
            items: [
                { id: 'Sweetened_Iced_Coffee', name: 'Coffee Since 2025 VIA® Pha nhanh Cà phê đá có đường', img: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Sweetened_Iced_Coffee.jpg' },
            ]
        },
        {
            title: 'Rang nhạt',
            items: [
                { id: 'Veranda_Blend®', name: 'Coffee Since 2025 VIA® Pha nhanh Veranda Blend®', img: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Blonde_Veranda_Blend.jpg' },
            ]
        },
        {
            title: 'Rang vừa',
            items: [
                { id: 'Pike_Place®_Roast', name: 'Coffee Since 2025 VIA® Pha nhanh Pike Place® Roast', img: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Pike_PLace_Roast.jpg' },
            ]
        },
        {
            title: 'Rang đậm',
            items: [
                { id: 'Italian_Roast', name: 'Coffee Since 2025 VIA® Pha nhanh Italian Roast', img: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Italian_Roast.jpg' },
                { id: 'Decaf_Italian_Roast', name: 'Coffee Since 2025 VIA® Pha nhanh Italian Roast Không Caffeine', img: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Decaf_Italian_Roast.jpg' },
            ]
        }
    ]
    },
    'shopping_bag': {
    pageTitle: 'Túi mua sắm',
    categoryName: 'Túi mua sắm',
    productType: 'food',
    categoryClass: 'at_home_coffee',
    subCategories: [
        {
            title: 'Túi mua sắm', 
            items: [
                { id: 'Fabric_Shopping_Bag', name: 'Túi vải mua sắm', img: '../assets/images/MaiThiYenNhi_241230810/fabric_shopping_bag.jpg' },
                { id: 'Papper_Shopping_Bag', name: 'Túi giấy mua sắm', img: '../assets/images/MaiThiYenNhi_241230810/papper_bag.jpg' },
            ]
        }
    ]
    },


    // ------- ĐỒ UỐNG --------
    'menucold': { 
        pageTitle: 'Cà phê lạnh',
        categoryName: 'Cà phê lạnh',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Cà phê Cold Brew',
                items: [
                    { id: 'cold-brew', name: 'Cà phê Cold Brew', img: '../assets/images/duong-241230692/Cold Brew.jpg' },
                    { id: 'Raspberry Cream Cold Brew', name: 'Raspberry Cream Cold Brew', img: '../assets/images/duong-241230692/Raspberry Cream Cold Brew.jpg' },
                    { id: 'Pumpkin Cream Cold Brew', name: 'Cold Brew kem bí đỏ', img: '../assets/images/duong-241230692/Pumpkin Cream Cold Brew.jpg' },
                    { id: 'Chocolate Cream Protein Cold Brew-brew', name: 'Chocolate Cream Protein Cold Brew', img: '../assets/images/duong-241230692/Chocolate Cream Protein Cold Brew.jpg' },
                    { id: 'Vanilla Sweet Cream Cold Brew', name: 'Vanilla Sweet Cream Cold Brew', img: '../assets/images/duong-241230692/Vanilla Sweet Cream Cold Brew.jpg' },
                    { id: 'Salted Caramel Cream Cold Brew', name: 'Salted Caramel Cream Cold Brew', img: '../assets/images/duong-241230692/Salted Caramel Cream Cold Brew.jpg' },
                    { id: 'Chocolate Cream Cold Brew', name: 'Chocolate Cream Cold Brew', img: '../assets/images/duong-241230692/Chocolate Cream Cold Brew.jpg' },
                    { id: 'Nondairy Vanilla Sweet Cream Cold Brew', name: 'Nondairy Vanilla Sweet Cream Cold Brew', img: '../assets/images/duong-241230692/Nondairy Vanilla Sweet Cream Cold Brew.jpg' },
                    { id: 'Nondairy Salted Caramel Cream Cold Brew', name: 'Nondairy Salted Caramel Cream Cold Brew', img: '../assets/images/duong-241230692/Nondairy Salted Caramel Cream Cold Brew.jpg' },
                    { id: 'Cold Brew with Nondairy Vanilla Sweet Cream Cold Foam', name: 'Cold Brew with Nondairy Vanilla Sweet Cream Cold Foam', img: '../assets/images/duong-241230692/Cold Brew with Nondairy Vanilla Sweet Cream Cold Foam.jpg' },
                    { id: 'Nondairy Chocolate Cream Cold Brew', name: 'Nondairy Chocolate Cream Cold Brew', img: '../assets/images/duong-241230692/Nondairy Chocolate Cream Cold Brew.jpg' },
                ]
            },
            {
                title: 'Nitro Cold Brew',
                items: [
                    { id: 'Nitro Cold Brew', name: 'Nitro Cold Brew', img: '../assets/images/duong-241230692/Nitro Cold Brew.jpg' },
                    { id: 'Vanilla Sweet Cream Nitro Cold Brew', name: 'Vanilla Sweet Cream Nitro Cold Brew', img: '../assets/images/duong-241230692/Vanilla Sweet Cream Nitro Cold Brew.jpg' },

                ]
            },
            {
                title: 'Iced Coffee',
                items: [
                    { id: 'Iced Coffee', name: 'Iced Coffee', img: '../assets/images/duong-241230692/Iced Coffee.jpg' },
                ]
            },
            {
                title: 'Iced Espresso',
                items: [
                    { id: 'Iced Espresso', name: 'Iced Espresso', img: '../assets/images/duong-241230692/Iced Espresso.jpg' },
                ]
            },
            {
                title: 'Iced Americano',
                items: [
                    { id: 'Iced Caffè Americano', name: 'Iced Caffè Americano', img: '../assets/images/duong-241230692/Iced Caffè Americano.jpg' },
                ]
            },
             {
                title: ' Iced Latte',
                items: [
                    { id: ' Iced Caffè Latte', name: 'Iced Caffè Latte', img: '../assets/images/duong-241230692/Iced Caffè Latte.jpg' },
                    { id: 'Iced Pumpkin Spice Latte', name: 'Iced Pumpkin Spice Latte', img: '../assets/images/duong-241230692/Iced Pumpkin Spice Latte.jpg' },
                    { id: 'Iced Pecan Crunch Oatmilk Latte', name: 'Iced Pecan Crunch Oatmilk Latte', img: '../assets/images/duong-241230692/Iced Pecan Crunch Oatmilk Latte.jpg' },
                    { id: 'Iced Vanilla Protein Latte', name: 'Iced Vanilla Protein Latte', img: '../assets/images/duong-241230692/Iced Vanilla Protein Latte.jpg' },
                    { id: 'Iced Sugar-Free Vanilla Protein Latte', name: 'Iced Sugar-Free Vanilla Protein Latte', img: '../assets/images/duong-241230692/Iced Sugar-Free Vanilla Protein Latte.jpg' },
                ]
            },
              {
                title: 'Iced Mocha',
                items: [
                    { id: 'Iced Caffè Mocha', name: 'Iced Caffè Mocha', img: '../assets/images/duong-241230692/Iced Caffè Mocha.jpg' },
                    { id: 'Iced White Chocolate Mocha', name: 'Iced White Chocolate Mocha', img: '../assets/images/duong-241230692/Iced White Chocolate Mocha.jpg' },
                ]
            },
            {
                title: 'Iced Macchiato',
                items: [
                    { id: 'Iced Espresso Macchiato', name: 'Iced Espresso Macchiato', img: '../assets/images/duong-241230692/Iced Espresso Macchiato.jpg' },
                    { id: 'Iced Caramel Macchiato', name: 'Iced Caramel Macchiato', img: '../assets/images/duong-241230692/Iced Caramel Macchiato.jpg' },
                ]
            },
             {
                title: 'Iced Flat White',
                items: [
                    { id: 'Iced Flat White', name: 'Iced Flat White', img: '../assets/images/duong-241230692/Iced Flat White.jpg' },
                ]
            },
        ]
    },
    'menuhot': {
        pageTitle: 'Cà phê nóng',
        categoryName: 'Cà phê nóng',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Cà Phê Pha',
                items: [
                    { id: 'Coffee Since 2025® Blonde Roast - Veranda Blend®', name: 'Coffee Since 2025® Blonde Roast - Veranda Blend®', img: '../assets/images/duong-241230692/Starbucks® Blonde Roast - Veranda Blend®.jpg' },
                    { id: 'Medium Roast - Pike Place® Roast', name: 'Medium Roast - Pike Place® Roast', img: '../assets/images/duong-241230692/Starbucks® Blonde Roast - Veranda Blend®.jpg' },
                    { id: 'Decaf Roast - Pike Place® Roast', name: 'Decaf Roast - Pike Place® Roast', img: '../assets/images/duong-241230692/Decaf Roast - Pike Place® Roast.jpg' },
                    { id: 'Caffè Misto', name: 'Caffè Misto', img: '../assets/images/duong-241230692/Caffè Misto.jpg' },
                ]
            },
            {
                title: 'Americano',
                items: [
                    { id: 'Caffè Americano', name: 'Caffè Americano', img: '../assets/images/duong-241230692/Caffè Americano.jpg' },
                ]
            },
            {
                title: 'Latte',
                items: [
                    { id: 'Caffè Latte', name: 'Caffè Latte', img: '../assets/images/duong-241230692/Caffè Latte.jpg' },
                    { id: 'Pumpkin Spice Latte', name: 'Pumpkin Spice Latte', img: '../assets/images/duong-241230692/Pumpkin Spice Latte.jpg' },
                    { id: 'Pecan Crunch Oatmilk Latte', name: 'Pecan Crunch Oatmilk Latte', img: '../assets/images/duong-241230692/Pecan Crunch Oatmilk Latte.jpg' },
                    { id: 'Vanilla Protein Latte', name: 'Vanilla Protein Latte', img: '../assets/images/duong-241230692/Vanilla Protein Latte.jpg' },
                    { id: 'Sugar-Free Vanilla Protein Latte', name: 'Sugar-Free Vanilla Protein Latte', img: '../assets/images/duong-241230692/Sugar-Free Vanilla Protein Latte.jpg' },
                    { id: 'Cinnamon Dolce Latte', name: 'Cinnamon Dolce Latte', img: '../assets/images/duong-241230692/Cinnamon Dolce Latte.jpg' },
                ]
            },
             {
                title: 'Mocha',
                items: [
                    { id: 'Caffè Mocha', name: 'Caffè Mocha', img: '../assets/images/duong-241230692/Caffè Mocha.jpg' },
                    { id: 'White Chocolate Mocha', name: 'White Chocolate Mocha', img: '../assets/images/duong-241230692/White Chocolate Mocha.jpg' },
                ]
            },
            {
                title: 'Macchiato',
                items: [
                    { id: 'Espresso Macchiato', name: 'Espresso Macchiato', img: '../assets/images/duong-241230692/Espresso Macchiato.jpg' },
                    { id: 'Caramel Macchiato', name: 'Caramel Macchiato', img: '../assets/images/duong-241230692/Caramel Macchiato.jpg' },
                ]
            },
             {
                title: 'Flat White',
                items: [
                    { id: 'Flat White', name: 'Flat White', img: '../assets/images/duong-241230692/Flat White.jpg' },
                ]
            },
            {
                title: 'Cortado',
                items: [
                    { id: 'Cortado', name: 'Cortado', img: '../assets/images/duong-241230692/Cortado.jpg' },
                    { id: 'Pecan Oatmilk Cortado', name: 'Pecan Oatmilk Cortado', img: '../assets/images/duong-241230692/Pecan Oatmilk Cortado.jpg' },
                    { id: 'Brown Sugar Oatmilk Cortado', name: 'Brown Sugar Oatmilk Cortado', img: '../assets/images/duong-241230692/Brown Sugar Oatmilk Cortado.jpg' },
                ]
            },
            {
                title: 'Espresso',
                items: [
                    { id: 'Espresso', name: 'Espresso', img: '../assets/images/duong-241230692/Espresso.jpg' },
                ]
            },
            {
                title: 'Coffee Traveler',
                items: [
                    { id: 'Coffee Traveler – Decaf Pike Place® Roast', name: 'Coffee Traveler – Decaf Pike Place® Roast', img: '../assets/images/duong-241230692/Coffee Traveler – Decaf Pike Place® Roast.jpg' },
                ]
            },
        ]
    },
     'menuhottea': { 
        pageTitle: 'Trà nóng ',
        categoryName: 'Trà nóng',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Tea Latte',
                items: [
                    { id: 'Chai Latte', name: 'Tea latte', img: '../assets/images/duong-241230692/Tea Latte.jpg' },
                    { id: 'Protein Matcha', name: 'Protein Matcha', img: '../assets/images/duong-241230692/Protein Matcha.jpg' },
                     { id: 'Matcha Latte', name: 'Matcha Latte', img: '../assets/images/duong-241230692/Matcha Latte.jpg' },
                      { id: 'London Fog Latte', name: 'London Fog Latte', img: '../assets/images/duong-241230692/London Fog Latte.jpg' },
                    
                ]
            },
            {
                title: 'Trà Brewed ',
                items: [
                    { id: 'Honey Citrus Mint Tea', name: 'Honey Citrus Mint Tea', img: '../assets/images/duong-241230692/Honey Citrus Mint Tea.jpg' },
                     { id: 'Royal English Breakfast Tea', name: 'Royal English Breakfast Tea', img: '../assets/images/duong-241230692/Royal English Breakfast Tea.jpg' },

                ]
            }
        ]
    },
    'menucoldtea': { 
        pageTitle: 'Trà lạnh ',
        categoryName: 'Trà lạnh',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: ' Iced Tea Latte',
                items: [
                    { id: 'Iced Chai Latte', name: 'Iced Tea latte', img: '../assets/images/duong-241230692/Iced Chai Latte.jpg' },
                     { id: 'Iced Matcha Latte', name: 'Iced Matcha Latte', img: '../assets/images/duong-241230692/Iced Matcha Latte.jpg' },
                    
                ]
            },
            {
                title: 'Trà lạnh ',
                items: [
                    { id: 'Iced Black Tea', name: 'Iced Black Tea', img: '../assets/images/duong-241230692/Iced Black Tea.jpg' },
                     { id: 'Iced Passion Tango® Tea', name: 'Iced Passion Tango® Tea', img: '../assets/images/duong-241230692/Iced Passion Tango® Tea.jpg' },

                ]
            },
             {
                title: 'Trà Frappuccino ',
                items: [
                    { id: 'Matcha Crème Frappuccino® Blended Beverage', name: 'Matcha Crème Frappuccino® Blended Beverage', img: '../assets/images/duong-241230692/Matcha Crème Frappuccino® Blended Beverage.jpg' },
                ]
            }
        ]
    },
     'refreshers': { 
        pageTitle: 'Nước trái cây tươi mát',
        categoryName: 'Nước trái cây tươi mát',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Nước chanh tươi mát',
                items: [
                    { id: 'Strawberry Açaí Lemonade Refresher', name: 'Strawberry Açaí Lemonade Refresher', img: '../assets/images/duong-241230692/Strawberry Açaí Lemonade Refresher.jpg' },
                    { id: 'Mango Dragonfruit Lemonade Refresher', name: 'Mango Dragonfruit Lemonade Refresher', img: '../assets/images/duong-241230692/Mango Dragonfruit Lemonade Refresher.jpg' },
                    
                ]
            },
            {
                title: 'Nước trái cây với sữa dừa',
                items: [
                    { id: 'Pink Drink', name: 'Pink Drink', img: '../assets/images/duong-241230692/Pink Drink.jpg' },
                    { id: 'Dragon Drink®', name: 'Dragon Drink®', img: '../assets/images/duong-241230692/Dragon Drink®.jpg' },

                ]
            }
        ]
    },
     'Frappuccino': { 
        pageTitle: 'Đồ uống đá xay Frappuccino®',
        categoryName: 'Đồ uống đá xay Frappuccino®',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Coffee Frappuccino®',
                items: [
                    { id: 'Caramel Ribbon Crunch Frappuccino® Blended Beverage', name: 'Caramel Ribbon Crunch Frappuccino® Blended Beverage', img: '../assets/images/duong-241230692/Caramel Ribbon Crunch Frappuccino® Blended Beverage.jpg' },
                    { id: 'Pumpkin Spice Frappuccino® Blended Beverage', name: 'Pumpkin Spice Frappuccino® Blended Beverage', img: '../assets/images/duong-241230692/Pumpkin Spice Frappuccino® Blended Beverage.jpg' },
                    
                ]
            },
            {
                title: 'Strato Frappuccino®',
                items: [
                    { id: 'Brown Sugar Strato™ Frappuccino® Blended Beverage', name: 'Brown Sugar Strato™ Frappuccino® Blended Beverage', img: '../assets/images/duong-241230692/Brown Sugar Strato™ Frappuccino® Blended Beverage.jpg' },
                    { id: 'Strawberry Matcha Strato™ Frappuccino® Blended Beverage', name: 'Strawberry Matcha Strato™ Frappuccino® Blended Beverage', img: '../assets/images/duong-241230692/Strawberry Matcha Strato™ Frappuccino® Blended Beverage.jpg' },

                ]
            }
        ]
    },
    'hot-chocolate': { 
        pageTitle: 'Sô-cô-la nóng, nước chanh & Khác',
        categoryName: 'Sô-cô-la nóng, nước chanh & Khác',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Sô cô la nóng',
                items: [
                    { id: 'Hot Chocolate', name: 'Hot Chocolate', img: '../assets/images/duong-241230692/Hot Chocolate.jpg' },                    
                ]
            },
           
        ]
    },
    'Bottled-Beverages': { 
        pageTitle: 'Đồ uống đóng chai',
        categoryName: 'Đồ uống đóng chai',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Nước & Có ga',
                items: [
                    { id: 'Ethos® Water', name: 'Ethos® Water', img: '../assets/images/duong-241230692/Ethos® Water.jpg' }, 
                     { id: 'Spindrift® Lemon Sparkling Water', name: 'Spindrift® Lemon Sparkling Water', img: '../assets/images/duong-241230692/Spindrift® Lemon Sparkling Water.jpg' },
                      { id: 'DASANI® Water', name: 'DASANI® Water', img: '../assets/images/duong-241230692/DASANI® Water.jpg' },                   
                ]
            },
           
        ]
    },
    // ... (Thêm data cho tất cả các mục khác)
};


/*
============================================================
  PHẦN 2: LOGIC TẢI SẢN PHẨM (Không cần sửa)
============================================================
*/

// Hàm này dùng để "vẽ" sản phẩm ra màn hình
function renderCategory(categoryKey) {
    const data = allCategoryData[categoryKey];

    // 1. Kiểm tra xem có data cho key này không
    if (!data) {
        console.warn(`Chưa có dữ liệu cho danh mục: ${categoryKey}`);
        document.getElementById('category-title').textContent = 'Sản phẩm đang được cập nhật';
        document.getElementById('breadcrumb-category-name').textContent = 'Chưa có';
        document.getElementById('dynamic-product-container').innerHTML = '<p>Nội dung cho mục này đang được chuẩn bị. Vui lòng quay lại sau.</p>';
        return;
    }

    // 2. Cập nhật Tiêu đề trang, Tiêu đề H2 và Breadcrumb
    document.title = data.pageTitle;
    document.getElementById('category-title').textContent = data.categoryName;
    document.getElementById('breadcrumb-category-name').textContent = data.categoryName;

    // 3. Lấy thẻ div container để chuẩn bị chèn HTML
    const container = document.getElementById('dynamic-product-container');
    container.innerHTML = ''; // XÓA SẠCH nội dung cũ

    // 4. Lặp qua từng danh mục con (subCategories) trong data
    data.subCategories.forEach(subCategory => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = `category ${data.categoryClass}`; 

        const titleH3 = document.createElement('h3');
        titleH3.textContent = subCategory.title;
        categoryDiv.appendChild(titleH3);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        // 5. Lặp qua từng sản phẩm (item) trong danh mục con
        subCategory.items.forEach(item => {
            const productPage = data.productType === 'food' ? 'product_food.html' : 'product_drinks.html';
            const itemLink = `${productPage}?id=${item.id}`;

            const itemHtml = `
                <a href="${itemLink}" class="item-link">
                    <div class="item">
                        <img src="${item.img}" alt="${item.name}">
                        <p>${item.name}</p>
                    </div>
                </a>
            `;
            itemsGrid.innerHTML += itemHtml;
        });

        categoryDiv.appendChild(itemsGrid);
        container.appendChild(categoryDiv);
    });
}

// Hàm này sẽ chạy khi trang được tải lần đầu
function initializeMenu() {
    const menuLinks = document.querySelectorAll('.menu-left .category-list a[data-category]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn trình duyệt tải trang mới

            const categoryKey = this.getAttribute('data-category');
            window.location.hash = categoryKey; // Cập nhật URL
            
            renderCategory(categoryKey);
        });
    });

    // Hàm kiểm tra URL khi tải trang
    function loadContentFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash && allCategoryData[hash]) {
            renderCategory(hash);
        } else {
            // Mặc định: Hiển thị nội dung của trang menu.html
            // (Bạn có thể copy-paste nội dung trang menu.html vào đây nếu muốn)
            document.getElementById('category-title').textContent = 'Thực đơn';
            document.getElementById('breadcrumb-category-name').textContent = 'Tất cả';
            document.getElementById('dynamic-product-container').innerHTML = `
                <h2>Chào mừng bạn!</h2>
                <p>Hãy chọn một danh mục từ menu bên trái để khám phá sản phẩm.</p>
                `;
        }
    }

    loadContentFromHash(); // Tải nội dung khi vào trang
    window.addEventListener('hashchange', loadContentFromHash); // Tải khi hash thay đổi
}

// Chạy code khi toàn bộ HTML đã tải xong
document.addEventListener('DOMContentLoaded', initializeMenu);