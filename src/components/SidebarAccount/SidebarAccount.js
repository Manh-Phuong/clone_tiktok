import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarAccount.module.scss';
import PropTypes from 'prop-types';

import SidebarAccountItem from './SidebarAccountItem';
import * as accountServices from '~/services/accountServices';

const cx = classNames.bind(styles);

function SidebarAccount({ title }) {
    const [sideBarAccount, setSideBarAccount] = useState([]);
    const page = Math.floor(Math.random() * 31);
    const [currentPage, setCurrentPage] = useState([page, 5]);


    const [showCount, setShowCount] = useState(1);
    const [isShowMore, setIsShowMore] = useState(true);

    const handleMoreBtn = () => {
        setCurrentPage((prevPage) => {
            if (showCount <= 2) {
                setShowCount(prev => prev + 1);
                setIsShowMore(true);
                console.log('more')
                return prevPage[1] + 5;
            } else {
                setIsShowMore(false);
                return prevPage[1];
            }
        });
    };

    const handleLessBtn = () => {
        setCurrentPage((prevPage) => {
            if (showCount >= 0) {
                setShowCount(prev => prev - 1);
                setIsShowMore(false);
                return ;
            } else {
                setIsShowMore(true);
                return ;
            }
        });
    };

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await accountServices.search(currentPage[0], currentPage[1]);
                if (isShowMore) {
                    setSideBarAccount((prevData) => [...prevData, ...result]);
                } else {
                    setSideBarAccount((prevData) => {
                        const updatedData = [...prevData, ...result];
                        const trimmedData = updatedData.slice(0, updatedData.length - 5);
                        return trimmedData;
                    });
                }
            } catch (error) {
                // Xử lý lỗi khi gọi API
            }
        };

        if (currentPage !== 1) {
            fetchApi();
        }
    }, [currentPage]);

    // useEffect(() => {
    //     const fetchInitialData = async () => {
    //         try {
    //             const result = await homeServices.search('for-you', 1);
    //             setHomeVideosResult(result);
    //         } catch (error) {
    //             // Xử lý lỗi khi gọi API
    //         }
    //     };

    //     fetchInitialData();
    // }, []);

    return (
        <>
            <div className={cx('border-top')}></div>
            <div className={cx('wrapper')}>
                <p className={cx('title')}>{title}</p>
                {(sideBarAccount || []).map((res) => (
                    <SidebarAccountItem key={res.id} data={res} />
                ))}
                <SidebarAccountItem />
                {isShowMore ? (
                    <p className={cx('more-btn')} onClick={handleMoreBtn}>
                        See all
                    </p>
                ) : (
                    <p className={cx('less-btn')}>
                        See less
                    </p>
                )}
            </div>
        </>
    );
}

SidebarAccount.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SidebarAccount;
