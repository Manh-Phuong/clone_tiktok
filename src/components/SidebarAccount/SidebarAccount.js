import classNames from 'classnames/bind';
import styles from './SidebarAccount.module.scss';
import PropTypes from 'prop-types';
import SidebarAccountItem from './SidebarAccountItem';

const cx = classNames.bind(styles);

function SidebarAccount({ title }) {
    return (
        <>
            <div className={cx('border-top')}></div >
            <div className={cx('wrapper')}>
                <p className={cx('title')}>{title}</p>
                    <SidebarAccountItem />
                    <SidebarAccountItem />
                    <SidebarAccountItem />
                    <SidebarAccountItem />
                    <SidebarAccountItem />
                <p className={cx('mort-btn')}>See all</p>
            </div>
        </>
    );
}

SidebarAccount.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SidebarAccount;
