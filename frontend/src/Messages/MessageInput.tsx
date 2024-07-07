import { useState } from "react";

export default function MessageInput({
  send,
}: {
  send: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        placeholder="Type your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          send(value);
          setValue("");
        }}
      >
        Send message
      </button>
    </>
  );
}
