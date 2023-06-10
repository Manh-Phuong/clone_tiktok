import classNames from 'classnames/bind';
import styles from './MainContent.module.scss';
import HomeContent, { HomeContentItem} from './HomeContent';
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

function MainContent() {
    return (
        <div className={cx('wrapper')}>
            <HomeContent>
                <HomeContentItem  />
            </HomeContent>

        </div>
    );
}

export default MainContent;