import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatState } from "../../Context/ChatProvider";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, setUser, setSelectedChat, chats, setChats } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const userID = user._id;

      const { data } = await axios.get(
        "/api/chat",
        { params: { userID } },
        config,
      );

      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);

  return <div>CHATS</div>;
};

export default MyChats;
