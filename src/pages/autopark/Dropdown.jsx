import React, { useState, useEffect } from 'react';
import './Dropdown.scss';

const Dropdown = ({ onBrandSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [brands, setBrands] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        fetch('https://ash2521.pythonanywhere.com/cars')
            .then(response => response.json())
            .then(data => {
                if (data && data.results && Array.isArray(data.results)) {
                    const uniqueBrands = [...new Set(data.results.map(car => car.brand))];
                    setBrands(uniqueBrands);
                } else {
                    console.error('Ожидался массив в поле results, но получен другой тип данных:', data);
                }
            })
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        const updatedOptions = selectedOptions.includes(value)
            ? selectedOptions.filter(option => option !== value)
            : [...selectedOptions, value];

        setSelectedOptions(updatedOptions);
        onBrandSelect(updatedOptions);
    };

    return (
        <div>
            <div className="dropdown">
                <button className="dropdown-btn" onClick={toggleDropdown}>
                    Марка {isOpen ? '↓' : '↑'}
                </button>
                {isOpen && (
                    <div className="dropdown-content">
                        {brands.map((brand) => (
                            <label key={brand}>
                                <input
                                    type="checkbox"
                                    value={brand}
                                    checked={selectedOptions.includes(brand)}
                                    onChange={handleOptionChange}
                                />
                                {brand}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
