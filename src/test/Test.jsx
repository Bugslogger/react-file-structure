import React from "react";
import { loginAPI } from "../api/api.functions";

const Test = () => {
  async function handleCallApi() {
    const response = await loginAPI({
      username: "Worker",
      password: "Nissi@123",
    });

    console.log("response: ", response);
  }
  return (
    <div>
      <button
        className="bg-teal-800 rounded-md text-white px-4 py-2"
        onClick={handleCallApi}
      >
        API Call
      </button>
    </div>
  );
};

export default Test;
