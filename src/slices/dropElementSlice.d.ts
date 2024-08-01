import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ElementName } from "../types/elementTypes";

declare module "../slices/dropElementSlice.js" {
  export const addElement: ActionCreatorWithPayload<ElementName, string>;
  export const removeElement: ActionCreatorWithPayload<number, string>;
  export const reorderElements: ActionCreatorWithPayload<ElementName[], string>;
  // Add other exports here if needed
}
