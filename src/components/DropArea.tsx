import { useDroppable } from "@dnd-kit/core";
import { useDispatch, useSelector } from "react-redux";
import { removeElement } from "../slices/dropElementSlice";
import {
  TitleField,
  SubtitleField,
  SeparatorField,
  SpacerField,
  TextField,
  TextareaField,
  NumberField,
  DropdownField,
  CheckboxField,
  RadioField,
  DateField,
  TimeField,
} from "../components/DropElements";

type ElementType = { itemName: string; itemPosition: number };

export type ElementName =
  | "title"
  | "subtitle"
  | "separator"
  | "spacer"
  | "text"
  | "textarea"
  | "number"
  | "dropdown"
  | "checkbox"
  | "radiobox"
  | "date"
  | "time";

type FieldItemType = {
  [key in ElementName]: React.FC<{
    handleRemove: (index: number) => void;
    index: number;
  }>;
};

const FieldItem: FieldItemType = {
  title: TitleField,
  subtitle: SubtitleField,
  separator: SeparatorField,
  spacer: SpacerField,
  text: TextField,
  textarea: TextareaField,
  number: NumberField,
  dropdown: DropdownField,
  checkbox: CheckboxField,
  radiobox: RadioField,
  date: DateField,
  time: TimeField,
};

const DropArea = ({ onDrop }: { onDrop: (event: any) => void }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "drop-area",
  });

  const dispatch = useDispatch();
  const elements = useSelector((state: any) => state.elements as ElementType[]);

  const handleDelete = (index: number) => {
    dispatch(removeElement(index));
  };

  console.log("ELEMENTS:", elements);
  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col space-y-4 w-full h-full px-4 py-6 bg-[#eceef3]  border-gray-400 rounded-lg overflow-y-auto
        ${isOver ? "border-4" : "border"}
        ${
          elements.length
            ? "items-start justify-start"
            : "items-center justify-center"
        }
      `}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      {elements.length > 0 ? (
        elements.map((element, index) => {
          const FieldComponent =
            FieldItem[element.itemName as keyof FieldItemType];
          return (
            <FieldComponent
              key={index}
              handleRemove={() => handleDelete(index)}
              index={index}
            />
          );
        })
      ) : (
        <h1 className="text-3xl font-bold">Drop here</h1>
      )}
    </div>
  );
};

export default DropArea;
