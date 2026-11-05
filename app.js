// Meal Database containing 7 unique breakfasts, 7 lunches, and 7 dinners for each food preference.
const MEALS_DATABASE = {
    nonveg: {
        breakfast: [
            {
                name: "Scrambled Eggs with Avocado & Toast",
                baseCalories: 450,
                baseMacros: { protein: 25, carbs: 30, fats: 24 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Whole eggs", qty: 2, unit: "pcs" },
                    { name: "Egg whites", qty: 2, unit: "pcs" },
                    { name: "Whole wheat bread", qty: 2, unit: "slices" },
                    { name: "Avocado", qty: 0.5, unit: "medium" },
                    { name: "Butter", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Protein Oatmeal with Almonds & Berries",
                baseCalories: 400,
                baseMacros: { protein: 32, carbs: 48, fats: 9 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Rolled oats", qty: 0.75, unit: "cup" },
                    { name: "Whey protein powder", qty: 1, unit: "scoop" },
                    { name: "Unsweetened almond milk", qty: 1, unit: "cup" },
                    { name: "Mixed berries", qty: 0.5, unit: "cup" },
                    { name: "Almonds", qty: 10, unit: "pcs" }
                ]
            },
            {
                name: "Chicken Sausage & Veggie Omelet",
                baseCalories: 380,
                baseMacros: { protein: 30, carbs: 8, fats: 25 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Egg whites", qty: 4, unit: "pcs" },
                    { name: "Whole egg", qty: 1, unit: "pcs" },
                    { name: "Chicken sausage (sliced)", qty: 1.5, unit: "links" },
                    { name: "Spinach", qty: 1, unit: "cup" },
                    { name: "Olive oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Greek Yogurt Parfait",
                baseCalories: 360,
                baseMacros: { protein: 28, carbs: 38, fats: 10 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Greek yogurt (plain, low-fat)", qty: 1.5, unit: "cups" },
                    { name: "Granola", qty: 0.25, unit: "cup" },
                    { name: "Honey", qty: 1, unit: "tbsp" },
                    { name: "Blueberries", qty: 0.5, unit: "cup" },
                    { name: "Chia seeds", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Smoked Salmon & Cream Cheese Bagel",
                baseCalories: 430,
                baseMacros: { protein: 26, carbs: 46, fats: 14 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Whole wheat bagel (halved)", qty: 1, unit: "pc" },
                    { name: "Smoked salmon", qty: 80, unit: "g" },
                    { name: "Light cream cheese", qty: 2, unit: "tbsp" },
                    { name: "Cucumber slices & dill", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Protein Pancakes with Maple Syrup",
                baseCalories: 370,
                baseMacros: { protein: 30, carbs: 46, fats: 6 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Oat flour", qty: 0.5, unit: "cup" },
                    { name: "Egg whites", qty: 3, unit: "pcs" },
                    { name: "Protein powder", qty: 0.5, unit: "scoop" },
                    { name: "Banana (mashed)", qty: 0.5, unit: "pc" },
                    { name: "Sugar-free maple syrup", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Turkey Bacon & Spinach Frittata",
                baseCalories: 340,
                baseMacros: { protein: 28, carbs: 6, fats: 22 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Whole eggs", qty: 2, unit: "pcs" },
                    { name: "Egg whites", qty: 2, unit: "pcs" },
                    { name: "Turkey bacon", qty: 3, unit: "slices" },
                    { name: "Baby spinach", qty: 1, unit: "cup" },
                    { name: "Feta cheese", qty: 25, unit: "g" }
                ]
            }
        ],
        lunch: [
            {
                name: "Grilled Chicken Breast with Quinoa & Broccoli",
                baseCalories: 520,
                baseMacros: { protein: 45, carbs: 48, fats: 12 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Chicken breast", qty: 150, unit: "g" },
                    { name: "Quinoa (cooked)", qty: 1, unit: "cup" },
                    { name: "Steamed broccoli florets", qty: 1.5, unit: "cups" },
                    { name: "Olive oil", qty: 1, unit: "tsp" },
                    { name: "Fresh lemon juice", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Garlic Butter Shrimp with Rice & Asparagus",
                baseCalories: 480,
                baseMacros: { protein: 38, carbs: 45, fats: 15 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Peeled shrimp", qty: 150, unit: "g" },
                    { name: "Brown rice (cooked)", qty: 1, unit: "cup" },
                    { name: "Asparagus spears", qty: 8, unit: "pcs" },
                    { name: "Butter", qty: 1.5, unit: "tbsp" },
                    { name: "Minced garlic", qty: 2, unit: "cloves" }
                ]
            },
            {
                name: "Turkey & Swiss Cheese Salad Wrap",
                baseCalories: 450,
                baseMacros: { protein: 32, carbs: 36, fats: 18 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Deli turkey breast slice", qty: 120, unit: "g" },
                    { name: "Swiss cheese", qty: 1, unit: "slice" },
                    { name: "Whole wheat wrap", qty: 1, unit: "pc" },
                    { name: "Lettuce & tomato slices", qty: 1, unit: "serving" },
                    { name: "Light mayonnaise", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Tuna Salad Bowl with Lemon Dressing",
                baseCalories: 430,
                baseMacros: { protein: 36, carbs: 12, fats: 26 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Canned tuna in water", qty: 1, unit: "can" },
                    { name: "Mixed salad greens", qty: 2, unit: "cups" },
                    { name: "Cherry tomatoes", qty: 0.5, unit: "cup" },
                    { name: "Olive oil", qty: 1.5, unit: "tbsp" },
                    { name: "Hardboiled egg", qty: 1, unit: "pc" }
                ]
            },
            {
                name: "Beef & Broccoli Stir-Fry with Jasmine Rice",
                baseCalories: 540,
                baseMacros: { protein: 40, carbs: 50, fats: 18 },
                prepTime: "18 min",
                ingredients: [
                    { name: "Lean beef strips", qty: 140, unit: "g" },
                    { name: "Broccoli florets", qty: 1.5, unit: "cups" },
                    { name: "Jasmine rice (cooked)", qty: 1, unit: "cup" },
                    { name: "Soy sauce & ginger", qty: 1.5, unit: "tbsp" },
                    { name: "Sesame oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Baked Salmon with Sweet Potato Mash",
                baseCalories: 510,
                baseMacros: { protein: 36, carbs: 42, fats: 20 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Salmon fillet", qty: 140, unit: "g" },
                    { name: "Sweet potato (mashed)", qty: 1, unit: "medium" },
                    { name: "Green beans (steamed)", qty: 1, unit: "cup" },
                    { name: "Olive oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Chicken Caesar Salad Wrap",
                baseCalories: 490,
                baseMacros: { protein: 38, carbs: 32, fats: 22 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Grilled chicken strips", qty: 120, unit: "g" },
                    { name: "Romaine lettuce (shredded)", qty: 1, unit: "cup" },
                    { name: "Grated Parmesan cheese", qty: 2, unit: "tbsp" },
                    { name: "Caesar dressing", qty: 1.5, unit: "tbsp" },
                    { name: "Whole wheat tortilla", qty: 1, unit: "pc" }
                ]
            }
        ],
        dinner: [
            {
                name: "Baked Cod with Asparagus & Quinoa",
                baseCalories: 440,
                baseMacros: { protein: 36, carbs: 38, fats: 14 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Cod fillet", qty: 160, unit: "g" },
                    { name: "Asparagus", qty: 8, unit: "spears" },
                    { name: "Quinoa (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Olive oil", qty: 1, unit: "tbsp" },
                    { name: "Lemon slices", qty: 2, unit: "pcs" }
                ]
            },
            {
                name: "Chicken Stir-Fry with Bell Peppers & Zucchini",
                baseCalories: 460,
                baseMacros: { protein: 42, carbs: 24, fats: 18 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Chicken breast strips", qty: 150, unit: "g" },
                    { name: "Bell peppers & zucchini", qty: 2, unit: "cups" },
                    { name: "Olive oil", qty: 1.5, unit: "tbsp" },
                    { name: "Soy sauce & garlic", qty: 1, unit: "serving" },
                    { name: "Sesame seeds", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Lean Beef Burger Bowl",
                baseCalories: 500,
                baseMacros: { protein: 38, carbs: 12, fats: 32 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Lean ground beef (93/7)", qty: 150, unit: "g" },
                    { name: "Iceberg lettuce (chopped)", qty: 2, unit: "cups" },
                    { name: "Cheddar cheese (shredded)", qty: 0.25, unit: "cup" },
                    { name: "Cherry tomatoes & pickles", qty: 0.5, unit: "cup" },
                    { name: "Light burger sauce", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Grilled Pork Chop with Brussels Sprouts",
                baseCalories: 480,
                baseMacros: { protein: 36, carbs: 14, fats: 30 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Pork chop (lean, bone-in)", qty: 150, unit: "g" },
                    { name: "Brussels sprouts (halved)", qty: 1.5, unit: "cups" },
                    { name: "Olive oil", qty: 1.5, unit: "tbsp" },
                    { name: "Garlic powder & rosemary", qty: 1, unit: "pinch" }
                ]
            },
            {
                name: "Teriyaki Salmon with Steamed Bok Choy",
                baseCalories: 520,
                baseMacros: { protein: 38, carbs: 26, fats: 28 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Salmon fillet", qty: 140, unit: "g" },
                    { name: "Baby bok choy", qty: 2, unit: "heads" },
                    { name: "Teriyaki sauce", qty: 1.5, unit: "tbsp" },
                    { name: "Brown rice (cooked)", qty: 0.5, unit: "cup" }
                ]
            },
            {
                name: "Turkey Meatballs with Zucchini Noodles",
                baseCalories: 430,
                baseMacros: { protein: 35, carbs: 22, fats: 20 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Ground turkey meatballs", qty: 5, unit: "pcs" },
                    { name: "Marinara sauce", qty: 0.75, unit: "cup" },
                    { name: "Spiralized zucchini noodles", qty: 2, unit: "cups" },
                    { name: "Olive oil", qty: 1, unit: "tsp" },
                    { name: "Parmesan cheese", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Grilled Sirloin Steak with Cauliflower Mash",
                baseCalories: 540,
                baseMacros: { protein: 44, carbs: 12, fats: 34 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Sirloin steak", qty: 160, unit: "g" },
                    { name: "Cauliflower florets", qty: 2, unit: "cups" },
                    { name: "Butter", qty: 1.5, unit: "tbsp" },
                    { name: "Garlic & cream cheese", qty: 1, unit: "tbsp" }
                ]
            }
        ]
    },
    veg: {
        breakfast: [
            {
                name: "Spinach & Feta Egg White Omelet",
                baseCalories: 320,
                baseMacros: { protein: 24, carbs: 10, fats: 18 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Egg whites", qty: 5, unit: "pcs" },
                    { name: "Baby spinach", qty: 1.5, unit: "cups" },
                    { name: "Feta cheese", qty: 30, unit: "g" },
                    { name: "Whole wheat toast", qty: 1, unit: "slice" },
                    { name: "Olive oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Oatmeal with Almond Butter & Chia",
                baseCalories: 390,
                baseMacros: { protein: 12, carbs: 54, fats: 14 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Rolled oats", qty: 0.75, unit: "cup" },
                    { name: "Almond milk (unsweetened)", qty: 1, unit: "cup" },
                    { name: "Almond butter", qty: 1, unit: "tbsp" },
                    { name: "Chia seeds", qty: 1, unit: "tbsp" },
                    { name: "Banana slices", qty: 0.5, unit: "pc" }
                ]
            },
            {
                name: "Greek Yogurt Bowl with Mixed Seeds",
                baseCalories: 350,
                baseMacros: { protein: 26, carbs: 28, fats: 12 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Greek yogurt (low fat)", qty: 1.25, unit: "cups" },
                    { name: "Pumpkin seeds", qty: 1, unit: "tbsp" },
                    { name: "Flaxseeds", qty: 1, unit: "tsp" },
                    { name: "Honey", qty: 1, unit: "tbsp" },
                    { name: "Strawberries (sliced)", qty: 0.75, unit: "cup" }
                ]
            },
            {
                name: "Paneer Bhurji with Whole Wheat Roti",
                baseCalories: 430,
                baseMacros: { protein: 22, carbs: 36, fats: 21 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Low-fat Paneer (crumbled)", qty: 100, unit: "g" },
                    { name: "Onion & Tomato (diced)", qty: 0.5, unit: "cup" },
                    { name: "Whole wheat roti/tortilla", qty: 1, unit: "pc" },
                    { name: "Olive oil", qty: 1, unit: "tsp" },
                    { name: "Turmeric & green chili", qty: 1, unit: "pinch" }
                ]
            },
            {
                name: "Avocado Toast with Cherry Tomatoes",
                baseCalories: 330,
                baseMacros: { protein: 8, carbs: 32, fats: 18 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Sourdough bread", qty: 1.5, unit: "slices" },
                    { name: "Avocado", qty: 0.5, unit: "medium" },
                    { name: "Cherry tomatoes (halved)", qty: 0.5, unit: "cup" },
                    { name: "Hemp seeds", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Cottage Cheese & Fruit Salad",
                baseCalories: 310,
                baseMacros: { protein: 25, carbs: 26, fats: 8 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Cottage cheese (low fat)", qty: 1.25, unit: "cups" },
                    { name: "Pineapple chunks", qty: 0.5, unit: "cup" },
                    { name: "Blueberries", qty: 0.5, unit: "cup" },
                    { name: "Walnuts (chopped)", qty: 5, unit: "pcs" },
                    { name: "Honey", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Peanut Butter & Banana Smoothie Bowl",
                baseCalories: 410,
                baseMacros: { protein: 24, carbs: 48, fats: 13 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Banana (frozen)", qty: 1, unit: "pc" },
                    { name: "Peanut butter", qty: 1, unit: "tbsp" },
                    { name: "Soy milk", qty: 1, unit: "cup" },
                    { name: "Plant-based protein powder", qty: 0.5, unit: "scoop" },
                    { name: "Granola topping", qty: 2, unit: "tbsp" }
                ]
            }
        ],
        lunch: [
            {
                name: "Tofu & Vegetable Stir-Fry with Quinoa",
                baseCalories: 440,
                baseMacros: { protein: 24, carbs: 46, fats: 16 },
                prepTime: "18 min",
                ingredients: [
                    { name: "Firm Tofu (cubed)", qty: 150, unit: "g" },
                    { name: "Mixed bell peppers & broccoli", qty: 2, unit: "cups" },
                    { name: "Quinoa (cooked)", qty: 1, unit: "cup" },
                    { name: "Sesame oil", qty: 1, unit: "tbsp" },
                    { name: "Soy sauce", qty: 1.5, unit: "tbsp" }
                ]
            },
            {
                name: "Lentil Soup with Sourdough Bread",
                baseCalories: 420,
                baseMacros: { protein: 22, carbs: 58, fats: 8 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Brown lentils (cooked)", qty: 1.25, unit: "cups" },
                    { name: "Carrots, celery, & onions", qty: 1, unit: "cup" },
                    { name: "Tomato paste & broth", qty: 1, unit: "serving" },
                    { name: "Sourdough bread", qty: 1.5, unit: "slices" },
                    { name: "Olive oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Chickpea Salad with Feta & Cucumber",
                baseCalories: 450,
                baseMacros: { protein: 18, carbs: 42, fats: 22 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Canned chickpeas (drained)", qty: 1, unit: "cup" },
                    { name: "Cucumber & red onion (diced)", qty: 1, unit: "cup" },
                    { name: "Feta cheese (crumbled)", qty: 40, unit: "g" },
                    { name: "Olive oil", qty: 1.5, unit: "tbsp" },
                    { name: "Lemon juice", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Paneer Tikka Salad with Mint Yogurt",
                baseCalories: 490,
                baseMacros: { protein: 25, carbs: 16, fats: 34 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Paneer (cubed)", qty: 120, unit: "g" },
                    { name: "Bell peppers & red onions", qty: 1, unit: "cup" },
                    { name: "Mixed salad greens", qty: 2, unit: "cups" },
                    { name: "Greek yogurt", qty: 2, unit: "tbsp" },
                    { name: "Mint chutney", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Sweet Potato & Black Bean Bowl",
                baseCalories: 460,
                baseMacros: { protein: 16, carbs: 64, fats: 14 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Canned black beans (drained)", qty: 0.75, unit: "cup" },
                    { name: "Sweet potato (cubed & baked)", qty: 1, unit: "cup" },
                    { name: "Brown rice (cooked)", qty: 0.5, unit: "cup" },
                    { name: "Avocado slices", qty: 0.25, unit: "medium" },
                    { name: "Salsa", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Mediterranean Quinoa Salad",
                baseCalories: 430,
                baseMacros: { protein: 14, carbs: 48, fats: 19 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Quinoa (cooked)", qty: 1, unit: "cup" },
                    { name: "Kalamata olives", qty: 6, unit: "pcs" },
                    { name: "Cherry tomatoes & cucumber", qty: 1, unit: "cup" },
                    { name: "Feta cheese", qty: 25, unit: "g" },
                    { name: "Olive oil & oregano", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Caprese Sandwich with Pesto",
                baseCalories: 480,
                baseMacros: { protein: 19, carbs: 42, fats: 24 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Whole wheat ciabatta roll", qty: 1, unit: "pc" },
                    { name: "Fresh mozzarella cheese", qty: 50, unit: "g" },
                    { name: "Tomato slices", qty: 2, unit: "pcs" },
                    { name: "Basil pesto", qty: 1.5, unit: "tbsp" },
                    { name: "Balsamic glaze", qty: 1, unit: "tsp" }
                ]
            }
        ],
        dinner: [
            {
                name: "Roasted Cauliflower & Chickpea Curry",
                baseCalories: 460,
                baseMacros: { protein: 16, carbs: 58, fats: 16 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Chickpeas (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Cauliflower florets", qty: 1.5, unit: "cups" },
                    { name: "Coconut milk (light)", qty: 0.5, unit: "cup" },
                    { name: "Curry paste & spices", qty: 1, unit: "serving" },
                    { name: "Basmati rice (cooked)", qty: 0.75, unit: "cup" }
                ]
            },
            {
                name: "Vegetarian Chili with Cornbread",
                baseCalories: 490,
                baseMacros: { protein: 20, carbs: 64, fats: 14 },
                prepTime: "30 min",
                ingredients: [
                    { name: "Kidney & Black beans (cooked)", qty: 1, unit: "cup" },
                    { name: "Diced tomatoes & corn", qty: 1, unit: "cup" },
                    { name: "Chili seasonings", qty: 1, unit: "serving" },
                    { name: "Avocado garnish", qty: 0.25, unit: "medium" },
                    { name: "Cornbread slice", qty: 1, unit: "pc" }
                ]
            },
            {
                name: "Baked Tofu with Broccoli & Sweet Potatoes",
                baseCalories: 440,
                baseMacros: { protein: 22, carbs: 44, fats: 18 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Firm Tofu (sliced)", qty: 150, unit: "g" },
                    { name: "Broccoli florets", qty: 1.5, unit: "cups" },
                    { name: "Sweet potato wedges", qty: 1, unit: "cup" },
                    { name: "Olive oil", qty: 1.5, unit: "tbsp" },
                    { name: "Soy sauce & garlic powder", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Lentil Pasta with Marinara & Spinach",
                baseCalories: 470,
                baseMacros: { protein: 28, carbs: 54, fats: 12 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Red lentil pasta (dry)", qty: 70, unit: "g" },
                    { name: "Marinara sauce", qty: 0.75, unit: "cup" },
                    { name: "Spinach (wilted into sauce)", qty: 1.5, unit: "cups" },
                    { name: "Parmesan cheese", qty: 1.5, unit: "tbsp" },
                    { name: "Olive oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Palak Paneer with Basmati Rice",
                baseCalories: 520,
                baseMacros: { protein: 24, carbs: 42, fats: 26 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Paneer cubes", qty: 100, unit: "g" },
                    { name: "Spinach puree", qty: 1.5, unit: "cups" },
                    { name: "Garlic, onion, & cream", qty: 1, unit: "serving" },
                    { name: "Basmati rice (cooked)", qty: 1, unit: "cup" }
                ]
            },
            {
                name: "Stuffed Bell Peppers with Quinoa & Cheese",
                baseCalories: 430,
                baseMacros: { protein: 18, carbs: 46, fats: 18 },
                prepTime: "30 min",
                ingredients: [
                    { name: "Large bell peppers", qty: 2, unit: "pcs" },
                    { name: "Quinoa & black beans (cooked)", qty: 1, unit: "cup" },
                    { name: "Sweet corn", qty: 0.25, unit: "cup" },
                    { name: "Shredded mozzarella", qty: 0.25, unit: "cup" },
                    { name: "Salsa topping", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Vegetable Fried Rice with Edamame",
                baseCalories: 450,
                baseMacros: { protein: 18, carbs: 56, fats: 14 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Brown rice (cooked)", qty: 1, unit: "cup" },
                    { name: "Shelled edamame", qty: 0.75, unit: "cup" },
                    { name: "Peas & carrots (frozen)", qty: 0.5, unit: "cup" },
                    { name: "Egg (scrambled)", qty: 1, unit: "pc" },
                    { name: "Sesame oil & soy sauce", qty: 1, unit: "tbsp" }
                ]
            }
        ]
    },
    vegan: {
        breakfast: [
            {
                name: "Tofu Scramble with Spinach & Toast",
                baseCalories: 330,
                baseMacros: { protein: 22, carbs: 22, fats: 16 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Firm Tofu (mashed)", qty: 150, unit: "g" },
                    { name: "Spinach leaves", qty: 1.5, unit: "cups" },
                    { name: "Whole wheat toast", qty: 1.5, unit: "slices" },
                    { name: "Olive oil", qty: 1, unit: "tsp" },
                    { name: "Nutritional yeast & turmeric", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Oatmeal with Flaxseed & Walnuts",
                baseCalories: 380,
                baseMacros: { protein: 11, carbs: 50, fats: 14 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Rolled oats", qty: 0.75, unit: "cup" },
                    { name: "Water or Soy milk", qty: 1.25, unit: "cups" },
                    { name: "Ground flaxseeds", qty: 1.5, unit: "tbsp" },
                    { name: "Walnuts (chopped)", qty: 6, unit: "pcs" },
                    { name: "Maple syrup", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Peanut Butter & Banana Toast",
                baseCalories: 360,
                baseMacros: { protein: 10, carbs: 42, fats: 16 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Sourdough bread", qty: 1.5, unit: "slices" },
                    { name: "Creamy peanut butter", qty: 1.5, unit: "tbsp" },
                    { name: "Banana (sliced)", qty: 0.5, unit: "pc" },
                    { name: "Chia seeds", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Vegan Berry Protein Smoothie",
                baseCalories: 340,
                baseMacros: { protein: 28, carbs: 32, fats: 8 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Pea/Hemp protein powder", qty: 1, unit: "scoop" },
                    { name: "Soy milk (unsweetened)", qty: 1.25, unit: "cups" },
                    { name: "Mixed berries", qty: 1, unit: "cup" },
                    { name: "Baby spinach", qty: 1, unit: "cup" },
                    { name: "Almond butter", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Chia Seed Pudding with Coconut Milk",
                baseCalories: 320,
                baseMacros: { protein: 7, carbs: 36, fats: 16 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Chia seeds", qty: 3, unit: "tbsp" },
                    { name: "Light coconut milk", qty: 0.75, unit: "cup" },
                    { name: "Maple syrup", qty: 1.5, unit: "tbsp" },
                    { name: "Mango slices", qty: 0.5, unit: "cup" }
                ]
            },
            {
                name: "Avocado & Hummus Toast",
                baseCalories: 350,
                baseMacros: { protein: 9, carbs: 36, fats: 18 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Sourdough bread", qty: 1.5, unit: "slices" },
                    { name: "Hummus", qty: 3, unit: "tbsp" },
                    { name: "Avocado", qty: 0.5, unit: "pc" },
                    { name: "Red pepper flakes & seeds", qty: 1, unit: "pinch" }
                ]
            },
            {
                name: "Quinoa Fruit Bowl with Walnuts",
                baseCalories: 370,
                baseMacros: { protein: 10, carbs: 52, fats: 12 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Quinoa (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Almond milk (warm)", qty: 0.5, unit: "cup" },
                    { name: "Apple (diced)", qty: 0.5, unit: "pc" },
                    { name: "Cinnamon", qty: 0.25, unit: "tsp" },
                    { name: "Walnuts", qty: 6, unit: "pcs" }
                ]
            }
        ],
        lunch: [
            {
                name: "Chickpea Avocado Salad Wrap",
                baseCalories: 450,
                baseMacros: { protein: 15, carbs: 48, fats: 20 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Canned chickpeas (mashed)", qty: 0.75, unit: "cup" },
                    { name: "Avocado (mashed into chickpeas)", qty: 0.5, unit: "pc" },
                    { name: "Whole wheat wrap", qty: 1, unit: "pc" },
                    { name: "Lettuce & Tomato slices", qty: 1, unit: "serving" },
                    { name: "Lemon juice", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Lentil Vegetable Soup with Sourdough",
                baseCalories: 430,
                baseMacros: { protein: 20, carbs: 62, fats: 8 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Brown lentils (cooked)", qty: 1.25, unit: "cups" },
                    { name: "Celery, carrots, onions", qty: 1, unit: "cup" },
                    { name: "Sourdough bread", qty: 1.5, unit: "slices" },
                    { name: "Olive oil", qty: 1, unit: "tsp" },
                    { name: "Vegetable broth", qty: 1.5, unit: "cups" }
                ]
            },
            {
                name: "Sweet Potato & Black Bean Quinoa Bowl",
                baseCalories: 480,
                baseMacros: { protein: 15, carbs: 68, fats: 14 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Quinoa (cooked)", qty: 1, unit: "cup" },
                    { name: "Black beans (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Sweet potato (cubed & baked)", qty: 1, unit: "cup" },
                    { name: "Cilantro-lime dressing", qty: 1.5, unit: "tbsp" },
                    { name: "Pumpkin seeds", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Vegan Caesar Salad with Crispy Tempeh",
                baseCalories: 460,
                baseMacros: { protein: 26, carbs: 22, fats: 28 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Tempeh (sliced & pan-seared)", qty: 100, unit: "g" },
                    { name: "Romaine lettuce", qty: 2.5, unit: "cups" },
                    { name: "Vegan Caesar dressing (tahini-based)", qty: 2, unit: "tbsp" },
                    { name: "Nutritional yeast", qty: 1, unit: "tbsp" },
                    { name: "Whole wheat croutons", qty: 0.25, unit: "cup" }
                ]
            },
            {
                name: "Cucumber & Tomato Chickpea Salad",
                baseCalories: 410,
                baseMacros: { protein: 14, carbs: 42, fats: 18 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Chickpeas (drained)", qty: 1, unit: "cup" },
                    { name: "Cucumber & Cherry tomatoes", qty: 1.5, unit: "cups" },
                    { name: "Red onion (diced)", qty: 0.25, unit: "cup" },
                    { name: "Olive oil", qty: 1.25, unit: "tbsp" },
                    { name: "Lemon juice & parsley", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Spicy Edamame & Rice Salad",
                baseCalories: 440,
                baseMacros: { protein: 18, carbs: 54, fats: 15 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Shelled edamame (steamed)", qty: 0.75, unit: "cup" },
                    { name: "Brown rice (cooked)", qty: 1, unit: "cup" },
                    { name: "Red cabbage & shredded carrots", qty: 1, unit: "cup" },
                    { name: "Spicy peanut dressing", qty: 1.5, unit: "tbsp" }
                ]
            },
            {
                name: "Roasted Veggie & Hummus Salad",
                baseCalories: 420,
                baseMacros: { protein: 12, carbs: 36, fats: 24 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Hummus", qty: 4, unit: "tbsp" },
                    { name: "Roasted zucchini & bell pepper", qty: 1.5, unit: "cups" },
                    { name: "Mixed greens", qty: 2, unit: "cups" },
                    { name: "Olive oil dressing", qty: 1, unit: "tbsp" },
                    { name: "Sunflower seeds", qty: 1, unit: "tbsp" }
                ]
            }
        ],
        dinner: [
            {
                name: "Coconut Chickpea & Spinach Curry",
                baseCalories: 470,
                baseMacros: { protein: 15, carbs: 60, fats: 18 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Chickpeas (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Light coconut milk", qty: 0.5, unit: "cup" },
                    { name: "Baby spinach", qty: 2, unit: "cups" },
                    { name: "Curry paste & ginger", qty: 1, unit: "serving" },
                    { name: "Jasmine rice (cooked)", qty: 0.75, unit: "cup" }
                ]
            },
            {
                name: "Tempeh & Broccoli Stir-Fry",
                baseCalories: 490,
                baseMacros: { protein: 28, carbs: 32, fats: 22 },
                prepTime: "18 min",
                ingredients: [
                    { name: "Tempeh (cubed)", qty: 120, unit: "g" },
                    { name: "Broccoli florets", qty: 2, unit: "cups" },
                    { name: "Brown rice (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Soy-ginger glaze", qty: 1.5, unit: "tbsp" },
                    { name: "Sesame oil", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Lentil Shepherd's Pie",
                baseCalories: 450,
                baseMacros: { protein: 22, carbs: 62, fats: 10 },
                prepTime: "35 min",
                ingredients: [
                    { name: "Brown lentils (cooked)", qty: 1, unit: "cup" },
                    { name: "Peas, corn, & carrots", qty: 0.75, unit: "cup" },
                    { name: "Vegetable gravy", qty: 0.5, unit: "cup" },
                    { name: "Mashed potato topping", qty: 0.75, unit: "cup" }
                ]
            },
            {
                name: "Black Bean Burger with Sweet Potatoes",
                baseCalories: 480,
                baseMacros: { protein: 16, carbs: 66, fats: 15 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Vegan black bean patty", qty: 1, unit: "pc" },
                    { name: "Whole wheat bun", qty: 1, unit: "pc" },
                    { name: "Lettuce, tomato, onion", qty: 1, unit: "serving" },
                    { name: "Baked sweet potato fries", qty: 1, unit: "cup" }
                ]
            },
            {
                name: "Tofu & Asparagus stir-fry with Quinoa",
                baseCalories: 430,
                baseMacros: { protein: 22, carbs: 42, fats: 16 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Firm Tofu (cubed)", qty: 140, unit: "g" },
                    { name: "Asparagus spears (cut)", qty: 1, unit: "cup" },
                    { name: "Quinoa (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Sesame oil", qty: 1, unit: "tbsp" },
                    { name: "Garlic-chili sauce", qty: 1.5, unit: "tbsp" }
                ]
            },
            {
                name: "Vegan Three-Bean Chili",
                baseCalories: 460,
                baseMacros: { protein: 21, carbs: 64, fats: 10 },
                prepTime: "30 min",
                ingredients: [
                    { name: "Kidney, black, & pinto beans", qty: 1.25, unit: "cups" },
                    { name: "Crushed tomatoes & bell peppers", qty: 1, unit: "cup" },
                    { name: "Onion & spices", qty: 1, unit: "serving" },
                    { name: "Avocado cubes", qty: 0.25, unit: "medium" }
                ]
            },
            {
                name: "Cauliflower Steak with Tahini & Lentils",
                baseCalories: 420,
                baseMacros: { protein: 15, carbs: 36, fats: 22 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Cauliflower (thick slice)", qty: 1, unit: "steak" },
                    { name: "Brown lentils (cooked)", qty: 0.75, unit: "cup" },
                    { name: "Tahini paste", qty: 1.5, unit: "tbsp" },
                    { name: "Olive oil", qty: 1, unit: "tbsp" },
                    { name: "Lemon-garlic drizzle", qty: 1, unit: "tbsp" }
                ]
            }
        ]
    },
    keto: {
        breakfast: [
            {
                name: "Bacon & Cheddar 3-Egg Omelet",
                baseCalories: 480,
                baseMacros: { protein: 32, carbs: 3, fats: 38 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Whole eggs", qty: 3, unit: "pcs" },
                    { name: "Crispy bacon strips", qty: 3, unit: "slices" },
                    { name: "Cheddar cheese (shredded)", qty: 30, unit: "g" },
                    { name: "Butter", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Avocado & Fried Eggs with Spinach",
                baseCalories: 430,
                baseMacros: { protein: 18, carbs: 5, fats: 37 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Whole eggs", qty: 2, unit: "pcs" },
                    { name: "Avocado", qty: 1, unit: "medium" },
                    { name: "Baby spinach (sauteed)", qty: 1, unit: "cup" },
                    { name: "Olive oil", qty: 1, unit: "tbsp" },
                    { name: "Feta crumbles", qty: 15, unit: "g" }
                ]
            },
            {
                name: "Keto Bulletproof Coffee & Pork Sausage",
                baseCalories: 490,
                baseMacros: { protein: 18, carbs: 1, fats: 46 },
                prepTime: "6 min",
                ingredients: [
                    { name: "Pork sausage patties", qty: 2, unit: "pcs" },
                    { name: "Black coffee", qty: 1, unit: "cup" },
                    { name: "Grass-fed butter (blended in)", qty: 1, unit: "tbsp" },
                    { name: "MCT oil (blended in)", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Smoked Salmon & Cream Cheese Roll-ups",
                baseCalories: 380,
                baseMacros: { protein: 24, carbs: 4, fats: 30 },
                prepTime: "5 min",
                ingredients: [
                    { name: "Smoked salmon", qty: 100, unit: "g" },
                    { name: "Full-fat cream cheese", qty: 3, unit: "tbsp" },
                    { name: "Cucumber strips", qty: 0.5, unit: "cup" },
                    { name: "Olive oil drizzle", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Keto Almond Flour Pancakes",
                baseCalories: 420,
                baseMacros: { protein: 18, carbs: 6, fats: 36 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Almond flour", qty: 0.33, unit: "cup" },
                    { name: "Cream cheese", qty: 2, unit: "tbsp" },
                    { name: "Whole eggs", qty: 2, unit: "pcs" },
                    { name: "Butter (for cooking)", qty: 1, unit: "tbsp" },
                    { name: "Sugar-free maple syrup", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Scrambled Eggs with Heavy Cream & Chives",
                baseCalories: 410,
                baseMacros: { protein: 20, carbs: 2, fats: 36 },
                prepTime: "8 min",
                ingredients: [
                    { name: "Whole eggs", qty: 3, unit: "pcs" },
                    { name: "Heavy whipping cream", qty: 2, unit: "tbsp" },
                    { name: "Butter", qty: 1, unit: "tbsp" },
                    { name: "Cheddar cheese", qty: 20, unit: "g" },
                    { name: "Chives", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Ham & Egg Cups with Avocado",
                baseCalories: 390,
                baseMacros: { protein: 26, carbs: 4, fats: 30 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Deli ham slices (lined in muffin tin)", qty: 3, unit: "slices" },
                    { name: "Whole eggs (baked in ham)", qty: 3, unit: "pcs" },
                    { name: "Cheddar cheese (melted on top)", qty: 20, unit: "g" },
                    { name: "Avocado slices", qty: 0.5, unit: "medium" }
                ]
            }
        ],
        lunch: [
            {
                name: "Keto Cobb Salad",
                baseCalories: 560,
                baseMacros: { protein: 42, carbs: 5, fats: 42 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Grilled chicken breast", qty: 120, unit: "g" },
                    { name: "Crispy bacon bits", qty: 2, unit: "slices" },
                    { name: "Hardboiled egg", qty: 1, unit: "pc" },
                    { name: "Avocado", qty: 0.5, unit: "medium" },
                    { name: "Blue cheese & olive oil dressing", qty: 2.5, unit: "tbsp" },
                    { name: "Romaine lettuce", qty: 2, unit: "cups" }
                ]
            },
            {
                name: "Bacon-Wrapped Chicken & Asparagus",
                baseCalories: 510,
                baseMacros: { protein: 38, carbs: 4, fats: 38 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Chicken breast", qty: 130, unit: "g" },
                    { name: "Bacon strips (wrapped around chicken)", qty: 3, unit: "slices" },
                    { name: "Asparagus spears", qty: 8, unit: "pcs" },
                    { name: "Butter (melted over asparagus)", qty: 1.5, unit: "tbsp" }
                ]
            },
            {
                name: "Tuna Salad in Avocado Halves",
                baseCalories: 480,
                baseMacros: { protein: 28, carbs: 5, fats: 39 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Canned tuna in oil", qty: 1, unit: "can" },
                    { name: "Real mayonnaise", qty: 2.5, unit: "tbsp" },
                    { name: "Diced celery", qty: 2, unit: "tbsp" },
                    { name: "Avocado (halved, filled with salad)", qty: 1, unit: "medium" }
                ]
            },
            {
                name: "Steak Bites with Garlic Butter Broccoli",
                baseCalories: 580,
                baseMacros: { protein: 44, carbs: 5, fats: 44 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Beef sirloin cubes", qty: 150, unit: "g" },
                    { name: "Broccoli florets", qty: 1.5, unit: "cups" },
                    { name: "Butter (for cooking)", qty: 2, unit: "tbsp" },
                    { name: "Minced garlic", qty: 2, unit: "cloves" }
                ]
            },
            {
                name: "Keto Beef Lettuce Wraps",
                baseCalories: 520,
                baseMacros: { protein: 34, carbs: 5, fats: 40 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Ground beef (80/20 cooked with taco spice)", qty: 140, unit: "g" },
                    { name: "Shredded cheddar", qty: 30, unit: "g" },
                    { name: "Sour cream", qty: 2, unit: "tbsp" },
                    { name: "Iceberg lettuce leaves (used as wraps)", qty: 4, unit: "pcs" },
                    { name: "Diced tomatoes", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Salmon with Lemon Herb Butter",
                baseCalories: 540,
                baseMacros: { protein: 34, carbs: 3, fats: 44 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Salmon fillet", qty: 140, unit: "g" },
                    { name: "Lemon herb butter sauce", qty: 2, unit: "tbsp" },
                    { name: "Steamed asparagus", qty: 8, unit: "spears" },
                    { name: "Olive oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Chicken Caesar Salad (No Croutons)",
                baseCalories: 500,
                baseMacros: { protein: 38, carbs: 3, fats: 38 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Grilled chicken strips", qty: 130, unit: "g" },
                    { name: "Shredded bacon bits", qty: 2, unit: "tbsp" },
                    { name: "Parmesan cheese (shaved)", qty: 3, unit: "tbsp" },
                    { name: "Full fat Caesar dressing", qty: 2.5, unit: "tbsp" },
                    { name: "Romaine lettuce", qty: 2, unit: "cups" }
                ]
            }
        ],
        dinner: [
            {
                name: "Garlic Butter Shrimp with Zucchini Noodles",
                baseCalories: 460,
                baseMacros: { protein: 34, carbs: 5, fats: 33 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Shrimp", qty: 150, unit: "g" },
                    { name: "Spiralized zucchini", qty: 2, unit: "cups" },
                    { name: "Butter", qty: 2, unit: "tbsp" },
                    { name: "Grated Parmesan", qty: 2, unit: "tbsp" },
                    { name: "Heavy whipping cream", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Ribeye Steak with Roasted Brussels Sprouts",
                baseCalories: 640,
                baseMacros: { protein: 46, carbs: 6, fats: 48 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Ribeye steak", qty: 180, unit: "g" },
                    { name: "Brussels sprouts (halved)", qty: 1, unit: "cup" },
                    { name: "Butter (melted on steak)", qty: 1.5, unit: "tbsp" },
                    { name: "Olive oil (for Brussels sprouts)", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Keto Cauliflower Mac & Cheese",
                baseCalories: 510,
                baseMacros: { protein: 22, carbs: 7, fats: 44 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Cauliflower florets (cooked)", qty: 2, unit: "cups" },
                    { name: "Heavy cream", qty: 0.33, unit: "cup" },
                    { name: "Cheddar & cream cheese mix", qty: 60, unit: "g" },
                    { name: "Crumbled bacon pieces", qty: 2, unit: "slices" },
                    { name: "Butter", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Chicken Alfredo with Broccoli (No Pasta)",
                baseCalories: 540,
                baseMacros: { protein: 42, carbs: 6, fats: 38 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Chicken breast (sliced)", qty: 140, unit: "g" },
                    { name: "Broccoli florets", qty: 1.5, unit: "cups" },
                    { name: "Heavy cream", qty: 0.25, unit: "cup" },
                    { name: "Butter & Garlic", qty: 1.5, unit: "tbsp" },
                    { name: "Parmesan cheese", qty: 3, unit: "tbsp" }
                ]
            },
            {
                name: "Baked Pork Chops with Garlic Butter Zucchini",
                baseCalories: 520,
                baseMacros: { protein: 36, carbs: 4, fats: 40 },
                prepTime: "22 min",
                ingredients: [
                    { name: "Pork chop", qty: 160, unit: "g" },
                    { name: "Zucchini (sliced)", qty: 1.5, unit: "cups" },
                    { name: "Butter", qty: 2, unit: "tbsp" },
                    { name: "Garlic powder", qty: 0.5, unit: "tsp" }
                ]
            },
            {
                name: "Bunless Bacon Double Cheeseburger Bowl",
                baseCalories: 600,
                baseMacros: { protein: 44, carbs: 4, fats: 46 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Ground beef patties", qty: 2, unit: "pcs" },
                    { name: "Cheddar cheese slices", qty: 2, unit: "slices" },
                    { name: "Bacon strips", qty: 2, unit: "slices" },
                    { name: "Lettuce, pickle, & avocado", qty: 1, unit: "serving" },
                    { name: "Mayonnaise drizzle", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Baked Cod with Lemon-Garlic Herb Butter",
                baseCalories: 440,
                baseMacros: { protein: 34, carbs: 3, fats: 32 },
                prepTime: "18 min",
                ingredients: [
                    { name: "Cod fillet", qty: 160, unit: "g" },
                    { name: "Asparagus spears", qty: 8, unit: "pcs" },
                    { name: "Butter", qty: 2.5, unit: "tbsp" },
                    { name: "Garlic powder & parsley", qty: 1, unit: "pinch" }
                ]
            }
        ]
    },
    kerala: {
        breakfast: [
            {
                name: "Puttu with Kadala Curry",
                baseCalories: 400,
                baseMacros: { protein: 12, carbs: 68, fats: 8 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Rice flour (puttu podi)", qty: 0.75, unit: "cup" },
                    { name: "Grated coconut", qty: 2, unit: "tbsp" },
                    { name: "Black chickpeas (kadala)", qty: 0.5, unit: "cup" },
                    { name: "Onion, tomato & spices", qty: 1, unit: "serving" },
                    { name: "Coconut oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Appam with Egg Roast",
                baseCalories: 380,
                baseMacros: { protein: 16, carbs: 48, fats: 14 },
                prepTime: "15 min",
                ingredients: [
                    { name: "Appam (laced rice pancake)", qty: 2, unit: "pcs" },
                    { name: "Eggs (boiled)", qty: 2, unit: "pcs" },
                    { name: "Onion, tomato gravy base", qty: 1, unit: "serving" },
                    { name: "Coconut milk", qty: 2, unit: "tbsp" },
                    { name: "Coconut oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Idiyappam with Chicken Stew",
                baseCalories: 420,
                baseMacros: { protein: 24, carbs: 52, fats: 12 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Idiyappam (rice noodles)", qty: 3, unit: "pcs" },
                    { name: "Chicken breast (cubed)", qty: 100, unit: "g" },
                    { name: "Potato & carrot slices", qty: 0.5, unit: "cup" },
                    { name: "Coconut milk (light)", qty: 0.33, unit: "cup" },
                    { name: "Mild spices & ginger", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Idli with Sambar & Coconut Chutney",
                baseCalories: 350,
                baseMacros: { protein: 10, carbs: 62, fats: 6 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Idli (steamed rice cake)", qty: 3, unit: "pcs" },
                    { name: "Sambar (lentil veggie soup)", qty: 1, unit: "cup" },
                    { name: "Fresh coconut chutney", qty: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Malabar Pathiri with Chicken Curry",
                baseCalories: 430,
                baseMacros: { protein: 26, carbs: 54, fats: 12 },
                prepTime: "18 min",
                ingredients: [
                    { name: "Pathiri (thin rice pancake)", qty: 3, unit: "pcs" },
                    { name: "Chicken breast (curry style)", qty: 100, unit: "g" },
                    { name: "Curry gravy base", qty: 1, unit: "serving" },
                    { name: "Spices & coriander leaves", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Rava Uppumavu (Upma) with Egg Curry",
                baseCalories: 390,
                baseMacros: { protein: 16, carbs: 54, fats: 12 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Roasted semolina (rava)", qty: 0.5, unit: "cup" },
                    { name: "Onion & mustard seasoning", qty: 1, unit: "serving" },
                    { name: "Boiled egg", qty: 1, unit: "pc" },
                    { name: "Kerala egg roast gravy", qty: 0.5, unit: "cup" }
                ]
            },
            {
                name: "Dosa with Sambar & Red Chutney",
                baseCalories: 360,
                baseMacros: { protein: 9, carbs: 60, fats: 8 },
                prepTime: "10 min",
                ingredients: [
                    { name: "Dosa (crisp crepe)", qty: 2, unit: "pcs" },
                    { name: "Sambar (lentil veggie soup)", qty: 1, unit: "cup" },
                    { name: "Tomato & onion chutney", qty: 3, unit: "tbsp" },
                    { name: "Coconut oil", qty: 1, unit: "tsp" }
                ]
            }
        ],
        lunch: [
            {
                name: "Matta Rice with Fish Curry & Thoran",
                baseCalories: 500,
                baseMacros: { protein: 34, carbs: 62, fats: 12 },
                prepTime: "22 min",
                ingredients: [
                    { name: "Kerala Matta rice (cooked)", qty: 1.25, unit: "cups" },
                    { name: "Fish fillet (Kerala fish curry)", qty: 120, unit: "g" },
                    { name: "Cabbage thoran (coconut stir-fry)", qty: 1, unit: "cup" },
                    { name: "Shallots & fish curry spices", qty: 1, unit: "serving" },
                    { name: "Coconut oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Portion-Controlled Malabar Chicken Biryani",
                baseCalories: 540,
                baseMacros: { protein: 38, carbs: 68, fats: 12 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Jeerakasala rice (cooked)", qty: 1.25, unit: "cups" },
                    { name: "Chicken breast (cooked in masala)", qty: 130, unit: "g" },
                    { name: "Biryani masala & herbs", qty: 1, unit: "serving" },
                    { name: "Yogurt pachadi (raita)", qty: 0.5, unit: "cup" },
                    { name: "Ghee", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Matta Rice with Sambar, Avial & Egg Thoran",
                baseCalories: 490,
                baseMacros: { protein: 18, carbs: 66, fats: 17 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Kerala Matta rice (cooked)", qty: 1.25, unit: "cups" },
                    { name: "Sambar (lentil veggie soup)", qty: 1, unit: "cup" },
                    { name: "Avial (coconut & yogurt veggies)", qty: 0.75, unit: "cup" },
                    { name: "Egg (scrambled with coconut)", qty: 1, unit: "pc" }
                ]
            },
            {
                name: "Kappa (Tapioca) & Red Fish Curry",
                baseCalories: 520,
                baseMacros: { protein: 28, carbs: 74, fats: 12 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Boiled tapioca (Kappa)", qty: 1.5, unit: "cups" },
                    { name: "Spicy Red Fish Curry (Meen Mulakittathu)", qty: 120, unit: "g" },
                    { name: "Grated coconut (for Kappa)", qty: 2, unit: "tbsp" },
                    { name: "Curry leaves & spices", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Ghee Rice (Neychoru) with Chicken Curry & Beetroot Pachadi",
                baseCalories: 550,
                baseMacros: { protein: 32, carbs: 70, fats: 16 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Ghee rice (Neychoru)", qty: 1.25, unit: "cups" },
                    { name: "Kerala Chicken Curry", qty: 120, unit: "g" },
                    { name: "Beetroot & coconut yogurt pachadi", qty: 0.5, unit: "cup" },
                    { name: "Cashews & raisins", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Matta Rice with Beef Ularthiyathu & Moru Curry",
                baseCalories: 530,
                baseMacros: { protein: 36, carbs: 58, fats: 16 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Kerala Matta rice (cooked)", qty: 1, unit: "cup" },
                    { name: "Kerala Beef Fry (Ularthiyathu)", qty: 100, unit: "g" },
                    { name: "Tempered buttermilk (Moru curry)", qty: 1, unit: "cup" },
                    { name: "Coconut slices (thenga kothu)", qty: 1, unit: "tbsp" }
                ]
            },
            {
                name: "Matta Rice with Chicken Thoran & Parippu Curry",
                baseCalories: 510,
                baseMacros: { protein: 35, carbs: 64, fats: 12 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Kerala Matta rice (cooked)", qty: 1.25, unit: "cups" },
                    { name: "Chicken Thoran (shredded chicken with coconut)", qty: 100, unit: "g" },
                    { name: "Yellow lentil curry (Parippu)", qty: 0.75, unit: "cup" },
                    { name: "Kovakka Mezhukkupuratti (ivy gourd)", qty: 0.5, unit: "cup" }
                ]
            }
        ],
        dinner: [
            {
                name: "Wheat Puttu with Cherupayaru Curry",
                baseCalories: 430,
                baseMacros: { protein: 15, carbs: 72, fats: 9 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Wheat puttu", qty: 0.75, unit: "cup" },
                    { name: "Whole green gram curry (Cherupayaru)", qty: 0.75, unit: "cup" },
                    { name: "Grated coconut", qty: 1.5, unit: "tbsp" },
                    { name: "Roasted pappadam", qty: 1, unit: "pc" }
                ]
            },
            {
                name: "Wheat Parotta with Malabar Chicken Korma",
                baseCalories: 480,
                baseMacros: { protein: 28, carbs: 58, fats: 15 },
                prepTime: "22 min",
                ingredients: [
                    { name: "Wheat parotta", qty: 2, unit: "pcs" },
                    { name: "Chicken breast korma", qty: 100, unit: "g" },
                    { name: "Coconut milk", qty: 3, unit: "tbsp" },
                    { name: "Spices, mint & coriander", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Kerala Kanji with Payar & Thenga Chammanthi",
                baseCalories: 410,
                baseMacros: { protein: 11, carbs: 74, fats: 8 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Rice gruel (Kanji)", qty: 2, unit: "cups" },
                    { name: "Green gram stir-fry (Payar)", qty: 0.75, unit: "cup" },
                    { name: "Coconut chutney (Thenga Chammanthi)", qty: 2, unit: "tbsp" },
                    { name: "Roasted pappadam", qty: 1, unit: "pc" }
                ]
            },
            {
                name: "Chapati with Chicken Mappas",
                baseCalories: 450,
                baseMacros: { protein: 28, carbs: 54, fats: 14 },
                prepTime: "20 min",
                ingredients: [
                    { name: "Whole wheat chapati", qty: 2, unit: "pcs" },
                    { name: "Chicken breast in coconut milk (Mappas)", qty: 100, unit: "g" },
                    { name: "Onion & tomato gravy base", qty: 1, unit: "serving" },
                    { name: "Coconut oil", qty: 1, unit: "tsp" }
                ]
            },
            {
                name: "Kerala Oats Upma with Boiled Eggs",
                baseCalories: 420,
                baseMacros: { protein: 20, carbs: 46, fats: 18 },
                prepTime: "12 min",
                ingredients: [
                    { name: "Rolled oats (savory Kerala seasoning)", qty: 0.75, unit: "cup" },
                    { name: "Eggs (boiled)", qty: 2, unit: "pcs" },
                    { name: "Grated coconut", qty: 2, unit: "tbsp" },
                    { name: "Mustard seeds & curry leaves", qty: 1, unit: "pinch" }
                ]
            },
            {
                name: "Idiyappam with Kerala Fish Molee",
                baseCalories: 440,
                baseMacros: { protein: 26, carbs: 52, fats: 14 },
                prepTime: "22 min",
                ingredients: [
                    { name: "Idiyappam", qty: 3, unit: "pcs" },
                    { name: "Fish fillet (in ginger-coconut gravy)", qty: 100, unit: "g" },
                    { name: "Coconut milk", qty: 0.33, unit: "cup" },
                    { name: "Ginger & green chilies", qty: 1, unit: "serving" }
                ]
            },
            {
                name: "Kappa Erachichirthathu (Mashed Tapioca & Beef)",
                baseCalories: 470,
                baseMacros: { protein: 24, carbs: 62, fats: 14 },
                prepTime: "25 min",
                ingredients: [
                    { name: "Boiled tapioca (Kappa)", qty: 1, unit: "cup" },
                    { name: "Lean beef (mashed with tapioca)", qty: 80, unit: "g" },
                    { name: "Shallots, ginger & garlic", qty: 1, unit: "serving" },
                    { name: "Coconut oil & curry leaves", qty: 1.5, unit: "tsp" }
                ]
            }
        ]
    }
};

// Global App State
const state = {
    // Current Form Values
    gender: 'male',
    age: 28,
    weight: 80,
    weightUnit: 'kg', // kg or lbs
    height: 175,
    heightUnit: 'cm', // cm or in
    heightFt: 5,
    heightIn: 9,
    activity: 'sedentary',
    preference: 'nonveg',
    goalspeed: 'moderate',

    // Calculated Targets
    bmr: 0,
    tdee: 0,
    targetCalories: 0,
    deficit: 0,
    waterLiters: 0,
    waterGlasses: 0,
    
    // Macro breakdowns
    macros: {
        protein: { grams: 0, kcal: 0, pct: 30 },
        carbs: { grams: 0, kcal: 0, pct: 45 },
        fats: { grams: 0, kcal: 0, pct: 25 }
    },

    // Daily Meal Plan Output (scaled results for 7 days)
    weeklyPlan: [],
    currentSelectedDay: 0 // 0 (Mon) to 6 (Sun)
};

// DOM Elements
const elements = {
    formSection: document.getElementById('form-section'),
    resultsSection: document.getElementById('results-section'),
    form: document.getElementById('calculator-form'),
    btnGenerate: document.getElementById('btn-generate'),
    generateSpinner: document.getElementById('generate-spinner'),
    
    // Unit Toggles
    weightUnitToggle: document.getElementById('weight-unit-toggle'),
    weightUnitLabel: document.getElementById('weight-unit-label'),
    heightUnitToggle: document.getElementById('height-unit-toggle'),
    heightCmContainer: document.getElementById('height-cm-container'),
    heightFtContainer: document.getElementById('height-ft-container'),
    
    // Results Displays
    targetCalories: document.getElementById('target-calories'),
    tdeeDisplay: document.getElementById('tdee-display'),
    deficitDisplay: document.getElementById('deficit-display'),
    waterLiters: document.getElementById('water-liters'),
    waterGlasses: document.getElementById('water-glasses'),
    
    // Macros Displays
    macroProteinG: document.getElementById('macro-protein-g'),
    macroProteinKcal: document.getElementById('macro-protein-kcal'),
    macroProteinFill: document.getElementById('macro-protein-fill'),
    
    macroCarbsTitle: document.getElementById('macro-carbs-title'),
    macroCarbsG: document.getElementById('macro-carbs-g'),
    macroCarbsKcal: document.getElementById('macro-carbs-kcal'),
    macroCarbsFill: document.getElementById('macro-carbs-fill'),
    
    macroFatsTitle: document.getElementById('macro-fats-title'),
    macroFatsG: document.getElementById('macro-fats-g'),
    macroFatsKcal: document.getElementById('macro-fats-kcal'),
    macroFatsFill: document.getElementById('macro-fats-fill'),
    
    // Schedule Navigation & Output
    daysTabsList: document.getElementById('days-tabs-list'),
    mealsDayContainer: document.getElementById('meals-day-container'),
    btnPrint: document.getElementById('btn-print'),
    btnRestart: document.getElementById('btn-restart'),
    
    // Printable Injections
    printScheduleContainer: document.getElementById('print-schedule-container'),
    printMetaCalories: document.getElementById('print-meta-calories'),
    printMetaPreference: document.getElementById('print-meta-preference'),
    printMetaWater: document.getElementById('print-meta-water'),
    printMetaDeficit: document.getElementById('print-meta-deficit'),
    printMetaProtein: document.getElementById('print-meta-protein'),
    printMetaCarbs: document.getElementById('print-meta-carbs'),
    printMetaFats: document.getElementById('print-meta-fats'),
    printDaysList: document.getElementById('print-days-list')
};

// Initialize listeners on load
document.addEventListener('DOMContentLoaded', () => {
    initUnitToggles();
    initFormSubmit();
    initRestartButton();
    initDayTabs();
    initPrintButton();
});

// Setup Unit Switchers (kg/lbs and cm/feet-inches)
function initUnitToggles() {
    // Weight Unit toggle listener
    elements.weightUnitToggle.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('unit-toggle-option')) return;
        
        const unit = target.dataset.unit;
        if (state.weightUnit === unit) return;
        
        // Update active class on toggle options
        elements.weightUnitToggle.querySelectorAll('.unit-toggle-option').forEach(opt => {
            opt.classList.remove('active');
        });
        target.classList.add('active');
        
        // Convert weight input value
        const weightInput = document.getElementById('weight');
        const currentVal = parseFloat(weightInput.value);
        if (!isNaN(currentVal)) {
            if (unit === 'lbs') {
                weightInput.value = Math.round(currentVal * 2.20462);
                weightInput.min = "65";
                weightInput.max = "550";
            } else {
                weightInput.value = Math.round(currentVal / 2.20462);
                weightInput.min = "30";
                weightInput.max = "250";
            }
        }
        
        state.weightUnit = unit;
        elements.weightUnitLabel.innerText = unit;
    });

    // Height Unit toggle listener
    elements.heightUnitToggle.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('unit-toggle-option')) return;
        
        const unit = target.dataset.unit;
        if (state.heightUnit === unit) return;
        
        // Update active class
        elements.heightUnitToggle.querySelectorAll('.unit-toggle-option').forEach(opt => {
            opt.classList.remove('active');
        });
        target.classList.add('active');
        
        const heightInput = document.getElementById('height');
        
        if (unit === 'in') {
            // Switch to feet & inches
            elements.heightCmContainer.classList.add('hidden');
            elements.heightFtContainer.classList.remove('hidden');
            heightInput.removeAttribute('required');
            
            // Convert current cm value to ft/in
            const cmVal = parseFloat(heightInput.value);
            if (!isNaN(cmVal)) {
                const totalInches = cmVal / 2.54;
                const feet = Math.floor(totalInches / 12);
                const inches = Math.round(totalInches % 12);
                document.getElementById('height-ft').value = feet;
                document.getElementById('height-in').value = inches;
            }
        } else {
            // Switch back to cm
            elements.heightCmContainer.classList.remove('hidden');
            elements.heightFtContainer.classList.add('hidden');
            heightInput.setAttribute('required', 'true');
            
            // Convert ft/in value to cm
            const feet = parseFloat(document.getElementById('height-ft').value) || 0;
            const inches = parseFloat(document.getElementById('height-in').value) || 0;
            const totalInches = (feet * 12) + inches;
            heightInput.value = Math.round(totalInches * 2.54);
        }
        
        state.heightUnit = unit;
    });
}

// Day Tab Click Handler
function initDayTabs() {
    elements.daysTabsList.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('day-tab')) return;
        
        elements.daysTabsList.querySelectorAll('.day-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        target.classList.add('active');
        
        const dayIndex = parseInt(target.dataset.day);
        state.currentSelectedDay = dayIndex;
        renderMealsForSelectedDay();
    });
}

// Print Handler
function initPrintButton() {
    elements.btnPrint.addEventListener('click', () => {
        // Build the print schedule content
        generatePrintContent();
        // Trigger print menu
        window.print();
    });
}

// Restart Handler
function initRestartButton() {
    elements.btnRestart.addEventListener('click', () => {
        elements.resultsSection.classList.add('hidden');
        elements.formSection.classList.add('active');
        // Scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Handle Form Submission
function initFormSubmit() {
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        // Show spinner / loading feedback
        elements.btnGenerate.disabled = true;
        elements.generateSpinner.classList.remove('hidden');
        elements.btnGenerate.querySelector('span').innerText = 'Calculating Plan...';
        elements.btnGenerate.querySelector('.arrow-icon').classList.add('hidden');
        
        // Gather and process values
        setTimeout(() => {
            gatherFormValues();
            runCalculations();
            generateWeeklyDietPlan();
            
            // Switch views
            elements.formSection.classList.remove('active');
            elements.resultsSection.classList.remove('hidden');
            
            // Render results
            renderResultsUI();
            
            // Reset button state
            elements.btnGenerate.disabled = false;
            elements.generateSpinner.classList.add('hidden');
            elements.btnGenerate.querySelector('span').innerText = 'Generate Diet Plan';
            elements.btnGenerate.querySelector('.arrow-icon').classList.remove('hidden');
            
            // Scroll to start of results
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 600); // Small delay for nice transition feel
    });
}

// Basic form constraints validation
function validateForm() {
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    
    let isValid = true;
    
    if (ageInput.value === "" || parseInt(ageInput.value) < 15 || parseInt(ageInput.value) > 100) {
        alert("Please enter a valid age between 15 and 100.");
        ageInput.focus();
        isValid = false;
    }
    
    if (isValid && state.weightUnit === 'kg' && (weightInput.value === "" || parseFloat(weightInput.value) < 30 || parseFloat(weightInput.value) > 250)) {
        alert("Please enter a valid weight between 30kg and 250kg.");
        weightInput.focus();
        isValid = false;
    }
    
    if (isValid && state.weightUnit === 'lbs' && (weightInput.value === "" || parseFloat(weightInput.value) < 65 || parseFloat(weightInput.value) > 550)) {
        alert("Please enter a valid weight between 65 lbs and 550 lbs.");
        weightInput.focus();
        isValid = false;
    }
    
    if (isValid && state.heightUnit === 'cm' && (heightInput.value === "" || parseFloat(heightInput.value) < 100 || parseFloat(heightInput.value) > 250)) {
        alert("Please enter a valid height between 100cm and 250cm.");
        heightInput.focus();
        isValid = false;
    }
    
    return isValid;
}

// Gather all input details
function gatherFormValues() {
    state.gender = document.querySelector('input[name="gender"]:checked').value;
    state.age = parseInt(document.getElementById('age').value);
    state.activity = document.querySelector('input[name="activity"]:checked').value;
    state.preference = document.querySelector('input[name="preference"]:checked').value;
    state.goalspeed = document.querySelector('input[name="goalspeed"]:checked').value;
    
    // Extract weight and normalize to kg
    const inputWeight = parseFloat(document.getElementById('weight').value);
    state.weight = inputWeight;
    
    // Extract height and normalize to cm
    if (state.heightUnit === 'in') {
        state.heightFt = parseInt(document.getElementById('height-ft').value) || 0;
        state.heightIn = parseInt(document.getElementById('height-in').value) || 0;
    } else {
        state.height = parseFloat(document.getElementById('height').value);
    }
}

// Run calorie, water and macro equations
function runCalculations() {
    // 1. Normalize Weight to KG
    let weightKg = state.weight;
    if (state.weightUnit === 'lbs') {
        weightKg = state.weight * 0.453592;
    }
    
    // 2. Normalize Height to CM
    let heightCm = state.height;
    if (state.heightUnit === 'in') {
        const totalInches = (state.heightFt * 12) + state.heightIn;
        heightCm = totalInches * 2.54;
        state.height = Math.round(heightCm); // store converted value
    }
    
    // 3. Calculate BMR (Mifflin-St Jeor)
    let bmr = 0;
    if (state.gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * state.age) + 5;
    } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * state.age) - 161;
    }
    state.bmr = Math.round(bmr);
    
    // 4. Calculate TDEE using Activity Multiplier
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very: 1.725
    };
    const multiplier = activityMultipliers[state.activity] || 1.2;
    state.tdee = Math.round(bmr * multiplier);
    
    // 5. Calculate Deficit
    const deficitValues = {
        slow: 250,
        moderate: 500,
        fast: 750
    };
    const deficit = deficitValues[state.goalspeed] || 500;
    state.deficit = -deficit;
    
    // 6. Set Target Calories (with safety floor)
    let target = state.tdee - deficit;
    const safetyFloor = state.gender === 'male' ? 1500 : 1200;
    
    if (target < safetyFloor) {
        target = safetyFloor;
        // recalculate deficit based on floor
        state.deficit = target - state.tdee;
    }
    state.targetCalories = Math.round(target);
    
    // 7. Calculate Water Intake (ml)
    // Base: 35ml per kg
    let waterMl = weightKg * 35;
    // Activity adjustments
    const waterAdjustments = {
        sedentary: 0,
        light: 400,
        moderate: 800,
        very: 1200
    };
    waterMl += waterAdjustments[state.activity] || 0;
    
    state.waterLiters = parseFloat((waterMl / 1000).toFixed(1));
    state.waterGlasses = Math.round(waterMl / 250); // 250ml glass
    
    // 8. Calculate Macros splits
    if (state.preference === 'keto') {
        state.macros.protein.pct = 30;
        state.macros.carbs.pct = 10;
        state.macros.fats.pct = 60;
    } else {
        state.macros.protein.pct = 30;
        state.macros.carbs.pct = 45;
        state.macros.fats.pct = 25;
    }
    
    // Calculate grams & calories
    // Protein: 4 kcal/g
    state.macros.protein.kcal = Math.round(state.targetCalories * (state.macros.protein.pct / 100));
    state.macros.protein.grams = Math.round(state.macros.protein.kcal / 4);
    
    // Carbs: 4 kcal/g
    state.macros.carbs.kcal = Math.round(state.targetCalories * (state.macros.carbs.pct / 100));
    state.macros.carbs.grams = Math.round(state.macros.carbs.kcal / 4);
    
    // Fats: 9 kcal/g
    state.macros.fats.kcal = Math.round(state.targetCalories * (state.macros.fats.pct / 100));
    state.macros.fats.grams = Math.round(state.macros.fats.kcal / 9);
    
    // Double check calories sum matches (adjust carbs slightly if rounding difference)
    const sumKcal = state.macros.protein.kcal + state.macros.carbs.kcal + state.macros.fats.kcal;
    if (sumKcal !== state.targetCalories) {
        state.macros.carbs.kcal += (state.targetCalories - sumKcal);
        state.macros.carbs.grams = Math.round(state.macros.carbs.kcal / 4);
    }
}

// Generate the 7-day plan by scaling meal options
function generateWeeklyDietPlan() {
    const preference = state.preference;
    const mealPool = MEALS_DATABASE[preference];
    
    state.weeklyPlan = [];
    
    // Daily split ratios: Breakfast 30%, Lunch 35%, Dinner 35%
    const breakfastKcalTarget = state.targetCalories * 0.30;
    const lunchKcalTarget = state.targetCalories * 0.35;
    const dinnerKcalTarget = state.targetCalories * 0.35;
    
    const daysName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    for (let day = 0; day < 7; day++) {
        // Select meals based on day index (each day gets a unique meal from the 7 options)
        const rawBreakfast = mealPool.breakfast[day];
        const rawLunch = mealPool.lunch[day];
        const rawDinner = mealPool.dinner[day];
        
        // Scale and build meals
        const breakfast = scaleMeal(rawBreakfast, breakfastKcalTarget);
        const lunch = scaleMeal(rawLunch, lunchKcalTarget);
        const dinner = scaleMeal(rawDinner, dinnerKcalTarget);
        
        state.weeklyPlan.push({
            dayName: daysName[day],
            meals: {
                breakfast,
                lunch,
                dinner
            },
            totals: {
                calories: Math.round(breakfast.calories + lunch.calories + dinner.calories),
                protein: Math.round(breakfast.macros.protein + lunch.macros.protein + dinner.macros.protein),
                carbs: Math.round(breakfast.macros.carbs + lunch.macros.carbs + dinner.macros.carbs),
                fats: Math.round(breakfast.macros.fats + lunch.macros.fats + dinner.macros.fats)
            }
        });
    }
}

// Helper to scale single meal ingredients and macros
function scaleMeal(meal, targetCalories) {
    const scaleFactor = targetCalories / meal.baseCalories;
    
    // Scale ingredients
    const scaledIngredients = meal.ingredients.map(ing => {
        const scaledQty = parseFloat((ing.qty * scaleFactor).toFixed(1));
        
        // Format nicely (e.g. 1.0 -> 1)
        const displayQty = scaledQty % 1 === 0 ? Math.round(scaledQty) : scaledQty;
        
        return {
            name: ing.name,
            qty: displayQty,
            unit: ing.unit || ""
        };
    });
    
    // Scale macros
    const scaledMacros = {
        protein: Math.round(meal.baseMacros.protein * scaleFactor),
        carbs: Math.round(meal.baseMacros.carbs * scaleFactor),
        fats: Math.round(meal.baseMacros.fats * scaleFactor)
    };
    
    return {
        name: meal.name,
        calories: Math.round(targetCalories),
        macros: scaledMacros,
        prepTime: meal.prepTime,
        ingredients: scaledIngredients
    };
}

// Update the DOM display with calculated targets & details
function renderResultsUI() {
    elements.targetCalories.innerText = state.targetCalories.toLocaleString();
    elements.tdeeDisplay.innerText = state.tdee.toLocaleString();
    elements.deficitDisplay.innerText = state.deficit > 0 ? `+${state.deficit}` : state.deficit;
    elements.waterLiters.innerText = state.waterLiters;
    elements.waterGlasses.innerText = state.waterGlasses;
    
    // Render Macros
    elements.macroProteinG.innerText = state.macros.protein.grams;
    elements.macroProteinKcal.innerText = state.macros.protein.kcal;
    elements.macroProteinFill.style.width = `${state.macros.protein.pct}%`;
    
    const carbsTitleText = state.preference === 'keto' ? 'Net Carbs (10%)' : 'Carbohydrates (45%)';
    elements.macroCarbsTitle.innerText = carbsTitleText;
    elements.macroCarbsG.innerText = state.macros.carbs.grams;
    elements.macroCarbsKcal.innerText = state.macros.carbs.kcal;
    elements.macroCarbsFill.style.width = `${state.macros.carbs.pct}%`;
    
    elements.macroFatsTitle.innerText = `Fats (${state.macros.fats.pct}%)`;
    elements.macroFatsG.innerText = state.macros.fats.grams;
    elements.macroFatsKcal.innerText = state.macros.fats.kcal;
    elements.macroFatsFill.style.width = `${state.macros.fats.pct}%`;
    
    // Set Day Selector back to Monday (day 0) on fresh generation
    state.currentSelectedDay = 0;
    elements.daysTabsList.querySelectorAll('.day-tab').forEach((tab, index) => {
        if (index === 0) tab.classList.add('active');
        else tab.classList.remove('active');
    });
    
    // Render Mon Meals
    renderMealsForSelectedDay();
}

// Render meals for the active day tab
function renderMealsForSelectedDay() {
    const activeDayData = state.weeklyPlan[state.currentSelectedDay];
    if (!activeDayData) return;
    
    const meals = activeDayData.meals;
    const mealKeys = ['breakfast', 'lunch', 'dinner'];
    const mealIcons = { breakfast: '🍳', lunch: '🥗', dinner: '🥩' };
    
    let htmlContent = '';
    
    mealKeys.forEach(key => {
        const meal = meals[key];
        const icon = mealIcons[key];
        
        // Build ingredients HTML
        let ingredientsHTML = '';
        meal.ingredients.forEach(ing => {
            const unitText = ing.unit ? ` ${ing.unit}` : '';
            ingredientsHTML += `<li>• ${ing.qty}${unitText} ${ing.name}</li>`;
        });
        
        htmlContent += `
            <div class="meal-card">
                <div class="meal-type-badge">
                    <span class="meal-type-icon">${icon}</span>
                    <span class="meal-type-name">${key}</span>
                </div>
                <div class="meal-details-area">
                    <h4>${meal.name}</h4>
                    <div class="meal-meta-row">
                        <div class="meal-meta-item">
                            🔥 Calories: <strong>${meal.calories} kcal</strong>
                        </div>
                        <div class="meal-meta-item">
                            ⏱️ Prep: <strong>${meal.prepTime}</strong>
                        </div>
                        <div class="meal-meta-item">
                            🍗 P: <strong>${meal.macros.protein}g</strong>
                        </div>
                        <div class="meal-meta-item">
                            🥑 F: <strong>${meal.macros.fats}g</strong>
                        </div>
                        <div class="meal-meta-item">
                            🍞 C: <strong>${meal.macros.carbs}g</strong>
                        </div>
                    </div>
                    
                    <div class="meal-ingredients-box">
                        <h5>Scaled Ingredients</h5>
                        <ul class="ingredients-list">
                            ${ingredientsHTML}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    
    elements.mealsDayContainer.innerHTML = htmlContent;
}

// Generate printable summary view of all 7 days
function generatePrintContent() {
    // Set headers
    elements.printMetaCalories.innerText = state.targetCalories;
    
    const prefsMap = {
        nonveg: "Non-Vegetarian",
        veg: "Vegetarian",
        vegan: "Vegan",
        keto: "Keto / Low-Carb",
        kerala: "Kerala Style"
    };
    elements.printMetaPreference.innerText = prefsMap[state.preference] || state.preference;
    elements.printMetaWater.innerText = `${state.waterLiters} Liters (${state.waterGlasses} glasses)`;
    elements.printMetaDeficit.innerText = state.deficit;
    
    elements.printMetaProtein.innerText = `${state.macros.protein.grams}g`;
    elements.printMetaCarbs.innerText = `${state.macros.carbs.grams}g`;
    elements.printMetaFats.innerText = `${state.macros.fats.grams}g`;
    
    // Generate each day block
    let daysHtml = '';
    
    state.weeklyPlan.forEach(dayPlan => {
        let mealsHtml = '';
        const mealKeys = ['breakfast', 'lunch', 'dinner'];
        
        mealKeys.forEach(key => {
            const meal = dayPlan.meals[key];
            
            // Format ingredients list for print
            const ingredientsString = meal.ingredients.map(ing => {
                const unitStr = ing.unit ? ` ${ing.unit}` : '';
                return `${ing.qty}${unitStr} ${ing.name}`;
            }).join(', ');
            
            mealsHtml += `
                <div class="print-meal-item">
                    <div class="print-meal-label">${key}</div>
                    <div>
                        <div class="print-meal-name">${meal.name}</div>
                        <div class="print-meal-meta">
                            Calories: ${meal.calories} kcal | Protein: ${meal.macros.protein}g | Carbs: ${meal.macros.carbs}g | Fats: ${meal.macros.fats}g | Prep: ${meal.prepTime}
                        </div>
                        <div class="print-meal-ingredients">
                            <strong>Ingredients:</strong> ${ingredientsString}
                        </div>
                    </div>
                </div>
            `;
        });
        
        daysHtml += `
            <div class="print-day-block">
                <div class="print-day-title">${dayPlan.dayName}</div>
                <div class="print-meals-list">
                    ${mealsHtml}
                </div>
            </div>
        `;
    });
    
    elements.printDaysList.innerHTML = daysHtml;
}
