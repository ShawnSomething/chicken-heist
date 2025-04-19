export type StoryOption = {
    text: string
    nextId: number
}

export type StoryNode = {
    id: number
    scenarioKey: string
    choiceKey: string
    text: string
    options: StoryOption[]
}
  
export const storyKey: StoryNode[] = [
    {
      id: 1,
      scenarioKey: "flanders",
      choiceKey: "default",
      text: "Flanders: \nHello there. Colonel Flanders here! Do you read me?",
      options: [
        {
          text: "Yes",
          nextId: 3
        },
        {
          text: "No",
          nextId: 2
        }
      ]
    },
    {
        id: 2,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nBlast this cheap Communication Device! Do you read me now?",
        options: [
            {
                text: "Yes",
                nextId: 3
            },
            {
                text: "No",
                nextId: 4
            }
        ]
    },
    {
        id: 4,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nYou'd better not be pulling my leg kid! After this heist, I can make you really rich... or really, not rich. ",
        options: [
            {
                text: "Fine, yes",
                nextId: 3
            },
            {
                text: "What?",
                nextId: 2
            }
        ]
    },
    {
        id: 3,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nAmazing! And they said you need a fancy Communication Device to have things work.",
        options: [
            {
                text: "What's the mission?",
                nextId: 5
            },
            {
                text: "Did you get this off Eee's Bay?",
                nextId: 4
            }
        ]
    },
    {
        id: 5,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nA very special one, kid. A very important document of mine has been stolen. It's a secret document to my Family's Fried Chicken Recipe!",
        options: [
            {
               text: " ",
               nextId: 6 
            }
        ]
    },
    {
        id: 6,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nI would have assembled a team, but you were the only person that replied on Gum's Tree... *Ahem*... Also, you were the only one cheap enough.",
        options: [
            {
                text: "I do need the money...",
                nextId: 7
            }
        ]
    },
    {
        id: 7,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nAlright kid, what is your current position?",
        options: [
            {
                text: "East of the Stronghold",
                nextId: 8
            },
            {
                text: "West of the Stronghold",
                nextId: 9
            }
        ]
    },
    {
        id: 8,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nThat's great. So on the East, there are two guards on the ground and one on the banister. How do you proceed?",
        options: [
            {
                text: "Walk up to them casually and start a conversation",
                nextId: 10
            },
            {
                text: "Throw a stick to the far side",
                nextId: 11
            },
            {
                text: "This seems like a bad idea",
                nextId: 11
            }
        ]
    },
    {
        id: 11,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "The Guards notice something suspicious. You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            }
        ]
    },
    {
        id: 10,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You: \nHey there! How's your day going? Hot out here! I'm here to inspect the...",
        options: [
            {
                text: "Squirrel Infestation",
                nextId: 12
            },
            {
                text: "Your Security Vault",
                nextId: 11
            }
        ]
    },
    {
        id: 12,
        scenarioKey: "default",
        choiceKey: "default",
        text: "The Guards were confused, but let's you in",
        options: [
            {
                text: "Enter the stronghold",
                nextId: 13 
            },
        ]
    },
    {
        id: 13,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nYou're in! Now for the hard part. The Secret Recipe is at the top of the Control Tower. The only way to get there is to enter the main building from the front",
        options: [
            {
                text: " ",
                nextId: 14
            },
        ]
    },
    {
        id: 14,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nThere are no guards at the door, but it leads right into the Staff Yoga Hall. How do you proceed?",
        options: [
            {
                text: "Walk in confidently",
                nextId: 15
            },
            {
                text: "Scout the area",
                nextId: 16
            }
        ]
    },
    {
        id: 15,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "You see a bunch of staff doing yoga. The staff are embarrassed. You try to back out slowly, but you got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 16,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nSo there is a small stairway to the left of the courtyard?! Oh this blasted map! The guy at thie thrift shop told me that this was the real deal!",
        options: [
            {
                text: "Turn back and walk into the staff Yoga Hall",
                nextId: 15
            },
            {
                text: "Use the stairs",
                nextId: 17
            }
        ]
    },
    {
        id: 17,
        scenarioKey: "default",
        choiceKey: "default",
        text: `You enter the guard breakroom. It's empty. There is a huge poster saying: "It's Yoga Time! Wear the stretchiest pants you have!`,
        options: [
            {
                text: "Steal and put on a guard uniform from the bench",
                nextId: 18
            },
            {
                text: "Open every locker to look for clues",
                nextId: 19
            }
        ]
    },
    {
        id: 18,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nSmart thinking kid! Now, if my map is still correct, there should be a hallway that leads to the control tower",
        options: [
            {
                text: " ",
                nextId: 20
            },
        ]
    },
    {
        id: 19,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You find a locker with a bunch of photos of one guard on all fours. He had a chicken riding on his back and a carrot in his mouth.",
        options: [
            {
                text: "Take a better look at the photos",
                nextId: 21
            },
            {
                text: "Quickly shut the locker and go back down the stairs into the main building",
                nextId: 23
            },
            {
                text: "Steal and put on a guard uniform from this locker",
                nextId: 21
            }
        ]
    },
    {
        id: 21,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "The Guard in the photo walks into the locker room, wearing stretchy yoga pants. He sees you at his locker and is humiliated. You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 20,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nIt should be just after the Staff's Cooking Class Room. Which is just down the long hallway.",
        options: [
            {
                text: "Head down the hallway",
                nextId: 22
            },
            {
                text: "Go back down the stairs to the main building",
                nextId: 23
            },
            {
                text: "Check the lockers",
                nextId: 24
            }
        ]
    },
    {
        id: 24,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You find a locker with a bunch of photos of one guard on all fours. He had a chicken riding on his back with a carrot in his mouth.",
        options: [
            {
                text: "Take a better look at the photos",
                nextId: 21
            },
        ]
    },
    {
        id: 22,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You see three doors",
        options: [
            {
                text: "Open Door 1: The Chicken Help Centre",
                nextId: 25
            },
            {
                text: "Open Door 2: The Canteen",
                nextId: 26
            },
            {
                text: "Open Door 3: The Deep Fryer",
                nextId: 27
            }
        ]
    },
    {
        id: 25,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You see the staff chewing up handfuls of worms to mouth feeding the chickens.",
        options: [
            {
                text: "You slowly back out",
                nextId: 28
            },
        ]
    },
    {
        id: 28,
        scenarioKey: "guard",
        choiceKey: "restart",
        text: "Staff: \nUhm... this is... totally NORMAL! You got caught!",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 26,
        scenarioKey: "default",
        choiceKey: "default",
        text: "A wave of good fried chicken smell rushes through you as you walk through the canteen",
        options: [
            {
                text: "Proceed to the other door and head into the Cooking Class Room",
                nextId: 29
            },
        ]
    },
    {
        id: 29,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nLook at these plebs! If Daddy gave me the secret recipe, I would be the one with all the money and running this stupid cooking class myself! I make amazing Steaks",
        options: [
            {
                text: "Shuffle awkwardly into the class room",
                nextId: 30
            },
        ]
    },
    {
        id: 27,
        scenarioKey: "default",
        choiceKey: "next",
        text: "You see a bunch of people at their computer. A staff walks up to you",
        options: [
            {
                text: " ",
                nextId: 31
            },
        ]
    },
    {
        id: 31,
        scenarioKey: "guard",
        choiceKey: "default",
        text: "Staff: \nWelcome to the HR Department! Is there someone you want to fry? ...Wait, who are you?",
        options: [
            {
                text: "A new guard",
                nextId: 32
            },
            {
                text: "A new staff",
                nextId: 33
            }
        ]
    },
    {
        id: 32,
        scenarioKey: "guard",
        choiceKey: "restart",
        text: "Staff: \nDon't be ridiculous, we don't care enough about security. We are all about *STrateGy*. You got caught.",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 33,
        scenarioKey: "guard",
        choiceKey: "restart",
        text: "Staff: \nDon't be ridiculous, we don't care enough about operations. We are all about *STrateGy*. You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 23,
        scenarioKey: "default",
        choiceKey: "next",
        text: "A staff sees you coming out the Breakroom",
        options: [
            {
                text: " ",
                nextId: 34
            },
        ]
    },
    {
        id: 34,
        scenarioKey: "guard",
        choiceKey: "default",
        text: "Staff: \nHey! You there! Where are YOUR stretchy pants?!",
        options: [
            {
                text: "Tell them you look hotter without it and do yoga with the rest of the staff.",
                nextId: 35
            },
            {
                text: "Laught it off and say that you are new. And you are needed in the Control Tower urgently.",
                nextId: 36
            },
            {
                text: "Tell them you forgot it and need to go back to get it.",
                nextId: 36
            }
        ]
    },
    {
        id: 36,
        scenarioKey: "guard",
        choiceKey: "restart",
        text: "Staff pulls up their already tight yoga pants higher: No one gets out of Yoga Day that easily! Do you want to know what happened to the last guy who skipped out on Yoga Day? You got caught.",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 35,
        scenarioKey: "default",
        choiceKey: "default",
        text: "Everyone sees your amazing yoga skills and you have a good time.",
        options: [
            {
                text: "Proceed to the other door and head into the Cooking Class Room",
                nextId: 29
            },
        ]
    },
    {
        id: 9,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nThat's great. So on the West, there are two guards with a guard dog and one on the banister. How do you proceed?",
        options: [
            {
                text: "Walk up to them casually and start a conversation",
                nextId: 11
            },
            {
                text: "Throw a stick to the far side",
                nextId: 37
            },
            {
                text: "This seems like a bad idea...",
                nextId: 11
            }
        ]
    },
    {
        id: 37,
        scenarioKey: "default",
        choiceKey: "default",
        text: "The dog starts chasing the sticks and pull the guards on the ground away. The Banister Guard is confused.",
        options: [
            {
                text: "Enter the Stronghold",
                nextId: 38
            },
        ]
    },
    {
        id: 38,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nYou're in! Now for the hard part. The Secret Recipe is at the top of the Control Tower. The only way to get there is to enter the main building from the front",
        options: [
            {
                text: " ",
                nextId: 39
            },
        ]
    },
    {
        id: 39,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nThere are no guards at the door, but it leads right into the Staff Yoga Hall. How do you proceed?",
        options: [
            {
                text: "Walk in confidently",
                nextId: 40
            },
            {
                text: "Scout the area",
                nextId: 41
            }
        ]
    },
    {
        id: 41,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "The Banister Guard notices you. You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 40,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You see a bunch of staff doing yoga. They ask for your ID",
        options: [
            {
                text: "Tell them that you are a Squirrel Wrangler",
                nextId: 42
            },
            {
                text: "Tell them that you are a new guard and this is your first day",
                nextId: 43
            }
        ]
    },
    {
        id: 42,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "That's ridiculous. You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 43,
        scenarioKey: "default",
        choiceKey: "default",
        text: `A staff with super stretchy yoga pants. A little too stetchy... Leaves you in the breakroom. It's empty. There is a huge poster saying: "It's Yoga Time! Wear the stretchiest pants you have!`,
        options: [
            {
                text: "Steal and put on a guard uniform from the bench",
                nextId: 18
            },
            {
                text: "Open every locker to look for clues",
                nextId: 19
            }
        ]
    },
    {
        id: 30,
        scenarioKey: "default",
        choiceKey: "default",
        text: "A nice lady with a duck apron asks if you want to join the cooking class",
        options: [
            {
                text: "Join the cooking class",
                nextId: 44
            },
            {
                text: "Say that you are needed in the control room",
                nextId: 45
            }
        ]
    },
    {
        id: 44,
        scenarioKey: "default",
        choiceKey: "next",
        text: "You try your best, but set fire to the kitchen. You run out of the room while you hear Flanders laughing in your ear piece. A group of guards run up to you.",
        options: [
            {
                text: " ",
                nextId: 46
            },
        ]
    },
    {
        id: 46,
        scenarioKey: "guard",
        choiceKey: "default",
        text: "Guards: \nAre you hurt? What happened?",
        options: [
            {
                text: "Tell the truth: You are a terrible cook",
                nextId: 47
            },
            {
                text: "Tell them that the Duck Lady is trying to steal the secret recipe and this is a distraction",
                nextId: 48
            }
        ]
    },
    {
        id: 47,
        scenarioKey: "default",
        choiceKey: "next",
        text: "The guards award you for your honesty and bring you to the control room to brag about you to the boss",
        options: [
            {
                text: " ",
                nextId: 49
            },
        ]
    },
    {
        id: 48,
        scenarioKey: "guard",
        choiceKey: "restart",
        text: "Guards: \nLIAR! She is the best cook in town! She would never do this! She is such a lovely person. How could you lie about her?! You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 45,
        scenarioKey: "guard",
        choiceKey: "default",
        text: "Duck Lady: \nAw... Everyone only wants to go to the yoga class... No one ever wants to join my cooking class... Maybe I should start wearing tight yoga pants while cooking too...",
        options: [
            {
                text: "Join the cooking class",
                nextId: 44
            },
            {
                text: "Agree with her on the tight yoga pants thing",
                nextId: 50
            },
            {
                text: "Suggest changing the class to another day",
                nextId: 51
            }
        ]
    },
    {
        id: 50,
        scenarioKey: "default",
        choiceKey: "next",
        text: "Duck Lady got offended and calls the guards on you. You are brought to the HR department",
        options: [
            {
                text: " ",
                nextId: 31
            },
        ]
    },
    {
        id: 51,
        scenarioKey: "default",
        choiceKey: "next",
        text: "You both have a really nice heart to heart about how she doesn't think that the team values her. She thought she could win them over with her cooking. She is thankful for your empathy and brings you to the control room to brag about you to the boss",
        options: [
            {
                text: " ",
                nextId: 49
            },
        ]
    },
    {
        id: 49,
        scenarioKey: "default",
        choiceKey: "next",
        text: "You arrive in the control room. The boos is sitting with his back to you. His left hand petting the chicken that is on his desk.",
        options: [
            {
                text: " ",
                nextId: 52
            },
        ]
    },
    {
        id: 52,
        scenarioKey: "default",
        choiceKey: "default",
        text: "You are left alone with the boss after the a little too long bragging session. He didn't react, but you very much appreciated it. The room is silent. Only the sound of the chicken cooing as it is being pet.",
        options: [
            {
                text: "Wait patiently while the boss pets the chicken",
                nextId: 53
            },
            {
                text: "Actively glance around the room to find the location of the safe with the secret recipe",
                nextId: 54
            }
        ]
    },
    {
        id: 53,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nThat freak! Ever since we were kids, he loved those chickens more than anything else! He is crazy! Never understood why daddy liked him more!",
        options: [
            {
                text: "Continue waiting",
                nextId: 55
            },
            {
                text: "Clears throat to get the boss' attention",
                nextId: 56
            }
        ]
    },
    {
        id: 56,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "The boss turns around slowly. He notices the communicator in your ear immediately. He picks up the chicken and throws it at you. You got caught",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 55,
        scenarioKey: "default",
        choiceKey: "default",
        text: "The boss is still petting the chicken",
        options: [
            {
                text: "Continue waiting",
                nextId: 58
            },
            {
                text: "Clears throat to get the boss' attention",
                nextId: 56
            }
        ]
    },
    {
        id: 58,
        scenarioKey: "default",
        choiceKey: "default",
        text: "The chicken looks like it's having a great time.",
        options: [
            {
                text: "Continue waiting",
                nextId: 59
            },
            {
                text: "Clears throat to get the boss' attention",
                nextId: 56
            }
        ]
    },
    {
        id: 59,
        scenarioKey: "default",
        choiceKey: "default",
        text: "The boss finishes petting the chicken, turns around and looks at you",
        options: [
            {
                text: "Ask him where the safe is",
                nextId: 60
            },
            {
                text: "Compliment him for his chicken care",
                nextId: 61
            }
        ]
    },
    {
        id: 60,
        scenarioKey: "default",
        choiceKey: "normWin",
        text: "The boss likes your moxie. He gives you a well paying job and calls the cops on Flanders",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 61,
        scenarioKey: "boss",
        choiceKey: "next",
        text: "Boss: \nOh? You noticed? Not many do! Chickens are the most beautiful creatures in the world!",
        options: [
            {
                text: " ",
                nextId: 62
            },
        ]
    },
    {
        id: 62,
        scenarioKey: "default",
        choiceKey: "next",
        text: "The boss goes into a three hour monologue about the best way to care for a chicken. Tears welled up in his eyes as he spoke.",
        options: [
            {
                text: " ",
                nextId: 63
            },
        ]
    },
    {
        id: 63,
        scenarioKey: "boss",
        choiceKey: "next",
        text: "Boss: \nThese amazing creatures... All because of this stupid family legacy... I... I have to kill them...",
        options: [
            {
                text: " ",
                nextId: 64
            },
        ]
    },
    {
        id: 54,
        scenarioKey: "default",
        choiceKey: "next",
        text: "The boss notices that you are glancing around. He stands up and walks over to you slowly, the chicken cradled in his arms like a child.",
        options: [
            {
                text: " ",
                nextId: 65
            },
        ]
    },
    {
        id: 65,
        scenarioKey: "boss",
        choiceKey: "default",
        text: "Boss: \nDid my brother send you?",
        options: [
            {
                text: "Your brother? What brother?",
                nextId: 66
            },
            {
                text: "Yes, I was the only one he could afford",
                nextId: 67
            }
        ]
    },
    {
        id: 67,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nWhat are you doing kid?! Now he is going to think I am a cheap donkey!",
        options: [
            {
                text: " ",
                nextId: 68
            },
        ]
    },
    {
        id: 68,
        scenarioKey: "default",
        choiceKey: "normWin",
        text: "The boss is amused at your honesty. He gives you a well paying job and calls the cops on Flanders",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 66,
        scenarioKey: "boss",
        choiceKey: "next",
        text: "Boss: \nIt's alright, no one really knew who he was. Daddy disowned him because he never cared for the chicken on the farm. He used to tie bottle rockets to their wings so they would fly higher...",
        options: [
            {
                text: " ",
                nextId: 69
            },
        ]
    },
    {
        id: 69,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nhaHA! That's probably one of my best works yet!",
        options: [
            {
                text: " ",
                nextId: 70
            },
        ]
    },
    {
        id: 70,
        scenarioKey: "boss",
        choiceKey: "default",
        text: "Boss: \nSuch a strange... Jealous little man...",
        options: [
            {
                text: "Smile and nod",
                nextId: 71
            },
            {
                text: "Maybe... he had his reasons?",
                nextId: 72
            }
        ]
    },
    {
        id: 71,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "The boss was not amused by the way you easily agreed with with rude statement about his brother. He throws the chicken at you. You got caught.",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 72,
        scenarioKey: "default",
        choiceKey: "next",
        text: "The boss goes into a two hour monologue, opening up about their childhood. About all the expectations placed on them for the business and the reputation.",
        options: [
            {
                text: " ",
                nextId: 73
            },
        ]
    },
    {
        id: 73,
        scenarioKey: "boss",
        choiceKey: "next",
        text: "Boss: \nI hated killing these little guys. I am now vegan, but am saddled with running this place to keep up the family legacy",
        options: [
            {
                text: " ",
                nextId: 64
            },
        ]
    },
    {
        id: 64,
        scenarioKey: "default",
        choiceKey: "next",
        text: "The boss ran out of the room crying. You can hear the staff outside trying to mooch of his vulnerable state",
        options: [
            {
                text: " ",
                nextId: 74
            },
        ]
    },
    {
        id: 74,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nGreat work kid! *Sniffles* Now... go... finish the job... and I'll make you rich... *Sniffles* (mutters -- sorry Sanders... brother... I need this.",
        options: [
            {
                text: "Head to safe",
                nextId: 75
            },
            {
                text: "Grab the chicken on his table and bring it to the boss",
                nextId: 76
            }
        ]
    },
    {
        id: 75,
        scenarioKey: "flanders",
        choiceKey: "default",
        text: "Flanders: \nAlmost there kid... Almost there...",
        options: [
            {
                text: "Open the safe and steal the recipe",
                nextId: 77
            },
            {
                text: "Glance back at the chicken on the table",
                nextId: 78
            }
        ]
    },
    {
        id: 77,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nGolden! I knew I could count on you! See? Cheap labour ain't so bad!",
        options: [
            {
                text: " ",
                nextId: 79
            },
        ]
    },
    {
        id: 79,
        scenarioKey: "Flanders",
        choiceKey: "normWin",
        text: "Flanders: \nNow, grab a grenade and blow up the place. You will be rewarded handsomely!",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 78,
        scenarioKey: "flanders",
        choiceKey: "next",
        text: "Flanders: \nWhat are you doing? I am so close!",
        options: [
            {
                text: " ",
                nextId: 80
            },
        ]
    },
    {
        id: 80,
        scenarioKey: "default",
        choiceKey: "restart",
        text: "The staff came in and saw what you are doing. You got caught.",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
    {
        id: 76,
        scenarioKey: "guard",
        choiceKey: "default",
        text: "Staff: \nWhat did you do to the boss?! We need him to be happy so he will approve our slide deck in 10 minutes",
        options: [
            {
                text: "Ignore the staff and hand the boss the chicken",
                nextId: 81
            },
            {
                text: "Give the boss space by running the meeting for him",
                nextId: 81
            }
        ]
    },
    {
        id: 81,
        scenarioKey: "default",
        choiceKey: "bestWin",
        text: "The boss notices your empathy and ability. You both go back into his room. He names you his successor. He gives you the recipe and calls the cops on Flanders.",
        options: [
            {
                text: " ",
                nextId: -1
            },
        ]
    },
  ]