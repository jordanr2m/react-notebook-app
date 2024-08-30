import { useState } from 'react';
// Scoped styles
import styles from './ThemeSwitcher.module.css';
import { AiOutlineClose } from "react-icons/ai";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');
    const [isColorPicking, setIsColorPicking] = useState(false);

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
                        <input type='range' />
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
