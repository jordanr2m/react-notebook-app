import { useEffect, useState } from 'react';
// Scoped styles
import styles from './ThemeSwitcher.module.css';
import { AiOutlineClose } from "react-icons/ai";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');
    const [hue, setHue] = useState('240');
    const [isColorPicking, setIsColorPicking] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme); // adds an atr to the html
    }, [theme]); // light/dark mode theme. Must pass it in here as a dependency since we use it in the fn

    return (
        <aside className={styles.wrapper}>
            {isColorPicking ?
                (
                    <>
                        <button
                        className={`theme-btn ${styles.close}`}
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
                        onInput={(e) => setHue(e.target.value)}/>
                    </>
                )
                : (
                    <div className={styles.btns}>
                        <button 
                        className='theme-btn'
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button className='theme-btn'
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
