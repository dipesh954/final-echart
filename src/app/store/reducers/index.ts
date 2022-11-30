import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromBrands from "./brands.reducers";

export interface BrandsState {
  brands: fromBrands.BrandsState;
}

export const reducers: ActionReducerMap<BrandsState> = {
  brands: fromBrands.reducer as any,
};

export const getBrandsAsState = createFeatureSelector<BrandsState>("brands");

//Brands State

export const getBrandsState = createSelector(
  getBrandsAsState,
  (state: BrandsState) => state.brands
);

export const getBrandsLoading = createSelector(
  getBrandsState,
  fromBrands.getBrandsLoading
);

export const getBrandsLoaded = createSelector(
  getBrandsState,
  fromBrands.getBrandsLoaded
);

export const getBrands = createSelector(getBrandsState, fromBrands.getBrands);
