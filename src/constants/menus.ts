import { IMenu } from "@interfaces/menu.interface";

export const KIDS: IMenu = {
  name: "Kids",
  dishes: [
    {
      name: "Chicken Fingers",
      price: 6.5,
      description: "Served with fries",
    },
    {
      name: "Chicken Nuggets",
      price: 6.5,
      description: "Served with fries",
    },
    {
      name: "Corn Dog",
      price: 6.5,
      description: "Served with fries",
    },
    {
      name: "Macaroni & Cheese",
      price: 6.5,
      description: "Served with steamed broccoli",
    },
  ],
};

export const DESSERT: IMenu = {
  name: "Desserts",
  dishes: [
    {
      name: "Green Tea Ice Cream",
      price: 3.95,
    },
    {
      name: "Mango with Sticky Rice",
      price: 6.95,
      description: "Seasonal",
    },
    {
      name: "Red Bean Ice Cream",
      price: 3.95,
    },
  ],
};

export const CHINESE_DINNERS: IMenu = {
  name: "Chinese Dinner Platters",
  description:
    "One person portion. Served with one Egg Roll, Steamed Rice or Fried Rice. Additional $1.00 for choice of Vegetable Soup, Egg Drop Soup, or Hot & Sour Soup.",
  dishes: [
    {
      name: "Beef Broccoli",
      price: 10.95,
    },
    {
      name: "Beef Vegetable",
      price: 10.95,
    },
    {
      name: "Cashew Nut Chicken",
      price: 9.95,
    },
    {
      name: "Cashew Nut Shrimp",
      price: 10.95,
    },
    {
      name: "Chicken Broccoli",
      price: 9.95,
    },
    {
      name: "Chicken Chow Mein",
      price: 9.95,
    },
    {
      name: "Chicken Vegetable",
      price: 9.95,
    },
    {
      name: "General Tso's Chicken",
      price: 10.95,
      spicy: true,
      description: "White meat: +$1.00",
    },
    {
      name: "Hunan Beef",
      price: 10.95,
      spicy: true,
    },
    {
      name: "Hunan Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Hunan Shrimp",
      price: 10.95,
      spicy: true,
    },
    {
      name: "Kung Pao Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Kung Pao Pork",
      price: 10.95,
      spicy: true,
    },
    {
      name: "Moo Goo Gai Pan",
      price: 9.95,
    },
    {
      name: "Pork Vegetable",
      price: 10.95,
    },
    {
      name: "Sesame Chicken",
      price: 10.95,
      description: "White meat: +$1.00",
    },
    {
      name: "Shrimp Vegetable",
      price: 10.95,
    },
    {
      name: "Sweet & Sour Chicken",
      price: 9.95,
    },
    {
      name: "Szechuan Beef",
      price: 10.95,
      spicy: true,
    },
    {
      name: "Szechuan Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Szechuan Pork",
      price: 10.95,
      spicy: true,
    },
    {
      name: "Szechuan Shrimp",
      price: 10.95,
      spicy: true,
    },
  ],
};

export const THAI_DINNERS: IMenu = {
  name: "Thai Dinner Platters",
  description:
    "One person portion. Served with one Egg Roll, Steamed Rice or Fried Rice. Additional $1.00 for choice of Vegetable Soup, Egg Drop Soup, or Hot & Sour Soup.",
  dishes: [
    {
      name: "Basil Beef",
      price: 11.5,
      spicy: true,
    },
    {
      name: "Basil Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Basil Shrimp",
      price: 11.5,
      spicy: true,
    },
    {
      name: "Ginger Beef",
      price: 11.5,
      spicy: true,
    },
    {
      name: "Ginger Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Ginger Shrimp",
      price: 11.5,
      spicy: true,
    },
    {
      name: "May Thai Delight Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Royal Beef",
      price: 11.5,
      spicy: true,
    },
    {
      name: "Royal Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Royal Shrimp",
      price: 11.5,
      spicy: true,
    },
    {
      name: "Thai Spicy Beef",
      price: 11.5,
      spicy: true,
    },
    {
      name: "Thai Spicy Chicken",
      price: 9.95,
      spicy: true,
    },
    {
      name: "Thai Spicy Shrimp",
      price: 11.5,
      spicy: true,
    },
  ],
};

