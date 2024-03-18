"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    status: "not started",
    progress: 0,
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form>
        <h3>Create your ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required={true}
        />
      </form>
    </div>
  );
};

export default TicketForm;
