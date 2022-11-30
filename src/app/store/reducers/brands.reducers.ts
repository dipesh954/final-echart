import * as fromBrands from "../actions/brands.action";

export interface BrandsState {
  data: any;
  loaded: boolean;
  loading: boolean;
}

export const initialState: BrandsState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromBrands.BrandsActions
): BrandsState {
  switch (action.type) {
    case fromBrands.LOAD_BRANDS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromBrands.LOAD_BRANDS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromBrands.LOAD_BRANDS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getBrandsLoading = (state: BrandsState) => state.loading;
export const getBrandsLoaded = (state: BrandsState) => state.loaded;
export const getBrands = (state: BrandsState) => state.data;
