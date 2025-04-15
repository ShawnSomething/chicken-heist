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
      text: "Flanders: Hello there. Colonel Flanders here! Do you read me?",
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
        text: "Flanders: Blast this cheap Communication Device! Do you read me now?",
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
        text: "Flanders: You'd better not be pulling my leg kid! After this heist, I can make you really rich... or really, not rich. ",
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
        text: "Flanders: Amazing! And they said you need a fancy Communication Device to have things work.",
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
        text: "Flanders: A very special one, kid. A very important document of mine has been stolen. It's a secret document to my Family's Fried Chicken Recipe!",
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
        text: "Flanders: I would have assembled a team, but you were the only person that replied on Gum's Tree... *Ahem*... Also, you were the only one cheap enough.",
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
        text: "Flanders: Alright kid, what is your current positino?",
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
        text: "Flanders: That's great. So on the East, there are two guards on the ground and one on the banister. How do you proceed?",
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
        text: "You: Hey there! How's your day going? Hot out here! I'm here to inspect the...",
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
        text: "Flanders: You're in! Now for the hard part. The Secret Recipe is at the top of the Control Tower. The only way to get there is to enter the main building from the front",
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
        text: "Flanders: There are no guards at the door, but it leads right into the Staff Yoga Hall. How do you proceed?",
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
        text: "Flanders: So there is a small stairway to the left of the courtyard?! Oh this blasted map! The guy at thie thrift shop told me that this was the real deal!",
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
        text: "Flanders: Smart thinking kid! Now, if my map is still correct, there should be a hallway that leads to the control tower",
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
        scenarioKey: "defaults",
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
        text: "Flanders: It should be just after the Staff's Cooking Class Room. Which is just down the long hallway.",
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
        text: "Staff: Uhm... this is... totally NORMAL! You got caught!",
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
        text: "Flanders: Look at these plebs! If Daddy gave me the secret recipe, I would be the one with all the money and running this stupid cooking class myself! I make amazing Steaks",
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
        text: "Staff: Welcome to the HR Department! Is there someone you want to fry? ...Wait, who are you?",
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
        text: "Staff: Don't be ridiculous, we don't care enough about security. We are all about *STrateGy*. You got caught.",
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
        text: "Staff: Don't be ridiculous, we don't care enough about operations. We are all about *STrateGy*. You got caught",
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
        text: "Staff: Hey! You there! Where are YOUR stretchy pants?!",
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
        text: "Flanders: That's great. So on the West, there are two guards with a guard dog and one on the banister. How do you proceed?",
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
        text: "Flanders: You're in! Now for the hard part. The Secret Recipe is at the top of the Control Tower. The only way to get there is to enter the main building from the front",
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
        text: "Flanders: There are no guards at the door, but it leads right into the Staff Yoga Hall. How do you proceed?",
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
  ]