import { useState } from 'react';
// Scoped styles
import styles from './ThemeSwitcher.module.css';
import { AiOutlineClose } from "react-icons/ai";

const ThemeSwitcher = () => {
    const [isColorPicking, setIsColorPicking] = useState(false);

    return (
        <aside className={styles.wrapper}>
            {isColorPicking ?
                (
                    <>
                        <button></button>
                        <input type='range' />
                    </>
                )
                : (
                    <div className={styles.btns}>
                        <button className='theme-btn'>Dark Mode</button>
                        <button className='theme-btn'>Choose Theme Color</button>
                    </div>
                )
            }
        </aside>
    )
}

export default ThemeSwitcher
