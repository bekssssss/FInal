import cls from './categoryList.module.css'
import Gwagon from '../assets/GElik.webp'
import Cabrio from '../assets/Cabrio.webp'
import Sportcar from '../assets/Sportcar.webp'
import Premium from '../assets/Premium.webp'
import Coupe from '../assets/Coupe.webp'
import Electro from '../assets/Electro.webp'


const CategoryList = () => {
    return (
        <div className={cls.topText}>
          <h1>
              Категории автомобилей
          </h1>
            <div className={cls.cards}>
                <button className={cls.card}>
                    <p>Внедорожники</p>
                    <img src={Gwagon} alt=""/>
                </button>
                <button className={cls.card}>
                    <p>Кабриолеты</p>
                    <img src={Cabrio} alt=""/>
                </button>
                <button className={cls.card}>
                    <p>Спорткары</p>
                    <img src={Sportcar} alt=""/>
                </button>
                <button className={cls.card}>
                    <p>Премиум</p>
                    <img src={Premium} alt=""/>
                </button>
                <button className={cls.card}>
                    <p>Купе</p>
                    <img src={Coupe} alt=""/>
                </button>
                <button className={cls.card}>
                    <p>Электрокары</p>
                    <img src={Electro} alt=""/>
                </button>
            </div>
            <div className={cls.last}>
                <button className={cls.allPark}>
                    <p> Весь Автопарк </p>
                    <p className={cls.next}> > </p>
                </button>
            </div>
        </div>
    );
};

export default CategoryList;