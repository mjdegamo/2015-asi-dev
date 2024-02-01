import { createReducer, on } from "@ngrx/store"
import { ProductsAPIActions, ProductsPageActions } from "./products.actions"
import { Product } from "../product.model"

export interface ProductState {
    showProductCode: boolean;
    loading: boolean;
    products: Product[];
    errorMessage: string;
}

const initialState: ProductState = {
    showProductCode: true,
    loading: false,
    products: [],
    errorMessage: ''
}

export const productsReducer = createReducer(
    initialState,
    on(ProductsPageActions.toggleShowProductCode, state => ({
        ...state,
        showProductCode: !state.showProductCode
    })),
    on(ProductsPageActions.loadProducts, state => ({
        ...state,
        loading: true,
        products: [],
        errorMessage: ''
    })),
    on(ProductsAPIActions.productsLoadedSuccess, (state, { products }) => ({
        ...state,
        loading: false,
        products
    })),
    on(ProductsAPIActions.productsLoadedFail, (state, { message }) => ({
        ...state,
        products: [],
        errorMessage: message,
        loading: false,
    })),
    on(ProductsPageActions.addProduct, (state) => ({
        ...state,
        loading: true,
        errorMessage: '',
    })),
    on(ProductsAPIActions.productsAddedSuccess, (state, { product }) => ({
        ...state,
        loading: false,
        products: [...state.products, product]
    })),
    on(ProductsAPIActions.productsAddedFail, (state, { message }) => ({
        ...state,
        loading: false,
        errorMessage: message
    })),
    on(ProductsPageActions.updateProduct, (state) => ({
        ...state,
        loading: true,
        errorMessage: '',
    })),
    on(ProductsAPIActions.productsUpdatedSuccess, (state, { product }) => ({
        ...state,
        loading: false,
        products: state.products.map(existingProduct =>
            existingProduct.id === product.id ? product : existingProduct
        )
    })),
    on(ProductsAPIActions.productsUpdatedFail, (state, { message }) => ({
        ...state,
        loading: false,
        errorMessage: message
    })),
    on(ProductsPageActions.deleteProduct, (state) => ({
        ...state,
        loading: true,
        errorMessage: '',
    })),
    on(ProductsAPIActions.productsDeletedSuccess, (state, { id }) => ({
        ...state,
        loading: false,
        products: state.products.filter(existingProduct =>
            existingProduct.id !== id
        )
    })),
    on(ProductsAPIActions.productsDeletedFail, (state, { message }) => ({
        ...state,
        loading: false,
        errorMessage: message
    })),

)