import { MdTextFields } from "react-icons/md";
import {
  Bs123,
  BsTextareaResize,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdCheckbox, IoMdTimer } from "react-icons/io";
import { RiListRadio } from "react-icons/ri";

const FormElement = ({ name }: { name: string }) => {
  let layoutTitle: string;
  let layoutIcon: React.ReactElement;

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", name);
  };

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
    case "dropdown":
      layoutIcon = <RxDropdownMenu />;
      layoutTitle = "Dropdown field";
      break;
    case "checkbox":
      layoutIcon = <IoMdCheckbox />;
      layoutTitle = "Checkbox field";
      break;
    case "radiobox":
      layoutIcon = <RiListRadio />;
      layoutTitle = "Radiobox field";
      break;
    case "time":
      layoutIcon = <IoMdTimer />;
      layoutTitle = "Time field";
      break;
    default:
      layoutIcon = <MdTextFields />;
      layoutTitle = "Text field";
      break;
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="flex flex-col w-[48%] px-2 py-4 items-center justify-center space-y-2 bg-white border-[1.5px] border-dashed border-dark-green/20 rounded-md hover:border-solid hover:border-dark-green"
    >
      <span className="text-3xl text-dark-green">{layoutIcon}</span>
      <p className="text-sm font-medium text-center">{layoutTitle}</p>
    </div>
  );
};

export default FormElement;