export const VEGETARIAN: IMenu = {
  name: "Vegetarian",
  description: "Mock chicken (flour)",
  dishes: [
    {
      name: "Basil",
      price: 11.95,
      spicy: true,
    },
    {
      name: "Cashew Nut",
      price: 11.95,
    },
    {
      name: "Chow Mein",
      price: 11.95,
    },
    {
      name: "Ginger",
      price: 11.95,
      spicy: true,
    },
    {
      name: "Hunan",
      price: 11.95,
      spicy: true,
    },
    {
      name: "Kung Pao",
      price: 11.95,
      spicy: true,
    },
    {
      name: "Mix Vegetable",
      price: 11.95,
    },
    {
      name: "Szechuan",
      price: 11.95,
      spicy: true,
    },
    {
      name: "Thai Spicy",
      price: 11.95,
      spicy: true,
    },
  ],
};

export const CHINESE_SPECIALS: IMenu = {
  name: "Chinese Chef Specials",
  dishes: [
    {
      name: "Black Bean Asparagus",
      price: 14.95,
      description:
        "Shrimp or Beef. Fresh asparagus stir fried with mix vegetables in black bean sauce.",
    },
    {
      name: "Black Bean Asparagus",
      price: 13.95,
      description:
        "Chicken, Pork, Veggies or Tofu. Fresh asparagus stir fried with mix vegetables in black bean sauce.",
    },
    {
      name: "Black Bean Salmon Fish",
      price: 18.95,
      description: "Salmon fish sauteed with vegetables in black bean sauce.",
    },
    {
      name: "Coconut Shrimp",
      price: 15.95,
      description: "Shrimp sauteed in mayo coconut milk sauce.",
    },
    {
      name: "Crispy Shrimp",
      price: 15.95,
      description:
        "Deep fried battered shrimp and served with spicy tomato ketchup sauce.",
      spicy: true,
    },
    {
      name: "Dragon & Phoenix",
      price: 14.95,
      description:
        "Shrimps and mixed vegetables in whine sauce; general tso chicken.",
    },
    {
      name: "General Tso's Chicken",
      price: 12.95,
      description:
        "White meat: +$1.00. Fried battered chicken in red tangy sauce.",
      spicy: true,
    },
    {
      name: "Happy Family",
      price: 15.95,
      description:
        "Shrimp, scallop, crabmeat, chicken, beef and pork sauteed with mix vegetables in brown sauce.",
    },
    {
      name: "Hong Kong Chicken",
      price: 13.95,
      description:
        "Deep fried chicken breast with batter, mix vegetables in white sauce on bottom, served with gravy on the side.",
    },
    {
      name: "Orange Chicken",
      price: 12.95,
      description: "White meat: +$1.00. Orange flavored sauce chicken.",
      spicy: true,
    },
    {
      name: "Rock Salt Shrimp",
      price: 15.95,
      description:
        "Battered shrimp stir fried in garlic salt and pepper surrounded with steamed broccoli.",
      spicy: true,
    },
    {
      name: "Sesame Chicken",
      price: 12.95,
      description:
        "White meat: +$1.00. Battered chicken in special tangy sauce.",
    },
    {
      name: "Shrimp with Lobster Sauce",
      price: 15.95,
      description:
        "Shrimp with pea, carrot and water chestnut in creamy wine sauce.",
    },
    {
      name: "Sizzling Beef",
      price: 14.25,
      description:
        "Beef sauteed with onion, green pepper, carrot in chef's specials black pepper sauce.",
    },
    {
      name: "Sizzling Seafood",
      price: 17.95,
      description:
        "Scallop, shrimp, crab meat with vegetables in chef's specials brown sauce.",
    },
    {
      name: "Szechuan Scallops",
      price: 16.95,
      description: "Scallop with mix vegetables in Szechuan sauce.",
      spicy: true,
    },
    {
      name: "Teriyaki Chicken",
      price: 12.95,
      description:
        "Chicken (dark meat) stir fried with Teriyaki sauce, bottom lettuce surrounded by broccoli.",
    },
  ],
};

