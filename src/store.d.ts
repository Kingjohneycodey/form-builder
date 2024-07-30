import { EnhancedStore } from "@reduxjs/toolkit";

declare module "./store.js" {
  const store: EnhancedStore<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    elements: any;
  }>;
  export default store;
}
