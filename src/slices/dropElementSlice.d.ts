import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

declare module "../slices/dropElementSlice.js" {
  export const addElement: ActionCreatorWithPayload<{
    itemName: string;
    itemPosition: number;
  }>;
  export const removeElement: ActionCreatorWithPayload<number, string>;
  // Add other exports here if needed
}
