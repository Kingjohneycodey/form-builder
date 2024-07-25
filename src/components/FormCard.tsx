import { FaEdit } from "react-icons/fa";
import { Button } from "./ButtonComponent";

const FormCard = ({
  formName,
  formStatus,
  dateCreated,
  formDescription,
}: {
  formName: string;
  formStatus: string;
  dateCreated: string;
  formDescription: string;
}) => {
  return (
    <div className="w-[23.5%] bg-white px-6 border border-dark-green/20 h-[190px] items-center justify-center flex flex-col border-dashed gap-4 rounded-lg">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col space-y-1">
          <b className="text-base">{formName}</b>
          <span className="text-sm text-gray-600">{dateCreated}</span>
        </div>
        <div
          className={`flex items-center justify-center w-max px-2.5 py-0.5 text-xs text-white font-semibold rounded-md ${
            formStatus.toLowerCase() === "draft"
              ? "bg-color-bright-red"
              : "bg-light-green"
          }`}
        >
          {formStatus}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-3">
        <p className="text-sm truncate">{formDescription}</p>
        <Button type="submit" className="w-full gap-2 font-semibold font-base">
          Edit form
          <FaEdit className="font-lg" />
        </Button>
      </div>
    </div>
  );
};

export default FormCard;
