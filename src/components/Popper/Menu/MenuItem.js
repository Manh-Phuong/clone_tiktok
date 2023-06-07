import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={cx('menu-item', { seperato: data.seperato })}
            leftIcon={data.icon}
            to={data.to}
            rightIcon={data.iconRight}
            onClick={onClick}
        >
            {data.title} {data.nation && `(${data.nation})`}
        </Button>
    );
}

export default MenuItem;
