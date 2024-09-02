import cls from "./Modal.module.scss"

const Modal = ({ref, children}) => {

    return (
        <div className={cls.main}>
            <div className={cls.content} ref={ref}>
                {children}
            </div>
        </div>
    );
};

export default Modal;