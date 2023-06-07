import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem} from './Menu';
import routesConfig from '~/config/routes';
import { ForYouIcon, 
    ForYouActiveIcon, 
    FollowingIcon, 
    FollowingActiveIcon, 
    ExploreIcon, 
    ExploreActiveIcon, 
    LiveIcon, 
    LiveActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title = 'For You' to={routesConfig.home} icon={<ForYouIcon />} activeIcon={<ForYouActiveIcon />} />
                <MenuItem title = 'Following' to={routesConfig.following} icon={<FollowingIcon />} activeIcon={<FollowingActiveIcon />} />
                <MenuItem title = 'Explore' to={routesConfig.explore} icon={<ExploreIcon />} activeIcon={<ExploreActiveIcon />} />
                <MenuItem title = 'LIVE' to={routesConfig.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;