import React, { useEffect, useState } from 'react';
import cls from "./User.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../feature/service/getProfile";
import logo from '../../assets/Logotype.png';
import Modal from "react-modal";
import { authSliceActions } from "../../feature/slice/authSlice";
import updateProfile from "../../feature/service/UpdateProfileModal";
import axios from 'axios';

const UserPage = () => {
    const dispatch = useDispatch();
    const userDate = useSelector((state) => state.auth);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    const handleChange = (e) => {
        const { id: type, value: payload } = e.target;
        dispatch(authSliceActions.set({ type, payload }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({ email: userDate.email, username: userDate.username }));
        setIsModalOpen(false);
    };

    if (!userDate.successAuth) {
        return <div>Авторизуйтесь сначала</div>;
    }

    // Компонент для выпадающего списка Избранного
    const FavoriteDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [favoriteResponse, setFavoriteResponse] = useState(null); // Состояние для ответа от API

        const toggleDropdown = () => {
            setIsOpen((prev) => !prev);
        };

        const addToFavorites = async () => {
            try {
                const response = await axios.post('https://ash2521.pythonanywhere.com/cars/2/add_to_favorites/');
                setFavoriteResponse(response.data); // Обработка успешного ответа
            } catch (error) {
                console.error('Ошибка при добавлении в избранное:', error);
            }
        };

        return (
            <div className={cls.dropdown}>
                <button className={cls.button} onClick={toggleDropdown}>
                    Избранное
                    <span className={cls.arrow}>{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                    <ul className={cls.list}>
                        <li onClick={addToFavorites}>Добавить в избранное</li>
                        {/* Здесь можно рендерить полученные данные */}
                        {favoriteResponse && <li>{favoriteResponse.message}</li>}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <div className={cls.user}>
            <div className={cls.container}>
                <h1 className={'mt-32 font-bold text-4xl'}>Профиль</h1>
                <div className={cls.title}>
                    <img className={cls.logo} src={logo} alt=""/>
                    <div className={cls.info}>
                        <h2>Имя: {userDate.username}</h2>
                        <span>email: {userDate.email}</span>
                        <div onClick={() => setIsModalOpen(true)} className={cls.changeUser}>
                            <button>Изменить</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{
                    content: {
                        cursor: 'pointer',
                        width: '300px',
                        height: '200px',
                        margin: 'auto',
                        backgroundColor: '#333',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'center',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                }}>
                <form className={cls.form} onSubmit={handleSubmit}>
                    <input
                        placeholder="Имя/Username"
                        id="username"
                        type="text"
                        value={userDate.username}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Почта/Email"
                        id="email"
                        type="text"
                        value={userDate.email}
                        onChange={handleChange}
                    />
                    <button type="submit">Изменить</button>
                </form>
            </Modal>

            {/* Компонент выпадающего списка Избранное */}
            <FavoriteDropdown />
        </div>
    );
};

export default UserPage;
