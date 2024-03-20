"use client";
import { addContact } from "@/lib/action";
import React from "react";
import Input from "./Input";

const CreateForm = () => {
  return (
    <div>
      <form
        action={addContact}
        className="bg-gray-100 items-center p-2 rounded"
      >
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="tedt-gray-700">FirstName</label>
            <Input type="text" placeholder="FirstName" name="firstName"></Input>
          </div>
          <div className="w-1/2 pr-2">
            <label className="tedt-gray-700">LastName</label>
            <Input type="text" placeholder="LastName" name="lastName"></Input>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="tedt-gray-700">Email</label>
            <Input type="text" placeholder="Email" name="email"></Input>
          </div>
          <div className="w-1/2 pr-2">
            <label className="tedt-gray-700">Contact Number</label>
            <Input
              type="number"
              placeholder="Contact Number"
              name="phone"
            ></Input>
          </div>
        </div>

        <button className="bg-orange-400" type="submit">
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
