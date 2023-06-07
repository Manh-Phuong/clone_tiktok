import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ items = [], children, hideOnClick = false, onChange = defaultFn }) {
    const [state, setState] = useState([{ data: items }]);
    const current = state[state.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            console.log('1');
                            setState((prev) => [...prev, item.children]);
                        } else if (item.DarkMode && item.title === 'Dark mode') {
                            item.iconRight = (
                                <div width="44px" height="24px" className={cx('mode', 'isDarkMode')}>
                                    <span width="20px" height="20px" className={cx('mode-btn-dark')}></span>
                                </div>
                            );
                            setState((prev) => [...prev]);
                            item.DarkMode = !item.DarkMode;
                        } else if (!item.DarkMode && item.title === 'Dark mode') {
                            item.iconRight = (
                                <div width="44px" height="24px" className={cx('mode')}>
                                    <span width="20px" height="20px" className={cx('mode-btn-light')}></span>
                                </div>
                            );
                            setState((prev) => [...prev]);
                            item.DarkMode = !item.DarkMode;
                        } else {
                            console.log('2');
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[-10, 6]}
            interactive
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            appendTo="parent"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {state.length > 1 && (
                            <HeaderMenu title="Language" onBack={() => setState(state.splice(0, state.length - 1))} />
                        )}
                        <div className={cx('menu-render-item')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setState((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
