import { useState, useContext } from 'react';
import DataContext from '../context/DataContext.js';
import styles from './ThemeSwitcher.module.css'; // Scoped styles
import { AiOutlineClose } from "react-icons/ai";


const ThemeSwitcher = () => {
    const { hue, setHue, theme, setTheme } = useContext(DataContext);
    const [isColorPicking, setIsColorPicking] = useState(false);

    return (
        <aside className={`${styles.wrapper} ${isColorPicking ? `${styles.themePickerOpen}` : ``}`}>
            {isColorPicking ?
                (
                    <>
                        <button
                            className={`${styles.themeBtn} ${styles.close}`}
                            aria-label='Close color picking mode'
                            onClick={() => setIsColorPicking(false)}>
                            <AiOutlineClose />
                        </button>
                        <input
                            className={styles.picker}
                            type='range'
                            // hsl goes from 0 to 360, use as min & max 
                            min='0'
                            max='360'
                            aria-label='Change color theme slider'
                            value={hue}
                            onInput={(e) => setHue(e.target.value)} />
                    </>
                )
                : (
                    <div className={styles.btns}>
                        <button
                            className= {styles.themeBtn}
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button className={styles.themeBtn}
                            onClick={() => setIsColorPicking(true)}>
                            Choose Theme Color
                        </button>
                    </div>
                )
            }
        </aside>
    )
}

export default ThemeSwitcher
