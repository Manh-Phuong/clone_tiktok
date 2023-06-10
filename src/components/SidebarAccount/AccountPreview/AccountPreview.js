import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    alt="avatar preview"
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/850df4c51191c11100d8aa62251e9bcf.jpeg?x-expires=1686297600&x-signature=hEq9ueW4kNLxIouvH%2FjR8QkIGBQ%3D"
                />
                <Button primary className={cx('preview-btn')}>{<p className={cx('follow-label')}>Follow</p>}</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('nickname')}>
                    <strong>manhphuong2311</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </div>
                <p className={cx('full-name')}>Nguyễn Mạnh Phương</p>
            </div>
            <div className={cx('footer')}>
                <strong className={cx('footer-number')}>9.2M</strong>
                <p className={cx('footer-label')}>Followers</p>
                <strong className={cx('footer-number')}>780.6M</strong>
                <p className={cx('footer-label')}>Likes</p>
            </div>
        </div>
    );
}

export default AccountPreview;