export const THAI_SPECIALS: IMenu = {
  name: "Thai Chef Specials",
  dishes: [
    {
      name: "Choo Chee Shrimp and Fish",
      price: 16.95,
      description:
        "Shrimp or fish in fragrant red curry sauce with green bean, carrots and bell pepper.",
      spicy: true,
    },
    {
      name: "Ginger Fish",
      price: 15.95,
      description:
        "Deep fried sole fish fillet stir fried with fresh ginger, bell pepper, carrot, mushroom, scallions and onions.",
      spicy: true,
    },
    {
      name: "Holy Basil Duck",
      price: 22.95,
      description:
        "Roasted duck top with holy basil leaves, onions, carrot mushroom, bell pepper and broccoli.",
      spicy: true,
    },
    {
      name: "May-Thai Shrimp",
      price: 15.95,
      description:
        "Jumbo shrimp stir fried in spicy coconut milk sauce, with onions, bell peppers and carrots.",
      spicy: true,
    },
    {
      name: "Philippine Beef",
      price: 13.95,
      description:
        "Beef stir fried in chef's special sauce with carrots, green bean and basil.",
      spicy: true,
    },
    {
      name: "Red Curry Salmon",
      price: 18.95,
      description:
        "Grilled salmon (12 oz) with Thai red curry, bottom with asparagus.",
      spicy: true,
    },
    {
      name: "Seafood Clay Pot",
      price: 18.95,
      description:
        "Combination of seafood with mix vegetable in chef's special sauce in hot clay pot.",
      spicy: true,
    },
    {
      name: "Seafood Mango Curry",
      price: 19.95,
      description:
        "Scallops, shrimp, crabmeat and mussels in mango yellow curry sauce.",
      spicy: true,
    },
    {
      name: "Spicy Eggplant",
      price: 14.95,
      description:
        "Your choice of beef or shrimp. Eggplant stir fried with red chili paste.",
      spicy: true,
    },
    {
      name: "Spicy Eggplant",
      price: 12.95,
      description:
        "Your choice of chicken, pork or tofu. Eggplant stir fried with red chili paste.",
      spicy: true,
    },
    {
      name: "Spicy Salmon",
      price: 18.95,
      description:
        "Grilled salmon (12 oz) top with spicy red chili sauce, chopped onion, bell pepper and basil.",
      spicy: true,
    },
    {
      name: "Sweet and Sour Fish",
      price: 15.95,
      description:
        "A well known popular dish, try it in Thai style, with cucumber, bell pepper, tomatoes, onions and pineapples.",
      spicy: true,
    },
    {
      name: "Thai Crispy Duck",
      price: 22.95,
      description:
        "Crispy duck breast bottom with lettuce surrounded by broccoli.",
      spicy: true,
    },
    {
      name: "Thai Garlic Pepper",
      price: 15.95,
      description:
        "Combination of beef, chicken and shrimp with mix vegetable in home style garlic pepper sauce.",
      spicy: true,
    },
    {
      name: "Three Flavor Shrimp",
      price: 16.95,
      description:
        "Battered sole fish or battered shrimp in spicy, sweet, sour sauce. It surrounded with broccoli and bottom with lettuce.",
      spicy: true,
    },
  ],
};

export const APPETIZERS: IMenu = {
  name: "Appetizers",
  dishes: [
    {
      name: "Balimaki",
      price: 8.95,
      description: "4 pieces",
    },
    {
      name: "Chicken Satay",
      price: 7.5,
      description: "4 pieces",
    },
    {
      name: "Crab Rangoon",
      price: 4.75,
      description: "6 pieces",
    },
    {
      name: "Dumplings",
      price: 6.95,
      description: "6 pieces",
    },
    {
      name: "Egg Roll",
      price: 1.8,
    },
    {
      name: "Fried Shrimp",
      price: 9.95,
      description: "8 pieces",
    },
    {
      name: "Golden Tofu",
      price: 5.25,
      description: "8 pieces",
    },
    {
      name: "Hot Spicy Wings",
      price: 7.5,
      description: "6 wings",
      spicy: true,
    },
    {
      name: "Po Po Platter",
      price: 12.95,
      description:
        "(Chicken Wing, Fried Shrimp, Crab Rangoon, Balimaki and Egg Roll)",
    },
    {
      name: "Sesame Cold Noodles",
      price: 5.95,
    },
    {
      name: "Spring Rolls",
      price: 4.0,
      description: "2 rolls",
    },
    {
      name: "Szechuan Honey Wings",
      price: 7.5,
      description: "6 wings",
    },
  ],
};

