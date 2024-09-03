import React from 'react';
import { useNavigate } from 'react-router-dom';
// import cls from 'ListFavorites.module.scss'; // Создайте этот файл для стилизации, если необходимо
import { useSelector } from 'react-redux'; // Если вы используете Redux для хранения состояния избранных

const FavoritesPage = () => {
    const navigate = useNavigate();
    const favorites = useSelector(state => state.favorites); // Пример использования Redux для получения избранных автомобилей

    const handleCardClick = (id) => {
        navigate(`/car/${id}`);
    };

    return (
        <div className={cls.container}>
            <button onClick={() => navigate(-1)} className={cls.backButton}>Назад</button>
            <h1>Избранные автомобили</h1>
            <div className={cls.cards}>
                {favorites.length > 0 ? (
                    favorites.map((car) => (
                        <div key={car.id} className="w-1/3 px-1 mt-1 h-96 relative">
                            <div className="card-container" onClick={() => handleCardClick(car.id)}>
                                <img
                                    src={car.img_front}
                                    alt={car.title}
                                    className="card-image h-max"
                                />
                                <div className="card-gradient-top"></div>
                                <div className="card-info-top">
                                    <p className="text-lg">{car.title}</p>
                                    <p className="mt-2 text-sm">{car.price_day} Сом/сут.</p>
                                </div>
                                <div className="card-gradient-bottom"></div>
                                <div className="card-info-bottom">
                                    <div className="flex justify-between text-xs mt-4">
                                        <span>{car.volume} л.</span>
                                        <span>{car.power} л.с.</span>
                                        <span>{car.year} г.</span>
                                        <span>{car.fuel_type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Нет избранных автомобилей.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
