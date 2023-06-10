import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import routesConfig from '~/config/routes';
import {
    ForYouIcon,
    ForYouActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SidebarAccount from '~/components/SidebarAccount/SidebarAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={routesConfig.home}
                    icon={<ForYouIcon />}
                    activeIcon={<ForYouActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={routesConfig.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={routesConfig.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={routesConfig.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SidebarAccount title="Suggested accounts" />
            {/* <SidebarAccount title="Suggested accounts" /> */}
            <div className={cx('border-top')}></div>
            <div className={cx('footer-sidebar')}>
                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">Giới thiệu</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Bảng tin</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Liên hệ</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Sự nghiệp</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">ByteDance</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">TikTok for Good</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Quảng cáo</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">Developers</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Minh bạch</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">TikTok Rewards</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">TikTok Embeds</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">Trợ giúp</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">An toàn</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Diều khoản</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">Quyền riêng tư</a>
                    </li>
                    <li>
                        <a className={cx('link-label')} href="/">Cổng thông tin Tác giả</a>
                    </li>
                </ul>

                <ul className={cx('footer-row')}>
                    <li>
                        <a className={cx('link-label')} href="/">Hướng dẫn Cộng đồng</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
