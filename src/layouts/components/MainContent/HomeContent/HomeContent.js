import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import HomeContentItem from './HomeContentItem';

import * as homeServices from '~/services/homeServices';

function HomeContent({ children }) {
    // const [homeVideosResult, setHomeVideosResult] = useState([]);

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await homeServices.search('for-you', 2);
    //         setHomeVideosResult(result);
    //     };

    //     fetchApi();
    // })

    const [homeVideosResult, setHomeVideosResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleScroll = () => {
        if (!isLoading && document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
            setCurrentPage((prevPage) => prevPage + 1);
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
    
    useEffect(() => {
        const fetchInitialData = async () => {
            setIsLoading(true);
            try {
                const result = await homeServices.search('for-you', 1);
                setHomeVideosResult(result);
            } catch (error) {
                // Xử lý lỗi khi gọi API
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchInitialData();
    }, []);
    
    

    return (
        <div>
            {(homeVideosResult || []).map((res) => (
                <HomeContentItem key={res.id} data={res} />
            ))}
            {/* {isLoading && <p>Loading...</p>} */}
            {/* <HomeContentItem /> */}
        </div>
    );
}

HomeContent.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default HomeContent;
