// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "It's lunch time. You're hungry",
            choices: [
                {
                    text: "Hi Hungry!",
                    nextLevel: "wake_up",
                },

                {
                    text: "Find Food",
                    nextLevel: "eat",
                },
                
                {
                    text: "Continue Working",
                    nextLevel: "hungry"
                }
            ]
        },

        wake_up: {
            //background_image: "fire.gif",
            //music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Your boss is telling you to wake up",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        hungry: {
            message:"Still hungry",
            choices:[
                {
                    text: "Take a nap",
                    nextLevel: "wake_up",
                },
                
                {
                    text: "Eat",
                    nextLevel: "eat"
                },
                
            ]
        },
        

        eat: {
            message: "What to eat?",
            choices: [
                {
                    text: "Salad",
                    nextLevel: "next",
                },
                
                {
                    text: "Steak",
                    nextLevel: "alone",
                },
                
                {
                    text: "Fastfood",
                    nextLevel: "oof",
                },
                
                {
                    text: "Make Lunch",
                    nextLevel: "enjoy"
                }
            ]
        },
        
        oof: {
            message:"Oof.",
            choices: [
                {
                text: "Should probably eat healthier.",
                nextLevel: "start",
                },
            ]
        },
        
        next: {
            message: "What next?",
            choices: [
                {
                    text: "Get back to work",
                    nextLevel:"have_fun",
                },
                    
                {
                    text: "Go to the gym",
                    nextLevel:"have_fun",   
                },
                
            ]
        },
        
        have_fun: {
            message: "Have Fun!",
            choices: [
                {
                    text:"Fun(?)",
                    nextLevel:"start",
                },
            ]
        },
        
        enjoy: {
            message: "Enjoy!",
            choices: [
                {
                    text:"Enjoy my delicious lunch",
                    nextLevel:"start",
                },
            ]
        },
        
        alone: {
            message:"Alone?",
            choices: [
                {
                    text: "Yes",
                    nextLevel:"enjoy",
                },
                
                {
                    text: "No",
                    nextLevel:"paying",
                },
            ]
        },
        
        paying: {
            message:"Who's paying?",
            choices: [
                {
                    text: "You",
                    nextLevel:"next",
                },
                
                {
                    text: "share",
                    nextLevel:"next",
                },
                
                {
                    text: "friend",
                    nextLevel:"enjoy",
                },
            ]
        },

        

        
    }
};
