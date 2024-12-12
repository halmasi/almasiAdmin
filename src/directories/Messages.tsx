import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(process.env.BACKEND_API + "/messages", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const orginalData: { email: string; name: string; content: string }[] =
          data.data;
        setMessages(orginalData);
      });
  }, []);

  return (
    <div>
      {messages.map((item) => (
        <div className="py-5">
          <p>{item.email}</p>
          <p>{item.name}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
