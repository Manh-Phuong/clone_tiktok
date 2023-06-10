import classNames from 'classnames/bind';
import styles from './SidebarAccount.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function SidebarAccountItem({ data }) {
    var first_name, last_name, nickname, avatar, tick, followings_count, followers_count, likes_count;
    if (data && typeof data === 'object') {
        //console.log(Object.keys(data));
        //console.log(data['file_url']);
        first_name = data.first_name;
        last_name = data.last_name;
        nickname = data.nickname;
        avatar = data.avatar;
        tick = data.tick;
        followings_count = data.followings_count;
        followers_count = data.followers_count;
        likes_count = data.likes_count;
    } else {
        console.log('Invalid data object');
    }

    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview
                        first_name={first_name}
                        last_name={last_name}
                        nickname={nickname}
                        avatar={avatar}
                        tick={tick}
                        likes_count={likes_count}
                        followings_count = {followings_count}
                        followers_count = {followers_count}
                    />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                offset={[2, 3]}
                interactive
                delay={[500, 0]}
                zIndex={9999}
                placement="bottom-end"
                appendTo="parent"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} alt="avatar" src={avatar} />
                    <div className={cx('info')}>
                        <div className={cx('nickname')}>
                            <strong>{nickname}</strong>
                            {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                        </div>
                        <p className={cx('full-name')}>{`${first_name} ${last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SidebarAccountItem.propTypes = {};

export default SidebarAccountItem;
