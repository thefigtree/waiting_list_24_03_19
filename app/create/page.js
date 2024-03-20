import CreateForm from "@/components/CreateForm";
import HeaderText from "@/components/HeaderText";
import React from "react";

const CreatePage = () => {
  return (
    <section>
      <HeaderText title="Add Contact" desc="Add Contacts Below"></HeaderText>
      <div className="flex flex-col items-center justify-center">
        <CreateForm></CreateForm>
      </div>
    </section>
  );
};

export default CreatePage;
