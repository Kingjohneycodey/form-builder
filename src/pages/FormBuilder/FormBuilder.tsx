// import { useParams } from "react-router-dom";
import { Button } from "../../components/ButtonComponent";
import { MdOutlinePublish, MdPreview } from "react-icons/md";
import { HiSaveAs } from "react-icons/hi";
import LayoutElement from "../../components/LayoutElement";
import FormElement from "../../components/FormElement";

const FormBuilder = () => {
  // const { id } = useParams();

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
        <section className="flex flex-col items-start px-8 py-6 w-[76%] h-full overflow-y-auto bg-repeat bg-white bg-[url(/paper.svg)]">
          <div className="flex flex-col w-full h-full p-4 bg-[#eceef3] border border-gray-400 rounded-lg"></div>
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
              <LayoutElement name="paragraph" />
              <LayoutElement name="separator" />
              <LayoutElement name="spacer" />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h3 className="text-gray-600">Form Elements</h3>
            <div className="flex flex-wrap w-full gap-2">
              <FormElement name="text" />
              <FormElement name="number" />
              <FormElement name="textarea" />
              <FormElement name="date" />
              <FormElement name="select" />
              <FormElement name="checkbox" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FormBuilder;
