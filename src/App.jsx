import { useState, useRef, useEffect } from 'react';
import './App.css';
import Chatbox from './components/Chatbox';
import ChatMessage from './components/message';
import chatMessages from './components/chatMessages';
import Beginning from './components/Beginning';

function App() {
  const [messages, setMessages] = useState(chatMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (userMessage) => {
    const responses = {
      'hello': 'Hello, how can I waste your time today, fool',
      'pipe':'sleep',
      'morning':'Morning, another day to remind you of the failure that u are',
      'afternoon':'Afternoon, hope Sun no dey disturb you, nawa see as I dey talk as if u get something serious wey fit disturb you',
      'evening':'Come, make I know fr, I no fit tell anybody, u be gay?',
      'night': 'Good night, before u sleep, tell me, I wan know, how jobless people dey sleep again sef? I dey use am for research, no mind me, u know what nvm, go sleep, go sleep',
      'hi': `${userMessage} kill u there, bastard!!`,
      'yo': 'Type like human being, abeg.',
      'ok': 'I\'m tired, please be going.',
      'alright': 'I\'m tired, please be going.',
      'money': 'The term "money" detected!, how much u wan give me? Bossss!!',
      'sup': 'Supper ni!😀. Fck that shit was cringe, who dey write this nonsense?',
      'swift': 'Swift is just a simple conversation chatbot that detects...they no pay me to dey write epistle abeg. Use am see.',
      'hey': 'Hey, probably the nicest response I can give you, imma let it slide. What do you want?',
      'greetings': 'U be gay?',
      'bastard': 'Fool',
      'fool': 'Bastard',
      'idiot': 'abeggg',
      'haba': 'U too like trouble, I no get patience like Chatgpt',
      'abeg': `"${userMessage}" kill u there`,
      'i dey h': `${userMessage} too, no worry how I go chop am, just send go 8086656239, Which bank you asked? Opay idolo`,
      'omo': 'No go touch grass',
      'nth': 'Then why did u come here???',
      'hw far': 'I dey, wetin?',
      'idol': 'Awwn, u get Idol, shame no dey catch u.',
      'search': 'www.google.com fool',
      'look': 'www.google.com fool',
      'help me': 'Because say u dey pay me abi wetin? See no vex me abeg!',
      'test': 'Who be dis one?',
      'nothing': 'Then why did u come here???',
      'what did i': 'Jobless fool',
      'thank you': 'Ur welcome sha',
      'thanks': 'Ur welcome sha',
      'ahan': 'Babe, pls, fck off',
      'fun': 'I just want to have fun, I know I worry too much 2X, I just dey answer Idiots 2X',
      'rema': 'Remyyyyy boyyy, my luv xoxo',
      'fine': 'Jobless fool, ur ancestors dey look you dey laugh',
      'nawa': 'Me sef I tire, dey go!!',
      'nigeria': 'The idiot say make I just put flag: "(Error, funds no dey to do am!)"',
      'country': 'The idiot say make I just put flag: "(Error, funds no dey to do am!)"',
      'need': 'I can\'t hear u, try again later!!',
      'wtf': 'Error, Senseless Idiot detected!',
      'you dey mad': 'Laugh wan kill me 😂😂😂😂, jobless person dey type',
      'mtchew': 'Laugh wan kill me 😂😂😂😂, jobless person dey type',
      'kini': 'Yoruba detected!!! they no pay me reach that oneeeeeeeeeeeeeeee, and dis idiot go still type another one',
      'nice': 'Error, Senseless Idiot detected!',
      'babe': 'Which kain nonsense be dis?',
      'baby': 'Which kain nonsense be dis?',
      'how are you': 'I\'m doing great, thanks for asking!',
      'what can you do': 'I can chat with you and answer simple questions!!!',
      'date': `Today's date is ${new Date().toLocaleDateString()}, u see date for ur phone u dey ask, because say the idiot wey create me say make I dey reply this nonsense.`,
      'time': `Current time is ${new Date().toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})}, no be say u go use am do something. Tch`,
      'default': `8086656239 Opay. Pay am there, I go answer you like d fool wey u be 🙂`
    };

    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key) && key !== 'default') {
        return response;
      }
    }
    
    return responses.default;
  };

  const handleSendMessage = async (message) => {
    const newUserMessage = { message, user: 'user', id: crypto.randomUUID() };
    setMessages(prev => [...prev, newUserMessage]);
    
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const newBotMessage = { message: botResponse, user: 'robot', id: crypto.randomUUID() };
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="app-container">
      <Beginning />
      <div className="messages-container">
        {messages.map((msg) => (
          <ChatMessage message={msg.message} user={msg.user} key={msg.id} />
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <img src="/images/robot.jpeg" width={50} height={50} style={{ borderRadius: "2rem" }} alt="robot typing" />
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <Chatbox onSendMessage={handleSendMessage} isTyping={isTyping} />
    </div>
  );
}

export default App;
