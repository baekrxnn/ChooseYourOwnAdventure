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
            choices:[
                {
                    text: "Take a nap",
                    nextLevel: "start",
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
                    nextLevel: "gymwork",
                },
                
                {
                    text: "Steak",
                    nextLevel: "",
                },
                
                {
                    text: "Fastfood",
                    nextLevel: "oof",
                },
                
                {
                    text: "Make Lunch",
                    nextLevel: ""
                }
            ]
        },
        
        oof: {
            text: "Oof.",
            nextLevel: "start",
        },
        
        gymwork: {
            choices: [
                {
                    text: "Get back to work"
                }
                
                ]
        }
        

    }
};
