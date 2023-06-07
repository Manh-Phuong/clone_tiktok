import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    const [activeShow, setActiveShow] = useState(false);

    var navParam;
    const handleActive = (Param ) => {
        navParam = Param
    };
    useEffect(() => {
        setActiveShow(navParam);
    }, );

    return (
        <NavLink
            className={(nav) => {
                //setActiveShow(nav.isActive)
                handleActive(nav.isActive)
                return cx('menu-item', { active: nav.isActive });
            }}
            to={to}
        >
            {!activeShow && <span className={cx('icon')}>{icon}</span>}
            {activeShow && <span className={cx('active-icon')}>{activeIcon}</span>}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
