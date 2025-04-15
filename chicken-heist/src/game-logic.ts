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
    }
  ]