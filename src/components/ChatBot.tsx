import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";
import chatData from "./chat.json";
import { Button } from "./ui/button";
import { IoSend } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SkeletonG() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

interface MessageProps {
  sender: string;
  message: string;
}

function Message({ sender, message }: MessageProps) {
  return (
    <div
      className={`w-full flex my-3 ${
        sender === "user" ? "justify-end text-right" : "justify-start text-left"
      }`}
    >
      <Card className="w-max">
        <CardContent className="p-3">
          <h1 className="text-lg font-bold mb-1">
            {sender === "user" ? "You" : "Bot"}
          </h1>
          {message}
        </CardContent>
      </Card>
    </div>
  );
}

export default function ChatBot() {
  const [chats, setChats] = useState([{ sender: "", message: "" }]);
  useEffect(() => {
    setChats(chatData.messages);
  }, []);

  return (
    <div className="h-screen">
      {/* <div className="flex w-full justify-between h-12 items-center">
        <h1 className="mx-8 font-extrabold">Mifos</h1>
        <div className="mx-8">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div> */}
      <div className="flex justify-center items-center h-full w-full p-16">
        <Card className="h-full w-full flex flex-col justify-end">
          <CardContent className="overflow-scroll">
            {chats.map((message) => (
              <Message sender={message.sender} message={message.message} />
            ))}
          </CardContent>
          <CardFooter>
            <Input />
            <Button variant="outline" type="submit" className="ml-2 h-full">
              <IoSend />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
