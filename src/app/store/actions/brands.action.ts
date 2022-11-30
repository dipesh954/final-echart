import { Action } from "@ngrx/store";

export const LOAD_BRANDS = "[Brands] Load Brands"
export const LOAD_BRANDS_FAIL = "[Brands] Load Brands Fail"
export const LOAD_BRANDS_SUCCESS = "[Brands] Load Brands Success"

export class LoadBrands implements Action { readonly type = LOAD_BRANDS}

export class LoadBrandsFail implements Action {
     readonly type = LOAD_BRANDS_FAIL;
     constructor(public payload: any) {}
    }

    export class LoadBrandsSuccess implements Action {
        readonly type = LOAD_BRANDS_SUCCESS;
        constructor(public payload: any) {}
    }

export type BrandsActions = LoadBrands | LoadBrandsFail | LoadBrandsSuccess
