import React from 'react';
import './favorite.scss';

const Favorites = ({ cars = [], favorites = [], removeFromFavorites }) => {
    if (!Array.isArray(cars) || !Array.isArray(favorites)) {
        return <p>Ошибка: Неверные данные.</p>;
    }

    const favoriteCars = cars.filter(car => favorites.includes(car.id));

    return (
        <div className="favorites">
            <h2>Избранные автомобили</h2>
            {favoriteCars.length === 0 ? (
                <p>Нет избранных автомобилей.</p>
            ) : (
                <ul className="favorites-list">
                    {favoriteCars.map((car) => (
                        <li key={car.id} className="favorites-item">
                            <div className="car-info">
                                <h3>{car.name}</h3>
                                <p>{car.price} $</p>
                            </div>
                            <button
                                className="remove-button"
                                onClick={() => removeFromFavorites(car.id)}
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
