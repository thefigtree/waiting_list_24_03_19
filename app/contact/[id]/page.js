import React from "react";
import HeaderText from "@/components/HeaderText";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { getContact } from "@/lib/data";
import { updateContact } from "@/lib/action";

const SingleContact = async ({ params }) => {
  const { id } = params;

  const contact = await getContact(id);

  return (
    <section>
      <HeaderText
        title="Single Contact"
        desc="View & Update Contact Below"
      ></HeaderText>
      <Navbar></Navbar>
      <div className="flex flex-col py-4 px-4">
        <form
          className="bg-gray-100 flex flex-col items-center p-2 rounded"
          action={updateContact}
        >
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input type="text" name="id" hidden value={contact.id}></input>
              <label className="text-gray-700">FirstName</label>
              <Input
                type="text"
                placeholder={contact.firstName}
                name="firstName"
              ></Input>
            </div>
            <div className="w-1/2 pr-2">
              <label className="tedt-gray-700">LastName</label>
              <Input
                type="text"
                placeholder={contact.lastName}
                name="lastName"
              ></Input>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="tedt-gray-700">Email</label>
              <Input
                type="text"
                placeholder={contact.email}
                name="email"
              ></Input>
            </div>
            <div className="w-1/2 pr-2">
              <label className="tedt-gray-700">Contact Number</label>
              <Input
                type="number"
                placeholder={contact.phone}
                name="phone"
              ></Input>
            </div>
          </div>

          <button className="bg-orange-400" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default SingleContact;
