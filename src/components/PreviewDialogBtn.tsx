

import { useSelector } from "react-redux";

type ElementType = { itemName: string; itemPosition: number };

function PreviewDialogBtn() {
    const elements = useSelector((state: any) => state.elements as ElementType[]);

    console.log(elements)


  return (
    <div>
        Preview
    </div>
  );
}

export default PreviewDialogBtn;
