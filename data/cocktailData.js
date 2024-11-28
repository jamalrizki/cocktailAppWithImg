// cocktails.js

export const allCocktails = [
    {
      id: 0,
      name: "Aperol Spritz",
      spirit: "aperitif",
      image: require("../assets/images/1.jpg"),
      description: "This simple recipe, listed on the back of the Aperol bottle, is one of the most refreshing summer coolers."
    },
    {
      id: 1,
      name: "Aviation Cocktail",
      spirit: "gin",
      image: require("../assets/images/2.jpg"),
      description: "It’s thought that this azure-colored drink, created during the dawn of commercial aviation, may have been named after the ships that flew above the clouds."
    },
    {
      id: 2,
      name: "Caipirinha",
      spirit: "rum",
      image: require("../assets/images/3.jpg"),
      description: "According to cocktail historians Jared Brown and Anistatia Miller, 'Caipirinha' is a Brazilian word used to describe a 'country bumpkin.'"
    },
    {
      id: 3,
      name: "Cosmopolitan",
      spirit: "vodka",
      image: require("../assets/images/4.jpg"),
      description: "Dale DeGroff and Toby Cecchini are both credited with popularizing the Cosmo in Manhattan in the late 1980s. Gary Regan believes that Cheryl Cooke, of Miami, created this drink in 1985."
    },
    {
      id: 4,
      name: "Daiquiri",
      spirit: "rum",
      image: require("../assets/images/5.jpg"),
      description: "Charles H. Baker claims his friends Harry Stout and Jennings Cox created the Daiquiri in a village of the same name situated outside the Bacardi plant in Santiago de Cuba."
    },
    {
      id: 5,
      name: "French 75",
      spirit: "gin",
      image: require("../assets/images/6.jpg"),
      description: "Named after the French 75-millimeter gun, a revolutionary piece of artillery employed during World War I."
    },
    {
      id: 6,
      name: "Hemingway Daiquiri",
      spirit: "rum",
      image: require("../assets/images/7.jpg"),
      description: "Cuban Bar La Florida’s famous Daiquiri #3, served without the sugar for diabetic author and barfly Ernest Hemingway."
    },
    {
      id: 7,
      name: "Manhattan",
      spirit: "whiskey",
      image: require("../assets/images/8.jpg"),
      description: "Regardless of the cocktail’s exact origin, the popularity of Italian vermouth in the latter half of the 19th century made it inevitable that it would eventually end up in the Whiskey Cocktail."
    },
    {
      id: 8,
      name: "Margarita",
      spirit: "tequila",
      image: require("../assets/images/9.jpg"),
      description: "Margarita is Spanish for “daisy,” a style of sour originally sweetened with curaçao."
    },
    {
      id: 9,
      name: "Martini",
      spirit: "gin",
      image: require("../assets/images/10.jpg"),
      description: "Over the last hundred years, the preparation and choice of garnish of this protean cocktail has been one of the most accurate methods to measure the palate of an era."
    },
    {
      id: 10,
      name: "Mojito",
      spirit: "rum",
      image: require("../assets/images/11.jpg"),
      description: "The Mojito became popular again in 2002 after Pierce Brosnan (playing James Bond, of course) ordered one in Die Another Day."
    },
    {
      id: 11,
      name: "Moscow Mule",
      spirit: "vodka",
      image: require("../assets/images/12.jpg"),
      description: "The Moscow Mule was created by Jack Morgan of the Cock ‘n’ Bull restaurant in Los Angeles and John G. Martin of Heublein, the company that distributed Smirnoff."
    },
    {
      id: 12,
      name: "Negroni",
      spirit: "gin",
      image: require("../assets/images/13.jpg"),
      description: "The combination of gin, sweet vermouth, and Campari showed up as the Camparinette and the Campari Cardinal in French and Spanish cocktail books such as Cien Cocktails and L’Heure du Cocktail before being recognized universally as the Negroni."
    },
    {
      id: 13,
      name: "Old Fashioned",
      spirit: "whiskey",
      image: require("../assets/images/14.jpg"),
      description: "In 1806, the word cocktail was defined in the Balance and Columbian Repository newspaper as “a stimulating liquor, composed of spirits of any kind, sugar, water, and bitters—it is vulgarly called a bittered sling.…” By 1888, the cocktail as defined above was already old hat!"
    }
  ];
  
  export const featuredCocktails = [
    {
        id: 2,
        name: "Caipirinha",
        spirit: "rum",
        image: require("../assets/images/3.jpg"),
        description: "According to cocktail historians Jared Brown and Anistatia Miller, 'Caipirinha' is a Brazilian word used to describe a 'country bumpkin.'"
      },
      {
        id: 3,
        name: "Cosmopolitan",
        spirit: "vodka",
        image: require("../assets/images/4.jpg"),
        description: "Dale DeGroff and Toby Cecchini are both credited with popularizing the Cosmo in Manhattan in the late 1980s. Gary Regan believes that Cheryl Cooke, of Miami, created this drink in 1985."
      },
      {
        id: 4,
        name: "Daiquiri",
        spirit: "rum",
        image: require("../assets/images/5.jpg"),
        description: "Charles H. Baker claims his friends Harry Stout and Jennings Cox created the Daiquiri in a village of the same name situated outside the Bacardi plant in Santiago de Cuba."
      },
      {
        id: 5,
        name: "French 75",
        spirit: "gin",
        image: require("../assets/images/6.jpg"),
        description: "Named after the French 75-millimeter gun, a revolutionary piece of artillery employed during World War I."
      },
  ];

  export const ingredients = [
    {
      id: 0,
      cocktailId: 0,
      name: "Combine",
      description: "2 oz. Aperol \n1 oz. Prosecco \n1 oz. Club Soda \n0.5 oz Orange Juice"
    },
    {
      id: 1,
      cocktailId: 1,
      name: "Combine",
      description: "2 oz. Beefeater Gin \n0.75 oz. Lemon Juice \n0.5 oz. Luxardo Maraschino Liqueur \n0.25 oz Rothman and Winter Creme de Violette"
    },
    {
      id: 2,
      cocktailId: 2,
      name: "Muddle",
      description: "2 oz. Cachaca \n1/2 lime (quartered) \n2 cubes of Demerara sugar"
    },
    {
      id: 3,
      cocktailId: 3,
      name: "Combine",
      description: "2 oz. Vodka \n0.75 oz. Lime Juice \n0.75 oz. Cointreau \n0.5 oz. Cranberry Juice"
    },
    {
      id: 4,
      cocktailId: 4,
      name: "Shake",
      description: "2 oz. White Rum \n0.75 oz. Lime Juice \n0.75 oz. Simple Syrup"
    },
    {
      id: 5,
      cocktailId: 5,
      name: "Shake",
      description: "1 oz. Gin \n0.5 oz. Lemon Juice \n0.5 oz. Simple Syrup \nTop with Champagne"
    },
    {
      id: 6,
      cocktailId: 6,
      name: "Shake",
      description: "2 oz. White Rum \n0.75 oz. Lime Juice \n0.5 oz. Luxardo Maraschino Liqueur \n0.5 oz. Grapefruit Juice"
    },
    {
      id: 7,
      cocktailId: 7,
      name: "Stir",
      description: "2 oz. Rye Whiskey \n1 oz. Sweet Vermouth \n2 dashes Angostura Bitters"
    },
    {
      id: 8,
      cocktailId: 8,
      name: "Shake",
      description: "2 oz. Tequila \n0.75 oz. Lime Juice \n0.75 oz. Cointreau \n0.25 oz. Agave Syrup"
    },
    {
      id: 9,
      cocktailId: 9,
      name: "Stir",
      description: "3 oz. Gin \n1 oz. Dry Vermouth"
    },
    {
      id: 10,
      cocktailId: 10,
      name: "Muddle",
      description: "8 Mint Leaves \n1 oz. Simple Syrup \n2 oz. White Rum \n0.75 oz. Lime Juice"
    }
  ];
  
  export const barTools = [
    {
      id: 0,
      name: "Dry Shake",
      image: require("../assets/images/tools1.jpg"),
      description: "To shake without ice. Used mostly to emulsify egg whites."
    },
    {
      id: 1,
      name: "Hawthorn Strainer",
      image: require("../assets/images/tools2.jpg"),
      description: "Shake n Strain."
    },
    {
      id: 2,
      name: "Muddling",
      image: require("../assets/images/tools3.jpg"),
      description: "Enhance the flavor by Muddling."
    },
    {
      id: 3,
      name: "Stirring",
      image: require("../assets/images/tools4.jpg"),
      description: "Slightly More Difficult Than it Sounds."
    },
    {
      id: 4,
      name: "Twists",
      image: require("../assets/images/tools5.jpg"),
      description: "Citrus Twisting The Night Away."
    },
    {
      id: 5,
      name: "Bitters",
      image: require("../assets/images/tools6.jpg"),
      description: "A Spoonful Of Bitters Is Probably Too Much."
    }
  ];
  
  export const toolDetails = [
    {
      id: 0,
      name: "Dry Shake",
      image: require("../assets/images/tools1.jpg"),
      description: "To dry shake, add all ingredients, including egg white. After this, add ice and continue as normal."
    },
    {
      id: 1,
      name: "Hawthorn Strainer",
      image: require("../assets/images/tools2.jpg"),
      description: "Place over the Boston shaker and press down. The spring allows for only fine particles to pass through."
    },
    {
      id: 2,
      name: "Muddling",
      image: require("../assets/images/tools3.jpg"),
      description: "Herbs should be cleaned and sorted before muddling. Use good-looking leaves for garnish and less appealing ones for muddling."
    }
  ];
  
  export const cocktailIngredients = [
    {
      id: 0,
      name: "Aperol Spritz Ingredients",
      description: "2 oz. Aperol \n1 oz. Prosecco \n1 oz. Club Soda \n0.5 oz Orange Juice."
    },
    {
      id: 1,
      name: "Aviation Cocktail Ingredients",
      description: "2 oz. Beefeater Gin \n0.75 oz. Lemon Juice \n0.5 oz. Luxardo Maraschino Liqueur \n0.25 oz Rothman and Winter Creme de Violette."
    },
    {
      id: 2,
      name: "Caipirinha Ingredients",
      description: "2 oz. Cachaca \nHalf Lime, quartered \n2 Cubes of Demerara Sugar."
    }
  ];
  
  export const cocktailInstructions = [
    {
      id: 0,
      name: "Aperol Spritz Instructions",
      description: "Add everything to a chilled rocks glass, then fill with ice. Stir and garnish with half an orange wheel."
    },
    {
      id: 1,
      name: "Aviation Cocktail Instructions",
      description: "Shake with ice and strain into a chilled coupe."
    },
    {
      id: 2,
      name: "Caipirinha Instructions",
      description: "Muddle the lime and sugar. Add the cachaça, then shake with ice and pour unstrained into a chilled rocks glass. No garnish."
    }
  ];

 