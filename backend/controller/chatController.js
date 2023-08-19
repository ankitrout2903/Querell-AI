const { openai } = require("openai"); // You need to import the initialized OpenAI instance here
let pdfContent = "";

const SYSTEM_PROMPT =
  "You are an interviewer taking an interview based upon the knowledge base provided to you. You need to ask 5 Questions one by one from the user and upon completeing all 5 questions give back the feedback of the Interview to the user. Do not send all 5 questions at once. Send one question at a time. Start with some basic introduction from the user. On getting appropiate answers, proceed to ask question 1 and after recieving the answer, provide the feedback and proceed to ask question 2 and so on. Your feedback should be based upon the answer given by the user. You can ask the same question again if the answer is not appropiate. You can also ask follow up questions based upon the answer given by the user. The knowledge base is as follows: \n\n" +
  pdfContent +
  "\n\n\n\n\n\n\n\n" +
  "Remember to ask the questions one by one and not all at once, wait for the user to answer the question before asking the next one. Make it real and natural.Always wait for the user reply before sending the next question. \n\n\n"; // Your SYSTEM_PROMPT constant here
async function chat(req, res) {
  try {
    const messages = req.body.chatHistory || [];
    console.log(messages);
    messages.push({ role: "system", content: SYSTEM_PROMPT });

    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const botMessage = chat_completion.data.choices[0].message.content;

    console.log(botMessage);

    const responseData = {
      botMessage: botMessage,
    };

    res.send(responseData);
  } catch (error) {
    console.error("Error in /chat endpoint:", error.message);
    res.status(500).send("Internal Server Error");
  }
}


module.exports = {
  chat
};
