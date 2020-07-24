import React from 'react';
import { ProductContext } from '../../state/search-results-context';
import { provideProduct } from '../../state/search-results-provider';
import ProductImage from '../../ui/product-image/product-image';
import ProductPrice from '../../ui/product-price/product-price';
/* eslint-disable-next-line */
export interface ProductDetailsProps { }

const ProductDetails = (props: ProductDetailsProps) => {

    return <ProductContext.Consumer>
        {product => product && <>
            <h1 className="mb-5">{product.productName}</h1>

            <div className="row align-items-start">
                <div className="col-4"><ProductImage product={product}></ProductImage></div>

                <div className="col-8 row align-items-center">
                    <p className="col-8 mb-0"><ProductPrice product={product}></ProductPrice></p>

                    <div className="col-4">FORM</div>
                    {/* <ngxp-add-to-shopping-cart-form
                className="col-4"
                [product]="product | toResourceUri"
            ></ngxp-add-to-shopping-cart-form> */}

                    <p className="col mt-5 description">{product.productDescription}</p>
                </div>
            </div>
        </>
        }
    </ProductContext.Consumer>
};

export default provideProduct(ProductDetails);
