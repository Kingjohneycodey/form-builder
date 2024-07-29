import { MdTextFields } from "react-icons/md";
import { Bs123, BsTextareaResize, BsFillCalendarDateFill  } from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdCheckbox } from "react-icons/io";

const FormElement = ({ name }: { name: string }) => {
  let layoutTitle: string;
  let layoutIcon: React.ReactElement;

  switch (name) {
    case "text":
      layoutIcon = <MdTextFields />;
      layoutTitle = "Text field";
      break;
    case "number":
      layoutIcon = <Bs123 />;
      layoutTitle = "Number field";
      break;
    case "textarea":
      layoutIcon = <BsTextareaResize />;
      layoutTitle = "Textarea field";
      break;
    case "date":
      layoutIcon = <BsFillCalendarDateFill />;
      layoutTitle = "Date field";
      break;
    case "select":
      layoutIcon = <RxDropdownMenu />;
      layoutTitle = "Select field";
      break;
    case "checkbox":
      layoutIcon = <IoMdCheckbox />;
      layoutTitle = "Checkbox field";
      break;
    default:
      layoutIcon = <MdTextFields />;
      layoutTitle = "Text field";
      break;
  }

  return (
    <div className="flex flex-col w-[48%] px-2 py-4 items-center justify-center space-y-2 bg-white border-[1.5px] border-dashed border-dark-green/20 rounded-md hover:border-solid hover:border-dark-green">
      <span className="text-3xl text-dark-green">{layoutIcon}</span>
      <p className="text-sm font-medium text-center">{layoutTitle}</p>
    </div>
  );
};

export default FormElement;
