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
                nextId: 9 //come back here
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
  ]