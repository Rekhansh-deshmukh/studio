"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        
            <Button onClick={toggleChatbot}>
                {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
            </Button>
            {isOpen && (
                
                    
                        
                            Chatbot
                        
                        
                            {messages.map((message, index) => (
                                <p key={index}>{message}</p>
                            ))}
                        
                        
                            <Input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <Button onClick={handleSendMessage}>Send</Button>
                        
                    
                
            )}
        
    );
};

export default Chatbot;
