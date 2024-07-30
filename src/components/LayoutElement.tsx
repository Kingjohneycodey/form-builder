import { LuHeading1, LuHeading2, LuSeparatorHorizontal } from "react-icons/lu";
import { BsTextParagraph } from "react-icons/bs";
import { RiSeparator } from "react-icons/ri";

const LayoutElement = ({ name }: { name: string }) => {

  let layoutTitle: string;
  let layoutIcon: React.ReactElement;

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", name);
  };

  switch (name) {
    case "title":
      layoutIcon = <LuHeading1 />;
      layoutTitle = "Title field";
      break;
    case "subtitle":
      layoutIcon = <LuHeading2 />;
      layoutTitle = "Subtitle field";
      break;
    case "paragraph":
      layoutIcon = <BsTextParagraph />;
      layoutTitle = "Paragraph field";
      break;
    case "separator":
      layoutIcon = <RiSeparator />;
      layoutTitle = "Separator field";
      break;
    case "spacer":
      layoutIcon = <LuSeparatorHorizontal />;
      layoutTitle = "Spacer field";
      break;
    default:
      layoutIcon = <LuHeading1 />;
      layoutTitle = "Title field";
      break;
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="flex flex-col z-10 w-[48%] px-2 py-4 items-center justify-center space-y-2 bg-white border-[1.5px] border-dashed border-dark-green/20 rounded-md hover:border-solid hover:border-dark-green"
    >
      <span className="text-3xl text-dark-green">{layoutIcon}</span>
      <p className="text-sm font-medium text-center">{layoutTitle}</p>
    </div>
  );
};

export default LayoutElement;
