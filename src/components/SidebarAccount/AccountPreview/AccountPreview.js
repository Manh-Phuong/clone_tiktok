import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ first_name, last_name, nickname, avatar, tick, likes_count, followings_count, followers_count }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    alt="avatar"
                    src={avatar}
                />
                <Button primary className={cx('preview-btn')}>
                    {<p className={cx('follow-label')}>Follow</p>}
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('nickname')}>
                    <strong>{nickname}</strong>
                    {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </div>
                <p className={cx('full-name')}>{`${first_name} ${last_name}`}</p>
            </div>
            <div className={cx('footer')}>
                <strong className={cx('footer-number')}>{followers_count}</strong>
                <p className={cx('footer-label')}>Followers</p>
                <strong className={cx('footer-number')}>{likes_count}</strong>
                <p className={cx('footer-label')}>Likes</p>
            </div>
        </div>
    );
}

export default AccountPreview;
