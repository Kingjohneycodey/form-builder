import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ElementName } from "../types/elementTypes";

// Declare the module and its exports
declare module "../slices/dropElementSlice.js" {
  export const addElement: ActionCreatorWithPayload<ElementName, string>;
  // Add other exports here if needed
}
