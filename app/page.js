import HeaderText from "@/components/HeaderText";
import Navbar from "@/components/Navbar";
import { getContacts } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FiTrash, FiEdit } from "react-icons/fi";
//
const HomePage = async () => {
  const contacts = await getContacts();

  return (
    <main>
      <HeaderText title="Waiting List" desc="All Contacts Below"></HeaderText>

      <Navbar></Navbar>

      <div className="flex flex-col px-4 py-4">
        <div>
          <table className="table-auto w-full text-center whitespace-nowrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-t1 rounded-b1">
                  FirstName
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  LastName
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  Contact #
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.firstName}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.lastName}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.email}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.phone}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-1">
                    <Link href={`contact/${contact.id}`}>
                      <FiEdit />
                    </Link>
                    <form>
                      <input hidden name="id" defaultValue={contact.id}></input>
                      <button className="mt-1.5" type="submit">
                        <FiTrash style={{ color: "red" }} />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
//
export default HomePage;
