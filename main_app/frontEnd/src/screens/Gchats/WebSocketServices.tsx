// // WebSocketService.js
// /*import io from 'socket.io-client';

// const serverURL = 'https://localhost:3000'; 

// class WebSocketService {
// private socket ;
// constructor(){
// this.socket = io(serverURL,{
//   transports:['websocket']
// })
// }
   
// initializeSocket () {
//     try{
//       // console.log("initializing Socket", this.socket)
//       this.socket.on('connect', () => {
//         console.log('Connected to server');
//       });

//       this.socket.on('disconnect', (data) => {
//         console.log('disconnected to server');
//       });

//       this.socket.on('error', (data) => {
//         console.log('socket error',data);
//       });
//     } catch(error){
//       console.log("Socket is not initialized", error)
//     }
//   }

//   emit(event:any, data ={}){
//     this.socket.emit(event, data)
//   }
//   // on(event, cb ={}){
//   //   this.socket.emit(event, cb)
//   // }
//   removeListener(listenerName:string){
//     this.socket.emit(listenerName)
//   }
// }

// const webSocketService = new WebSocketService();
// export default webSocketService;
// */

// import { useState, useEffect, ReactNode, createContext, useContext } from "react";
// import { View, TextInput, Button } from "react-native";
// import { io } from "socket.io-client";

// // const ws = new WebSocket("http://localhost:3000","websocket");

// // ws.onopen = () => {
// //   // connection opened
// //   ws.send('something'); // send a message
// // };
// const ChatScreenContext = createContext<any>(undefined)
// const ChatScreenContent = () => {
//   const context = useContext(ChatScreenContext);
//   if (!context) {
//     throw new Error();
//   }
//   return context;
// };
//  const ChatScreenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [message, setMessage] = useState("");
//   const [receivedMessage, setReceivedMessage] = useState("");

//   const socket = io("localhost:3000", {
//     transports: ["websocket"],
//   });

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("Connected to WebSocket");
//     });
//     socket.on("message", (message) => {
   
//       setReceivedMessage(message);
//     });
//     socket.on("error", (message) => {
   
//       console.log("error");
//     });
//     // Cleanup the socket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, [socket]);

//   const sendMessage = () => {
//     try {
//       socket.emit("message", message);
//       setMessage("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <ChatScreenContext.Provider value={ChatScreenContent}>{children}</ChatScreenContext.Provider>
//   );
// };

// export {ChatScreenProvider}

// Import necessary components
import React, { ReactNode, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';


// Component definition
const WebSocketExample: React.FC<{ children: ReactNode }> = ({ children }) => {

  const wsRef = useRef<WebSocket | null>(null);

  const wsUrl = 'ws://192.168.0.5:3000/socket';
  const connectWebSocket = () => {
    // WebSocket connection URL
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('WebSocket opened');
    };

    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
    };

    ws.onclose = (event) => {
      console.log('WebSocket closed:', event.reason);
      // Set a timeout to attempt reconnection after 5 seconds
      setTimeout(() => {
        console.log('Attempting to reconnect...');
        connectWebSocket();
      }, 5000);
    };

    wsRef.current = ws;
  };
  useEffect(() => {
    connectWebSocket();

    return () => {
      // Clean up WebSocket on component unmount
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [wsUrl]);
  // useEffect(() => {
  //   // WebSocket connection URL
  //   const wsUrl = 'ws://192.168.0.5:3000/';

  //   // Create a WebSocket instance
  //   const ws = new WebSocket(wsUrl,"websocket");

  //   // WebSocket event listeners
  //   ws.onopen = () => {
  //     console.log('WebSocket opened');
  //   };

  //   ws.onmessage = (event) => {
  //     console.log('Received message:', event.data);
  //   };

  //   ws.onclose = (event) => {
  //     console.log('WebSocket closed:', event.reason);
  //   };

  //   // Clean up WebSocket on component unmount
  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  return (
    <>{children}</>
  );
};

export default WebSocketExample;