import * as fromBrands from '../actions/brands.action'


export interface BrandsState {
    data : any[];
    loaded : boolean;
    loading : boolean;
}

export const initialState : BrandsState = {
    data : [
        {
            name  : 'ABC'
        }
    ],
    loaded : false,
    loading : false,
}

export function reducer (
    state = initialState,
    action : fromBrands.BrandsActions

) : BrandsState {
    switch(action.type) {
        case fromBrands.LOAD_BRANDS : {
            return {
                ...state,
                loading : true
            }
        }
        case fromBrands.LOAD_BRANDS_SUCCESS : {
            return {
                ...state,
                loading:false,
                loaded : true,
                data ,
            }
        }

        case fromBrands.LOAD_BRANDS_FAIL : {
            return {
                ...state,
                loading : false,
                loaded : false,
            }
        }
    }
    return state;
}
