import React, { useState } from 'react';
import './PriceFilter.scss';

const PriceFilter = ({ onPriceRangeSelect }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleMinPriceChange = (e) => setMinPrice(e.target.value);
    const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

    const applyPriceFilter = () => {
        onPriceRangeSelect({ minPrice: parseFloat(minPrice) || 0, maxPrice: parseFloat(maxPrice) || Infinity });
    };

    const toggleFilter = () => setIsOpen(!isOpen);

    return (
        <div className="price-filter">
            <button className="price-filter-btn" onClick={toggleFilter}>
                Фильтр по цене
            </button>
            <div className={`price-filter-content ${isOpen ? 'show' : ''}`}>
                <div>
                    <label>
                        <p className={'text-white'}>Минимальная цена:</p>
                        <input className={'text-white'} type="number" value={minPrice} onChange={handleMinPriceChange} />
                    </label>
                </div>
                <div>
                    <label>
                        <p className={'text-white'}>Максимальная цена:</p>
                        <input className={'text-white'} type="number" value={maxPrice} onChange={handleMaxPriceChange}/>
                    </label>
                </div>
                <button onClick={applyPriceFilter}>Применить</button>
            </div>
        </div>
    );
};

export default PriceFilter;