export const SOUPS: IMenu = {
  name: "Soups",
  dishes: [
    {
      name: "Coconut Soup with Chicken",
      price: 3.5,
      spicy: true,
    },
    {
      name: "Coconut Soup with Shrimp",
      price: 4.5,
      spicy: true,
    },
    {
      name: "Egg Drop Soup",
      price: 2.5,
    },
    {
      name: "Hot and Sour Soup",
      price: 2.5,
    },
    {
      name: "Tom Yam Soup with Chicken",
      price: 7.5,
      description: "Serves 2",
      spicy: true,
    },
    {
      name: "Tom Yam Soup with Shrimp",
      price: 7.5,
      description: "Serves 2",
      spicy: true,
    },
    {
      name: "Vegetable Soup",
      price: 2.5,
    },
    {
      name: "Wonton Soup",
      price: 2.95,
    },
  ],
};

export const SALADS: IMenu = {
  name: "Salads",
  dishes: [
    {
      name: "House Salad",
      price: 5.0,
      description:
        "Lettuce, cucumber, tomato, carrot and fried noodles in sesame dressing",
    },
    {
      name: "Mango Salad",
      price: 6.95,
      description:
        "Onion, green onions, cilantro and mango in spicy lime dressing",
      spicy: true,
    },
    {
      name: "Peanut Sauce Salad",
      price: 5.0,
      description:
        "Lettuce, tomato, onions, cucumber, carrot in Thai peanut sauce",
    },
    {
      name: "Thai Beef Salad",
      price: 8.95,
      description:
        "Tomato, lettuce, cilantro, peanut, onions and cucumber in chef special dressing",
      spicy: true,
    },
  ],
};

export const THAI_ENTREES: IMenu = {
  name: "Thai Entrees",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 11.25,
    },
    {
      name: "Shrimp or Beef",
      price: 13.95,
    },
    {
      name: "Combination",
      description: "Beef, chicken, and shrimp",
      price: 14.95,
    },
    {
      name: "Seafood",
      description: "Shrimp, crabmeat, scallop, and mussels",
      price: 17.95,
    },
  ],
  dishes: [
    {
      name: "Seven Elements",
      description:
        "Stir fried garlic, ginger, soy sauce, chili, basil, peanuts and lemongrass. Vegetables, include celery, baby corn, bell peppers and carrots.",
      spicy: true,
    },
    {
      name: "Orange Cashew Nut",
      description:
        "Stir fried with mixed vegetables and cashew nut in spicy orange sauce.",
      spicy: true,
    },
    {
      name: "May-Thai Delight",
      description: "Your choice of meat stir fried in light sauce.",
      spicy: true,
    },
    {
      name: "Thai Sweet and Sour",
      description:
        "A well known popular dish, try it Thai style, with cucumber, bell pepper, tomatoes, onions and pineapple.",
      spicy: true,
    },
    {
      name: "Spicy Green Bean",
      description:
        "Green bean and carrot stir fried in a spicy red chili paste.",
      spicy: true,
    },
    {
      name: "Thai Garlic",
      description:
        "Garlic lovers will enjoy this mouthful of your choice meat in rung of steam broccoli, stir fried with fresh garlic, cilantro, scallions and black pepper.",
      spicy: true,
    },
    {
      name: "Ginger",
      description:
        "Stir fried with fresh ginger, bell pepper, carrot, mushroom, scallions and onions.",
      spicy: true,
    },
    {
      name: "Basil",
      description:
        "Thai holy basil leaves are darker and the flavor is slightly bitter but more tastes than ordinary basil. This aromatic herb is stir fried along with green and red pepper, onion, broccoli and mushroom.",
      spicy: true,
    },
    {
      name: "Thai Spicy",
      description:
        "A deliciously spicy dish, stir fried with red chili paste along with broccoli, carrot, napa, cabbage, bamboo, mushroom and bell pepper.",
      spicy: true,
    },
    {
      name: "Royal",
      description:
        "A house favorite, stir fried in red chili sauce with celery, baby corn, tomato, bell pepper, carrot and cashews.",
      spicy: true,
    },
  ],
};

