import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addElement,
  removeElement,
  // reorderElements,
} from "../slices/dropElementSlice";
import { Button } from "../components/ButtonComponent";
import { MdOutlinePublish, MdPreview } from "react-icons/md";
import { HiSaveAs } from "react-icons/hi";
import LayoutElement from "../components/LayoutElement";
import FormElement from "../components/FormElement";
import {
  TitleField,
  SubtitleField,
  SeparatorField,
  SpacerField,
  TextField,
  NumberField,
  TextareaField,
  DateField,
  DropdownField,
  CheckboxField,
  RadioField,
  TimeField,
} from "../components/DropElements.js";

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

export type FieldComponents = {
  [key in ElementName]: React.FC<{
    handleRemove: (index: number) => void;
    index: number;
  }>;
};

const fieldComponents: FieldComponents = {
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

const FormBuilder = () => {
  // const { id } = useParams();
  const [isDropElement, setIsDropElement] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elements = useSelector((state: any) => state.elements as ElementName[]);

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const dataTransfer = event.dataTransfer;
    if (dataTransfer) {
      setIsDropElement(true);
      const elementName = dataTransfer.getData("text/plain");
      dispatch(addElement(elementName));
      setIsDragging(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDelete = (index: number) => {
    dispatch(removeElement(index));
  };

  useEffect(() => {
    const dropZone = document.getElementById("dropZone");

    if (dropZone) {
      dropZone.addEventListener("dragenter", handleDragEnter);
      dropZone.addEventListener("dragleave", handleDragLeave);
      dropZone.addEventListener("drop", handleDrop);

      return () => {
        dropZone.removeEventListener("dragenter", handleDragEnter);
        dropZone.removeEventListener("dragleave", handleDragLeave);
        dropZone.removeEventListener("drop", handleDrop);
      };
    }
  });

  return (
    <div className="flex flex-col">
      <nav className="flex flex-row items-center justify-between p-4 border-b border-gray-400 h-[13vh] md:p-5 md:gap-4">
        <h1 className="text-2xl font-bold w-[68%]">
          Form:{" "}
          <span className="font-normal text-gray-600">Enrollment Form</span>
        </h1>
        <div className="flex flex-row items-center justify-between gap-1 w-[32%]">
          <Button
            variant={"outline"}
            title={"Preview the form"}
            className="w-[32%] gap-2 font-bold text-sm tracking-wide"
          >
            <MdPreview className="text-lg" />
            Preview
          </Button>
          <Button
            variant={"outline"}
            title={"Save and edit later"}
            className="w-[32%] gap-2 font-bold text-sm tracking-wide"
          >
            <HiSaveAs className="text-lg" />
            Save
          </Button>
          <Button className="w-[32%] gap-2 font-bold text-sm tracking-wide">
            <MdOutlinePublish className="text-lg" />
            Publish
          </Button>
        </div>
      </nav>
      <main className="flex flex-row items-start justify-between h-[87vh]">
        <section className="flex flex-col items-start px-8 py-6 w-[76%] h-full bg-repeat bg-white bg-[url(/paper.svg)]">
          <div
            id="dropZone"
            onDragOver={handleDragOver}
            className={`flex flex-col space-y-4 w-full h-full px-4 py-6 bg-[#eceef3]  border-gray-400 rounded-lg overflow-y-auto
              ${isDragging ? "border-4" : "border"}
              ${
                isDropElement
                  ? "items-start justify-start"
                  : "items-center justify-center"
              }`}
          >
            {isDropElement ? (
              elements.map((element, index) => {
                const ElementComponent = fieldComponents[element];
                return (
                  <ElementComponent
                    key={index}
                    handleRemove={handleDelete}
                    index={index}
                  />
                );
              })
            ) : (
              <h1 className="text-3xl font-bold">Drop here</h1>
            )}
          </div>
        </section>
        <section className="flex flex-col space-y-4 items-start w-[24%] h-full p-4 overflow-y-auto border-l border-gray-400">
          <h2 className="w-full pb-2 font-semibold border-b border-gray-400">
            Drag and drop elements
          </h2>
          <div className="flex flex-col w-full space-y-2">
            <h3 className="text-gray-600">Layout Elements</h3>
            <div className="flex flex-wrap w-full gap-2">
              <LayoutElement name="title" />
              <LayoutElement name="subtitle" />
              <LayoutElement name="separator" />
              <LayoutElement name="spacer" />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h3 className="text-gray-600">Form Fields</h3>
            <div className="flex flex-wrap w-full gap-2">
              <FormElement name="text" />
              <FormElement name="textarea" />
              <FormElement name="number" />
              <FormElement name="dropdown" />
              <FormElement name="checkbox" />
              <FormElement name="radiobox" />
              <FormElement name="date" />
              <FormElement name="time" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FormBuilder;
