import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faKeyboard,
    faGear,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    faMoon,
    faCircleQuestion,
    faUser,
    faBookmark,
    faMessage,
    faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
    MessagesIcon,
    InboxIcon,
    CoinsIcon,
    KeyBoardIcon,
    DarkModedIcon,
    SettingsIcon,
    LanguageIcon,
    FeedBackIcon,
} from '~/components/Icons/index';
import Search from '~/layouts/components/Search';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Header() {
    //const [isDarkMode, setIsDarkMode] = useState(false);
    const currentUser = true;

    var isDarkMode = true;

    const MENU_ITEMS = [
        {
            // icon: (
            //     <img
            //         src={images.menuIconLanguage}
            //         alt="icon language"
            //         style={{ scale: '1.3', display: 'flex', alignItems: 'center' }}
            //     />
            // ),
            icon: <LanguageIcon />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        title: 'English',
                        code: 'en',
                        nation: '',
                    },
                    {
                        type: 'language',
                        title: 'Tiếng Việt',
                        code: 'vn',
                        nation: 'Việt Nam',
                    },
                    {
                        type: 'language',
                        title: 'العربية',
                        code: '',
                        nation: '',
                    },
                    {
                        type: 'language',
                        title: 'বাঙ্গালি ',
                        code: '',
                        nation: 'ভারত',
                    },
                    {
                        type: 'language',
                        title: 'Cebuano',
                        code: '',
                        nation: 'Pilipinas',
                    },
                    {
                        type: 'language',
                        title: 'Deutsch',
                        code: '',
                        nation: '',
                    },
                    {
                        type: 'language',
                        title: 'Ελληνικά',
                        code: '',
                        nation: 'Ελλάδα',
                    },
                    {
                        type: 'language',
                        title: 'Español',
                        code: '',
                        nation: '',
                    },
                    {
                        type: 'language',
                        title: 'Suomi',
                        code: '',
                        nation: 'Suomi',
                    },
                    {
                        type: 'language',
                        title: 'Filipino',
                        code: '',
                        nation: 'Pilipinas',
                    },
                    {
                        type: 'language',
                        title: 'Français',
                        code: '',
                        nation: '',
                    },
                    {
                        type: 'language',
                        title: 'Magyar',
                        code: '',
                        nation: 'Magyarország',
                    },
                    {
                        type: 'language',
                        title: '日本語',
                        code: '',
                        nation: '日本',
                    },
                    {
                        type: 'language',
                        title: 'Polski',
                        code: '',
                        nation: 'Polska',
                    },
                ],
            },
        },
        {
            // icon: <FontAwesomeIcon icon={faCircleQuestion} style={{ fontSize: '18px' }} />,
            icon: <FeedBackIcon />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            // icon: <FontAwesomeIcon icon={faKeyboard} style={{ fontSize: '16px' }} />,
            icon: <KeyBoardIcon />,
            title: 'Keyboard shortcuts',
        },
        {
            // icon: <FontAwesomeIcon icon={faMoon} style={{ fontSize: '22px' }} />,
            icon: <DarkModedIcon />,
            iconRight: (
                <div width="44px" height="24px" className={cx('mode')}>
                    <span width="20px" height="20px" className={cx('mode-btn')}></span>
                </div>
            ),
            title: 'Dark mode',
            DarkMode: isDarkMode,
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} style={{ fontSize: '18px' }} />,
            title: 'View profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '18px' }} />,
            title: 'Favorites',
        },
        {
            // icon: <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: '18px' }} />,
            icon: <CoinsIcon />,
            title: 'Get Coins',
        },
        {
            // icon: <FontAwesomeIcon icon={faGear} style={{ fontSize: '18px' }} />,
            icon: <SettingsIcon />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightToBracket} style={{ fontSize: '18px' }} />,
            title: 'Log out',
            seperato: true,
        },
    ];

    const handleMenuChange = (item) => {
        switch (item.type) {
            case 'language':
                break;
            default:
                return new Error('handleMenuChange type');
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    <Button href="https://tiktok.com/upload" upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('messages-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('inbox-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            {!currentUser && <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>}
                            {currentUser && (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://sp.yimg.com/ib/th?id=OIP.hwd5nqbtu8La9yZlXfNZXwCoEs&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
                                    alt="avatar profile"
                                ></Image>
                            )}
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
