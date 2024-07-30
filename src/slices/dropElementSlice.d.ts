// src/slices/dropElementSlice.d.ts
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ElementName } from "../types/elementTypes"; // Adjust the path if needed

// Declare the module and its exports
declare module "../slices/dropElementSlice.js" {
  export const addElement: ActionCreatorWithPayload<ElementName, string>;
  // Add other exports here if needed
}
