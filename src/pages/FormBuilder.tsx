import { Button } from "../components/ButtonComponent.js";
import { MdOutlinePublish, MdPreview } from "react-icons/md";
import { HiSaveAs } from "react-icons/hi";
import DraggableField from "../components/DraggableField.js";
import DropArea from "../components/DropArea.js";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addElement, replaceElement } from "../slices/dropElementSlice";

type ElementType = { itemName: string; itemPosition: number };

const FormBuilder = () => {
  const [activeId, setActiveId] = useState<any>(null);
  const [replaceMode, setReplaceMode] = useState<boolean>(false);
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
  const [isOverDropArea, setIsOverDropArea] = useState<boolean>(false);
  const dispatch = useDispatch();
  const elements = useSelector((state: any) => state.elements as ElementType[]);

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    if (isOverDropArea) {
      if (replaceMode && replaceIndex !== null) {
        dispatch(
          replaceElement({ index: replaceIndex, itemName: event.active.id })
        );
        setReplaceMode(false);
        setReplaceIndex(null);
      } else {
        const newPosition = elements.length + 1;
        const elementName = event.active.id;
        dispatch(
          addElement({ itemName: elementName, itemPosition: newPosition })
        );
      }
    }
    setActiveId(null);
    setIsOverDropArea(false);
  };

  const handleReplaceMode = (index: number) => {
    setReplaceMode(!replaceMode);
    setReplaceIndex(index);
  };

  const handleDropArea = (isOver: boolean) => {
    setIsOverDropArea(isOver);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
            <DropArea
              onDrop={handleDragEnd}
              handleReplaceMode={handleReplaceMode}
              replaceIndex={replaceIndex}
              replaceMode={replaceMode}
              handleDropArea={handleDropArea}
            />
          </section>
          <section className="flex flex-col space-y-4 items-start w-[24%] h-full p-4 overflow-y-auto border-l border-gray-400">
            <h2 className="w-full pb-2 font-semibold border-b border-gray-400">
              Drag and drop elements
            </h2>
            <div className="flex flex-col w-full space-y-2">
              <h3 className="text-gray-600">Layout Elements</h3>
              <div className="flex flex-wrap w-full gap-2">
                <DraggableField name="title" />
                <DraggableField name="subtitle" />
                <DraggableField name="separator" />
                <DraggableField name="spacer" />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <h3 className="text-gray-600">Form Fields</h3>
              <div className="flex flex-wrap w-full gap-2">
                <DraggableField name="text" />
                <DraggableField name="textarea" />
                <DraggableField name="number" />
                <DraggableField name="dropdown" />
                <DraggableField name="checkbox" />
                <DraggableField name="radiobox" />
                <DraggableField name="date" />
                <DraggableField name="time" />
              </div>
            </div>
          </section>
        </main>
        <DragOverlay>
          {activeId ? <DraggableField name={activeId} /> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

export default FormBuilder;
