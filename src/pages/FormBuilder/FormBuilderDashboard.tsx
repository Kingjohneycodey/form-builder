import React from "react";
import { BsFileEarmarkPlus } from "react-icons/bs";

const FormBuilderDashboard = () => {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-3xl mb-4 font-bold">Form Builder</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="bg-[#005828] rounded-tl-lg rounded-tr-lg p-4 text-white text-center">
              <p className="text-base">Total Forms</p>
            </div>
            <div className="bg-[#03a62f] rounded-bl-lg rounded-br-lg p-4 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">10</h2>
            </div>
          </div>

          <div>
            <div className="bg-[#005828] rounded-tl-lg rounded-tr-lg p-4 text-white text-center">
              <p className="text-base">Published Forms</p>
            </div>
            <div className="bg-[#03a62f] rounded-bl-lg rounded-br-lg p-4 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">10</h2>
            </div>
          </div>

          <div>
            <div className="bg-[#005828] rounded-tl-lg rounded-tr-lg p-4 text-white text-center">
              <p className="text-base">Drafts</p>
            </div>
            <div className="bg-[#03a62f] rounded-bl-lg rounded-br-lg p-4 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">10</h2>
            </div>
          </div>

          <div></div>
        </div>

        <div className="my-8 border-t border-gray-400"></div>

        <h1 className="text-3xl mb-4 font-bold">Your forms</h1>

        <div className="my-8 border-t border-gray-400"></div>

        <button
          className="bg-white px-20 group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 rounded-lg"
        >
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">Create new form</p>
        </button>
      </div>
    </div>
  );
};

export default FormBuilderDashboard;
