import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import HomeContentItem from './HomeContentItem';
import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import Tippy from '@tippyjs/react/headless';

import * as homeServices from '~/services/homeServices';
import Button from '~/components/Button';
import { MobileIcon, PCIcon, UpIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HomeContent({ children }) {
    // const [homeVideosResult, setHomeVideosResult] = useState([]);

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await homeServices.search('for-you', 2);
    //         setHomeVideosResult(result);
    //     };

    //     fetchApi();
    // })

    const page = Math.floor(Math.random() * 31);
    var historyPage = [];
    historyPage.push(page);
    const [homeVideosResult, setHomeVideosResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(page);
    const [isLoading, setIsLoading] = useState(false);
    const [showApp, setShowApp] = useState(true);

    const handleScroll = () => {
        setShowApp(false);
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollY);
        setShowApp(scrollY < 100);
        if (
            !isLoading &&
            document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight
        ) {
            setCurrentPage((prevPage) => {
                if (!historyPage.includes(prevPage + 1)) {
                    historyPage.push(prevPage + 1);
                    if (prevPage <= 31) {
                        return prevPage + 1;
                    } else {
                        return 1;
                    }
                } else return 1;
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            try {
                const result = await homeServices.search('for-you', currentPage);
                setHomeVideosResult((prevData) => [...prevData, ...result]);
            } catch (error) {
                // Xử lý lỗi khi gọi API
            } finally {
                setIsLoading(false);
            }
        };

        if (currentPage !== 1) {
            fetchApi();
        }
    }, [currentPage]);

    // useEffect(() => {
    //     const fetchInitialData = async () => {
    //         setIsLoading(true);
    //         try {
    //             const result = await homeServices.search('for-you', 1);
    //             setHomeVideosResult(result);
    //         } catch (error) {
    //             // Xử lý lỗi khi gọi API
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchInitialData();
    // }, []);

    // const tippyInstance = useRef();

    // const handleClick = () => {
    //     if (tippyInstance.current) {
    //         tippyInstance.current.show();
    //     }
    // };

    // const tooltipContent = (
    //     <div className="custom-tooltip">
    //         <div className="tooltip-content">This is a custom tooltip with a width of 300px and height of 400px.</div>
    //     </div>
    // );

    const [showTippy, setShowTippy] = useState(false);

    const handleButtonClick = () => {
        setShowTippy(true);
    };

    const handleCancelClick = () => {
        setShowTippy(false);
    };

    const handleUpButtonClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
      

    return (
        <>
            <div>
                {(homeVideosResult || []).map((res) => (
                    <HomeContentItem key={res.id} data={res} />
                ))}
                {/* {isLoading && <p>Loading...</p>} */}
                {/* <HomeContentItem /> */}
            </div>
            <div className={cx('app-btn', { showApp: showApp })}>
                {/* <div onClick={handleClick}>
                    
                </div> */}
                {showTippy && (
                    <Tippy
                        offset={[-10, 6]}
                        delay={[0, 700]}
                        interactive
                        //hideOnClick={hideOnClick}
                        onClickOutside={() => setShowTippy(false)}
                        placement="top-start"
                        appendTo="parent"
                    >
                        <div className={cx('download-app')} tabIndex="-1">
                            <div className={cx('download-item')}>
                                <PCIcon />
                                <span className={cx('download-label')}>Download for PC</span>
                            </div>
                            <span className={cx('border-top')}></span>
                            <div className={cx('download-item')}>
                                <MobileIcon />
                                <span className={cx('download-label')}>Download for Mobile</span>
                            </div>
                            <FontAwesomeIcon className={cx('cancel-download')} icon={faXmark} onClick={handleCancelClick}/>
                        </div>
                    </Tippy>
                )}
                <Button rounded className={cx('get-app')} onClick={handleButtonClick}>
                    Get app
                </Button>
                <button className={cx('up-btn')} onClick={handleUpButtonClick}>
                    <UpIcon />
                </button>
            </div>
        </>
    );
}

HomeContent.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default HomeContent;
