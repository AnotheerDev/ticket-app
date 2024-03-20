"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }
    router.refresh();
    router.push("/");
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
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required={true}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required={true}
          rows="5"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Projet">Projet</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            type="radio"
            name="priority"
            onChange={handleChange}
            value="1"
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>
          <input
            id="priority-2"
            type="radio"
            name="priority"
            onChange={handleChange}
            value="2"
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>
          <input
            id="priority-3"
            type="radio"
            name="priority"
            onChange={handleChange}
            value="3"
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>
          <input
            id="priority-4"
            type="radio"
            name="priority"
            onChange={handleChange}
            value="4"
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>
          <input
            id="priority-5"
            type="radio"
            name="priority"
            onChange={handleChange}
            value="5"
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>
        <label htmlFor="progress"> Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not started</option>
          <option value="in progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
