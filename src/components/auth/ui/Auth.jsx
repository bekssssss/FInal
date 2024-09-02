import {useCallback, useState} from 'react';

import cls from "./Auth.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {authSliceActions} from "../../../feature/slice/authSlice.js";
import {registerByEmail} from "../../../feature/service/registerByEmail.js";
import {loginByEmail} from "../../../feature/service/loginByEmail.js";

const Auth = ({setIsStateModal}) => {
    const [isLogin, setIsLogin] = useState(true)
    const data = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const onChange = useCallback((target) => {
        const {id: type, value: payload} = target
        dispatch(authSliceActions.set({type, payload}));
    }, [dispatch])

    const onSubmit = async (e) => {
        e.preventDefault();
        const {username, password, password2, email} = data
        const result = await dispatch(isLogin ? registerByEmail({
            username,
            password,
            password2,
            email
        }) : loginByEmail({username, password}))


        if (result.meta.requestStatus === "fulfilled") {
            setIsStateModal(false)
        }
    }

    return (
        <div className={cls.main}>
            {isLogin ? "Логин" : "Регистрация"}
            <form onSubmit={onSubmit}>
                <input placeholder="Имя/Никнейм" type="text" value={data.username} id="username"
                       onChange={(e) => onChange(e.target)}/>
                {isLogin ? <input placeholder="Почта/Email" type="text" value={data.email} id="email"
                                  onChange={(e) => onChange(e.target)}/> : ""}
                <input placeholder="Пороль" type="text" value={data.password} id="password"
                       onChange={(e) => onChange(e.target)}/>
                {isLogin ? <input placeholder="Еше раз пороль" type="text" value={data.password2} id="password2"
                        onChange={(e) => onChange(e.target)}/>:""}
                <button onClick={() => console.log("отпрвить")}>
                    отправить
                </button>
            </form>
            <button onClick={() => setIsLogin(prevState => !prevState)}>
                уже есть аккаунт
            </button>
        </div>
    );
};

export default Auth;