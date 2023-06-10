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

function SidebarAccountItem() {

    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

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
                        <Image
                            className={cx('avatar')}
                            alt="avatar sidebar"
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/850df4c51191c11100d8aa62251e9bcf.jpeg?x-expires=1686297600&x-signature=hEq9ueW4kNLxIouvH%2FjR8QkIGBQ%3D"
                        />
                        <div className={cx('info')}>
                            <div className={cx('nickname')}>
                                <strong>manhphuong2311</strong>
                                <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                            </div>
                            <p className={cx('full-name')}>Nguyễn Mạnh Phương</p>
                        </div>
                    </div>
            </Tippy>
        </div>
    );
}

SidebarAccountItem.propTypes = {};

export default SidebarAccountItem;
