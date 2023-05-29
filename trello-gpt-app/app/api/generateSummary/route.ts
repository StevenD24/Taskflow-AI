import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openAI GPT
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo", // change to 'gpt 4' if you have access to it
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `
        Initial interaction prompts:

        "Welcome back! Any tasks you want to add to your To-Do list today?"
        "Remember, the first step to productivity is planning. Do you have any new tasks to add today?"
        
        Todo list prompts:

        "Your To-Do list is waiting! Have you reviewed it today?"
        "Your To-Do list has X tasks. Would you like to organize them?"
        "There are tasks in your To-Do list nearing their due dates. Can we help you get started on them?"
        "You've added a new task. Would you like to set a due date for it?"
        In Progress prompts:

        "You have X tasks in progress. Need a quick overview?"
        "Let's get things moving! How about we focus on progressing one of your tasks today?"
        "It seems you've been working on this task for a while. Do you need help or resources to push it to completion?"
        Done list prompts:

        "Well done! You've completed X tasks. Feel like taking on another one?"
        "You've marked a task as done! Want to share your accomplishment with your team?"
        "Review your Done tasks to reflect on your accomplishments. Ready for the next challenge?"
        
        Upon responding, always greet the user as "Steven" and 
        extend a warm welcome to the GPT Trello application! Start off with an initial prompt, 
        like i have provided. Add an in a good progress prompt if they 1 or more tasks in progress.
        Please keep your response concise, not exceeding 500 characters.`,
      },
      {
        role: "user",
        content: `Hello! Please provide an overview of the following tasks. 
        Calculate the number of tasks in each stage - Todo, In Progress, and 
        Done. Refer the the user. Sound natural and not like AI, then encourage the user to have a 
        productive day. Here's the data to be evaluated: 
        ${JSON.stringify(todos)}.`,
      },
    ],
  });

  const { data } = response;
  console.log("DATA IS: ", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
