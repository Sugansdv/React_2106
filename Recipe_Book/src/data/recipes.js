const recipes = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    description: 'Creamy pasta with bacon and cheese.',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Bacon', 'Pepper'],
    steps: [
      'Boil pasta.',
      'Cook bacon.',
      'Mix eggs and cheese.',
      'Combine all and season.'
    ]
  },
  {
    id: '2',
    title: 'Vegetable Stir Fry',
    description: 'Quick and healthy veggies with soy sauce.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Garlic'],
    steps: [
      'Chop vegetables.',
      'Heat oil and sauté garlic.',
      'Add veggies and stir-fry.',
      'Add soy sauce and serve.'
    ]
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic soft and chewy cookies with chocolate chips.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    ingredients: ['Flour', 'Butter', 'Brown Sugar', 'Egg', 'Chocolate Chips', 'Vanilla', 'Baking Soda'],
    steps: [
      'Cream butter and sugars.',
      'Add egg and vanilla.',
      'Mix dry ingredients separately.',
      'Combine and fold in chocolate chips.',
      'Bake at 350°F for 10-12 minutes.'
    ]
  },
  {
    id: '4',
    title: 'Grilled Salmon',
    description: 'Perfectly grilled salmon with lemon and herbs.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    ingredients: ['Salmon Fillet', 'Lemon', 'Olive Oil', 'Garlic', 'Dill', 'Salt', 'Pepper'],
    steps: [
      'Marinate salmon with oil, lemon, and herbs.',
      'Preheat grill to medium-high.',
      'Grill salmon skin-side down for 4-5 minutes.',
      'Flip and cook for 3-4 more minutes.',
      'Serve with lemon wedges.'
    ]
  }
];

export default recipes;