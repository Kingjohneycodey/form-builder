import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const TitleField = () => {
  const [title, setTitle] = useState<string>("Enter a Title");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative flex">
      <div
        className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
          isFocused
            ? "border-l-4 border-dark-green"
            : "border-l-4 border-gray-300"
        }`}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full p-2 text-3xl font-bold border-none outline-none"
          placeholder="Enter a Title"
          required
        />
      </div>
      <div className="flex items-center justify-center absolute top-0 right-0 z-10 w-[40px] h-full bg-oxblood border-r rounded-r-md hover:bg-oxblood/85">
        <RiDeleteBin5Fill className="text-white" />
      </div>
    </div>
  );
};

export const SubtitleField = () => {
  const [subTitle, setSubTitle] = useState<string>("Enter a Subtitle");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-gray-300"
      }`}
    >
      <input
        type="text"
        name={subTitle}
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 text-xl font-bold border-none outline-none"
        placeholder="Enter a Subtitle"
        required
      />
    </div>
  );
};

export const SeparatorField = () => {
  return <div className="my-4 border border-gray-400"></div>;
};

export const SpacerField = () => {
  return (
    <>
      <br />
    </>
  );
};

export const TextField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [text, setText] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-gray-300"
      }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      <input
        type="text"
        name={text}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 text-base border-none outline-none"
        placeholder="Enter your answer"
        required
      />
    </div>
  );
};

export const TextareaField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [textarea, setTextarea] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-gray-300"
      }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      <textarea
        name="textarea"
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 text-base border-none outline-none resize-none"
        placeholder="Enter your long text here"
        rows={5}
        required
      />
    </div>
  );
};

export const NumberField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [number, setNumber] = useState<number | string>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-gray-300"
      }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 text-base border-none outline-none"
        placeholder="Enter a number"
        min={0}
        required
      />
    </div>
  );
};

export const DropdownField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [newOption, setNewOption] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleAddOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-gray-300"
      }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full p-2 text-base border-none outline-none"
        required
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex mt-2">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full p-2 text-base border border-gray-300 outline-none rounded-l-md"
          placeholder="Add new option"
        />
        <button
          onClick={handleAddOption}
          className="p-2 text-white bg-dark-green rounded-r-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export const CheckboxField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [checkboxes, setCheckboxes] = useState<
    Array<{ id: number; label: string; checked: boolean }>
  >([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [newCheckboxLabel, setNewCheckboxLabel] = useState<string>("");

  const handleCheckboxChange = (id: number) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleAddCheckbox = () => {
    if (newCheckboxLabel.trim() === "") return;

    const newCheckbox = {
      id: Date.now(),
      label: newCheckboxLabel,
      checked: false,
    };

    setCheckboxes([...checkboxes, newCheckbox]);
    setNewCheckboxLabel("");
  };

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out 
     ${
       isFocused ? "border-l-4 border-dark-green" : "border-l-4 border-gray-300"
     }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="flex items-center w-full py-2">
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
            className="mr-2 border-none outline-none"
          />
          <p className="text-sm font-medium text-gray-600">{checkbox.label}</p>
        </div>
      ))}
      <div className="flex mt-2">
        <input
          type="text"
          value={newCheckboxLabel}
          onChange={(e) => setNewCheckboxLabel(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Add new checkbox"
          className="flex-grow p-2 mr-2 border rounded-md outline-none"
        />
        <button
          onClick={handleAddCheckbox}
          className="px-4 py-2 text-white rounded-md bg-dark-green"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export const RadioField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [radioButtons, setRadioButtons] = useState<
    Array<{ id: number; label: string }>
  >([]);
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);
  const [newRadioLabel, setNewRadioLabel] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleRadioChange = (id: number) => {
    setSelectedRadio(id);
  };

  const handleAddRadioButton = () => {
    if (newRadioLabel.trim() === "") return;

    const newRadioButton = {
      id: Date.now(),
      label: newRadioLabel,
    };

    setRadioButtons([...radioButtons, newRadioButton]);
    setNewRadioLabel("");
  };

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out 
      ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-gray-300"
      }
    `}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      {radioButtons.map((radioButton) => (
        <div key={radioButton.id} className="flex items-center w-full py-2">
          <input
            type="radio"
            name="radioGroup"
            checked={selectedRadio === radioButton.id}
            onChange={() => handleRadioChange(radioButton.id)}
            className="mr-2 border-none outline-none"
          />
          <p className="text-sm font-medium text-gray-600">
            {radioButton.label}
          </p>
        </div>
      ))}
      <div className="flex mt-2">
        <input
          type="text"
          value={newRadioLabel}
          onChange={(e) => setNewRadioLabel(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Add new radio button"
          className="flex-grow p-2 mr-2 border rounded-md outline-none"
        />
        <button
          onClick={handleAddRadioButton}
          className="px-4 py-2 text-white rounded-md bg-dark-green"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export const DateField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [date, setDate] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-transparent"
      }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 text-base border-none outline-none"
        placeholder="Enter a Date"
        required
      />
    </div>
  );
};

export const TimeField = () => {
  const [question, setQuestion] = useState<string>("Enter a question");
  const [time, setTime] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col w-full p-4 bg-white rounded-md border transition-all duration-300 ease-in-out ${
        isFocused
          ? "border-l-4 border-dark-green"
          : "border-l-4 border-transparent"
      }`}
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="mb-2 text-base font-medium text-gray-600 border-none outline-none"
        placeholder="Enter a question"
        required
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 text-base border-none outline-none"
        required
      />
    </div>
  );
};
