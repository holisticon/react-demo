import React, { useState, FormEvent } from 'react';

/* eslint-disable-next-line */
export interface ProductSearchFormProps {
    onSearch: (queryString: string) => void
}

export const ProductSearchForm = ({ onSearch }: ProductSearchFormProps) => {

    const [queryString, setQueryString] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(queryString);
    };

    return (
        <form className="row form-inline" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3">
                <input type="text" className="form-control" placeholder="Search Catalog..." value={queryString} onChange={e => setQueryString(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Search Products</button>
        </form>
    )
};

export default ProductSearchForm;
