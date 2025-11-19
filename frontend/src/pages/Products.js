import React from 'react';

const Products = () => {
    const products = [
        { id: 1, name: 'Apple', category: 'Food' },
        { id: 2, name: 'Banana', category: 'Food' },
        { id: 3, name: 'Chemicals A', category: 'Chemistry' },
        { id: 4, name: 'Chemicals B', category: 'Chemistry' },
    ];

    return (
        <div>
            <h1>Products Catalog</h1>
            <h2>Food Items</h2>
            <ul>
                {products.filter(p => p.category === 'Food').map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <h2>Chemistry Items</h2>
            <ul>
                {products.filter(p => p.category === 'Chemistry').map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;