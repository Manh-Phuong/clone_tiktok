import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchServices';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        //setLoading(true);

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));

        // request.get('users/search', {
        //         params: {
        //             q: debounce,
        //             type: 'less'
        //         }
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));

        const fetchApi = async () => {
            //setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResult(result);
            //setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    // set time loading
    useEffect(() => {
        var loadingTime
        if(debounce !== '') {
            setLoading(true);
            loadingTime = setTimeout(() => {
                setLoading(false);
            }, 400); 
        }
        return () => {
            clearTimeout(loadingTime)}
    }, [debounce])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    return (
        <HeadlessTippy
            visible={showResult && (searchResult ? searchResult.length > 0 : []) }
            interactive
            appendTo="parent"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {(searchResult || []).map((res) => (
                            <AccountItem key={res.id} data={res} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={searchRef}
                    value={searchValue}
                    onChange={(e) => {
                        if (!e.target.value.startsWith(' ')) {
                            setSearchValue(e.target.value);
                        }
                    }}
                    onFocus={() => setShowResult(true)}
                    placeholder="Tìm kiếm"
                ></input>
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        {/* <FontAwesomeIcon icon={faSpinner} className="fa-spin"></FontAwesomeIcon> */}
                    </button>
                )}
                <span className={cx('border-column')}></span>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