export const THAI_STIR_FRY: IMenu = {
  name: "Thai Stir Fry",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 11.25,
    },
    {
      name: "Shrimp or Beef",
      price: 13.95,
    },
    {
      name: "Combination",
      description: "Beef, chicken, and shrimp",
      price: 14.95,
    },
    {
      name: "Seafood",
      description: "Shrimp, crabmeat, scallop, and mussels",
      price: 17.95,
    },
  ],
  dishes: [
    {
      name: "Royal Noodles",
      description:
        "Egg noodles stir fried with egg, broccoli, onion, carrot in Thai red chili sauce.",
      spicy: true,
    },
    {
      name: "Racha Noodles",
      description:
        "Egg noodles with egg, onion, tomato and carrot stir fried in tomato sauce.",
      spicy: true,
    },
    {
      name: "Path See Ew",
      description:
        "Rice noodle with egg, carrots and broccoli stir fried in a dark soy sauce with black pepper.",
      spicy: true,
    },
    {
      name: "Path Khee Mao",
      description:
        "The rice stick noodles are stir fried with Thai basil, chili sauce, and broccoli, and onion, mushroom and sweet red pepper.",
      spicy: true,
    },
    {
      name: "May-Thai Noodles",
      description:
        "Rice noodles with egg, green onion, carrot, bean sprout, onion stir fried in spicy chef sauce.",
      spicy: true,
    },
    {
      name: "Pad Thai",
      description:
        "When one thinks of Thai cuisine, this may very well be the first dish that comes to mind. The thin rice stick noodles is stir fried in flavorful seasonings with egg, ground peanut, green onion and fresh bean sprout.",
      spicy: true,
    },
    {
      name: "May-Thai Fried Rice",
      description:
        "Fried rice prepared the traditional way, stir fried in tomato ketchup, soy sauce with egg, bean sprout, onion, pea and carrot, a wonderful complement to other main course dishes.",
      spicy: true,
    },
    {
      name: "Spicy Thai Fried Rice",
      description:
        "For those who like the hot, rice is stir fried with egg, chili sauce, Thai basil, onion, pea and carrot.",
      spicy: true,
    },
    {
      name: "Thai Pineapple Fried Rice",
      description:
        "A colorful Thai dish, everyone will enjoy it. Mild in flavor, rice stir fried with yellow curry powder, eggs scallions, pineapple, strips of sweet red pepper and cashew, garnished with fresh coriander.",
      spicy: true,
    },
  ],
};

export const CHINESE_ENTREES: IMenu = {
  name: "Chinese Entrees",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 11.25,
    },
    {
      name: "Shrimp or Beef",
      price: 13.95,
    },
  ],
  dishes: [
    {
      name: "Almond",
      description: "Mix vegetables in brown sauce and almond nut.",
    },
    {
      name: "Black Bean",
      description: "Mix vegetables with black bean sauce.",
      spicy: true,
    },
    {
      name: "Broccoli",
      description: "Broccoli and carrot stir fried in brown sauce.",
    },
    {
      name: "Cashew Nut",
      description:
        "Diced water chestnuts, celery, carrot and top with cashew nut in brown sauce.",
    },
    {
      name: "Chinese Garlic",
      description: "Mix vegetables in hot spicy garlic sauce.",
      spicy: true,
    },
    {
      name: "Chow Mein",
      description:
        "Napa, bean sprout, carrot, water chestnuts, bamboo shoot, onion, celery, mushroom, chicken and shrimp in white wine sauce, pork and beef in brown sauce.",
    },
    {
      name: "Curry",
      description:
        "Onion, green pepper, carrot, bamboo shoot in chef special curry sauce.",
      spicy: true,
    },
    {
      name: "Hunan",
      description:
        "Broccoli, mushroom, baby corn, carrot, green pepper stir fried in spicy chef red pepper sauce.",
      spicy: true,
    },
    {
      name: "Kung Pao",
      description:
        "Diced water chestnut,celery,carrot, red pepper in spicy brown sauce and top with peanut.",
      spicy: true,
    },
    {
      name: "Mongolian",
      description:
        "Shredded green onion white onion and bamboo shoot in chef Mongolian sauce.",
    },
    {
      name: "Moo Goo Gai Pan",
      description:
        "Mushroom, napa, carrot, water chestnut, bamboo shoot in white wine sauce.",
    },
    {
      name: "Onion Pepper",
      description:
        "Onion, green pepper, bamboo shoot stir fried in brown sauce.",
    },
    {
      name: "Sa Cha",
      description:
        "Broccoli, onion, carrot, mushroom,baby corn, green pepper in Chinese B.B.Q. sauce.",
      spicy: true,
    },
    {
      name: "Sweet and Sour (Chicken or Shrimp)",
      description:
        "Pineapple, green pepper, onion and carrot sauteed in sweet and sour sauce.",
    },
    {
      name: "Szechuan",
      description:
        "Broccoli, bamboo shoot, carrot, water chestnut, green pepper and celery stir fried with hot and spicy Szechuan sauce.",
      spicy: true,
    },
    {
      name: "Vegetable",
      description: "Mix vegetable stir fried in brown sauce.",
    },
  ],
};

