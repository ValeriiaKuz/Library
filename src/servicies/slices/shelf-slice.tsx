import { bookForShelfType } from "../types/shelf-types/shelf-types";
type shelfType = {
  worldClassicShelf: bookForShelfType[];
  russianClassicShelf: bookForShelfType[];
  PulitzerShelf: bookForShelfType[];
  isLoading: boolean;
  isError: boolean;
};
//
// const initialState: shelfType = {
//   worldClassicShelf: [],
//   russianClassicShelf: [],
//   PulitzerShelf: [],
//   isLoading: false,
//   isError: false,
// };
// const shelfSlice = createSlice({
//   name: "shelfSlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchShelf.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(fetchShelf.fulfilled, (state, action) => {
//         if (action.meta.arg === Shelf["Мировая классика"]) {
//           state.worldClassicShelf = action.payload;
//         }
//         if (action.meta.arg === Shelf["Лауреаты пулитцеровской премии"]) {
//           state.PulitzerShelf = action.payload;
//         }
//         if (action.meta.arg === Shelf["Классическая русская литература"]) {
//           state.russianClassicShelf = action.payload;
//         }
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(fetchShelf.rejected, (state) => {
//         state.isLoading = false;
//         state.isError = true;
//       });
//   },
// });
//
// export default shelfSlice.reducer;