export const CHINESE_NOODLES: IMenu = {
  name: "Chinese Noodles",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 10.75,
    },
    {
      name: "Shrimp or Beef",
      price: 11.75,
    },
    {
      name: "Combination",
      description: "Beef, chicken, Shrimp",
      price: 12.75,
    },
  ],
  dishes: [
    {
      name: "Ho Fun",
    },
    {
      name: "Hunan Noodles",
      spicy: true,
    },
    {
      name: "Indian Noodles",
      spicy: true,
    },
    {
      name: "Lo Mein",
    },
    {
      name: "Mai Fun",
    },
    {
      name: "Singapore Noodles",
      spicy: true,
    },
    {
      name: "Szechuan Noodles",
      spicy: true,
    },
  ],
};

export const FRIED_RICE: IMenu = {
  name: "Fried Rice",
  dishes: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 8.95,
    },
    {
      name: "Shrimp or Beef",
      price: 9.95,
    },
    {
      name: "Combination",
      description: "Beef, Chicken, Shrimp",
      price: 10.95,
    },
  ],
};

export const EGG_FOO_YOUNG: IMenu = {
  name: "Egg Foo Young",
  dishes: [
    {
      name: "Chicken, Pork, or Veggies",
      price: 11.95,
    },
    {
      name: "Shrimp or Beef",
      price: 13.95,
    },
    {
      name: "Combination",
      description: "Beef, Chicken, Shrimp",
      price: 15.95,
    },
  ],
};

export const THAI_LUNCH: IMenu = {
  name: "Thai Daily Lunch Specials",
  description:
    "Served 11:00am to 3:00pm. Served with Crab Rangoon, Fried Rice or Steamed Rice. Add $1.50 for egg roll. Noodle dishes do not come with rice",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 8.25,
    },
    {
      name: "Shrimp or Beef",
      price: 9.25,
    },
  ],
  dishes: [
    {
      name: "Basil",
      spicy: true,
    },
    {
      name: "Ginger",
      spicy: true,
    },
    {
      name: "May-Thai Delight",
      spicy: true,
    },
    {
      name: "Orange Cashew Nut",
      spicy: true,
    },
    {
      name: "Pad Thai",
      spicy: true,
    },
    {
      name: "Path Khee Mao",
      spicy: true,
    },
    {
      name: "Racha Noodles",
      spicy: true,
    },
    {
      name: "Royal",
      spicy: true,
    },
    {
      name: "Royal Noodles",
      spicy: true,
    },
    {
      name: "Spicy Fried Rice",
      spicy: true,
    },
    {
      name: "Thai Pineapple Fried Rice",
      spicy: true,
    },
    {
      name: "Thai Spicy",
      spicy: true,
    },
    {
      name: "Ginger Fish",
      spicy: true,
      price: 9.5,
    },
    {
      name: "Spicy Salmon",
      spicy: true,
      price: 11.95,
    },
    {
      name: "Sweet & Sour Fish",
      spicy: true,
      price: 9.5,
    },
  ],
};

export const CURRY_LUNCH: IMenu = {
  name: "Curry Daily Lunch Specials",
  description:
    "Served 11:00am to 3:00pm. Served with Crab Rangoon, Fried Rice or Steamed Rice. Add $1.50 for egg roll.",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 8.25,
    },
    {
      name: "Shrimp or Beef",
      price: 9.25,
    },
  ],
  dishes: [
    {
      name: "Panang Curry",
      spicy: true,
    },
    {
      name: "Yellow Curry",
      spicy: true,
    },
    {
      name: "Jungle Curry",
      spicy: true,
    },
    {
      name: "Masaman Curry",
      spicy: true,
    },
    {
      name: "Red Curry",
      spicy: true,
    },
  ],
};

export const CHINESE_LUNCH: IMenu = {
  name: "Chinese Daily Lunch Specials",
  description:
    "Served 11:00am to 3:00pm. Served with Crab Rangoon, Fried Rice or Steamed Rice. Add $1.50 for egg roll. Noodle dishes do not come with rice.",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 8.25,
    },
    {
      name: "Shrimp or Beef",
      price: 9.25,
    },
  ],
  dishes: [
    {
      name: "Indian Noodles",
      spicy: true,
    },
    {
      name: "Almond Nuts",
    },
    {
      name: "Cashew Nuts",
    },
    {
      name: "Rice Noodles (Mai Fun)",
    },
    {
      name: "Lo Mein",
    },
    {
      name: "Fried Rice",
    },
    {
      name: "Moo goo Gai Pan",
    },
    {
      name: "Mongolian",
    },
    {
      name: "Kung Pao",
      spicy: true,
    },
    {
      name: "Hunan",
      spicy: true,
    },
    {
      name: "Szechuan",
      spicy: true,
    },
    {
      name: "Vegetable",
    },
    {
      name: "General Tso's Chicken",
      description: "White meat: +$1.00",
    },
    {
      name: "Sesame Chicken",
      description: "White meat: +$1.00",
    },
  ],
};

export const CURRY: IMenu = {
  name: "Curry Dishes",
  proteins: [
    {
      name: "Chicken, Pork, Veggies, or Tofu",
      price: 11.95,
    },
    {
      name: "Shrimp of Beef",
      price: 13.95,
    },
    {
      name: "Combination",
      description: "Shrimp, beef, chicken",
      price: 15.95,
    },
    {
      name: "Seafood",
      description: "Shrimp, crabmeat, scallop, mussels",
      price: 17.95,
    },
  ],
  dishes: [
    {
      name: "Jungle Curry",
      description:
        "Green bean, carrots, onions, bell peppers and basil in coconut milk and red curry sauce.",
      spicy: true,
    },
    {
      name: "Masaman Curry",
      description: "Aromatic curry with potatoes, onions, carrots and peanuts.",
      spicy: true,
    },
    {
      name: "Panang Curry",
      description: "A curry of cardamom with lemongrass.",
      spicy: true,
    },
    {
      name: "Peanut Curry",
      description: "Onions and bell pepper in May-Thai peanut red curry sauce.",
      spicy: true,
    },
    {
      name: "Red Curry",
      description:
        "Flavored with garlic, shrimp paste and dried red chili in reddish-brown color. The vegetables include eggplant, carrot, bamboo shoot and bell pepper.",
      spicy: true,
    },
    {
      name: "Yellow Curry",
      description:
        "Flavored with lemongrass and turmeric with pineapples, baby corn and carrot.",
      spicy: true,
    },
  ],
};

interface IMenuGroup {
  name: string;
  menus: IMenu[];
}

export const MENU_GROUPS: IMenuGroup[] = [
  {
    name: "Lunch",
    menus: [THAI_LUNCH, CURRY_LUNCH, CHINESE_LUNCH],
  },
  {
    name: "Soups, Salads, & Appetizers",
    menus: [SOUPS, SALADS, APPETIZERS],
  },
  {
    name: "Curry",
    menus: [CURRY],
  },
  {
    name: "Thai",
    menus: [THAI_SPECIALS, THAI_DINNERS, THAI_ENTREES, THAI_STIR_FRY],
  },
  {
    name: "Chinese",
    menus: [
      CHINESE_SPECIALS,
      CHINESE_DINNERS,
      CHINESE_ENTREES,
      CHINESE_NOODLES,
      FRIED_RICE,
      EGG_FOO_YOUNG,
    ],
  },
  {
    name: "Vegetarian",
    menus: [VEGETARIAN],
  },
  {
    name: "Kids",
    menus: [KIDS],
  },
  {
    name: "Desserts",
    menus: [DESSERT],
  },
];
