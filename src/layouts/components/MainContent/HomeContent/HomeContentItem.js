import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown, faChevronUp, faCommentDots, faMusic } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
// import AccountPreview from './AccountPreview';
import Button from '~/components/Button';
import {
    CommentIcon,
    LikeIcon,
    MarkIcon,
    ShareIcon,
    MusicIcon,
    DipIcon,
    SendIcon,
    FacebookIcon,
    WhatAppIcon,
    CopyIcon,
    TwitterIcon,
    LinkedInIcon,
    RedditIcon,
    TelegramIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function HomeContentItem({ data }) {
    var file_url,
        music,
        is_like,
        likes_count,
        comments_count,
        shares_count,
        description,
        first_name,
        last_name,
        nickname,
        avatar,
        tick;
    if (data && typeof data === 'object') {
        //console.log(Object.keys(data));
        //console.log(data['file_url']);
        file_url = data['file_url'];
        music = data.music;
        is_like = data.is_like;
        likes_count = data.likes_count;
        comments_count = data.comments_count;
        shares_count = data.shares_count;
        description = data.description;
        first_name = data.user.first_name;
        last_name = data.user.last_name;
        nickname = data.user.nickname;
        avatar = data.user.avatar;
        tick = data.user.tick;
    } else {
        console.log('Invalid data object');
    }
    const [showShare, setShowShare] = useState(false);
    const handleShowShare = () => {
        setShowShare(true);
    };
    const handleHiddenShare = () => {
        setShowShare(false);
    };

    // const videoRef = useRef(null);
    // const [playVideo, setPlayVideo] = useState(false);

    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5, // Tỷ lệ màn hình hiển thị video, 0.5 = 50%
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting && playVideo) {
    //                 // Nếu video hiển thị trên màn hình, bật phát tự động
    //                 videoRef.current.play();
    //             } else {
    //                 // Nếu video không hiển thị trên màn hình, tạm dừng phát
    //                 videoRef.current.pause();
    //             }
    //         });
    //     }, options);

    //     observer.observe(videoRef.current);

    //     return () => {
    //         observer.unobserve(videoRef.current);
    //     };
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <div>
                <Image className={cx('avatar')} src={avatar} />
            </div>
            <div className={cx('content')}>
                <div className={cx('header-post')}>
                    <div className={cx('author')}>
                        <a className={cx('author-link')} href="/">
                            <h3 className={cx('nick-name')}>{nickname}</h3>
                            {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                            <h4 className={cx('full-name')}>{`${first_name} ${last_name}`}</h4>
                        </a>
                    </div>
                    <Button className={cx('button')} small>
                        {<p className={cx('follow-label')}>Follow</p>}
                    </Button>
                    <div className={cx('tag')}>
                        <span className={cx('tag-name')}>
                            {description.split(' ').map((word, index) =>
                                word.startsWith('#') ? (
                                    <span key={index}>
                                        <a className={cx('tag-link')} href="/">
                                            <strong className={cx('tag-link-label')}>{word} </strong>
                                        </a>
                                    </span>
                                ) : (
                                    word + ' '
                                ),
                            )}
                        </span>
                    </div>
                    {!!music && (
                        <div className={cx('video-music')}>
                            {/* <FontAwesomeIcon icon={faMusic} /> */}
                            <MusicIcon />
                            <a className={cx('video-music-label')} href="/">
                                {music}
                            </a>
                        </div>
                    )}
                </div>
                <div className={cx('body-post')}>
                    <div className={cx('video-post')}>
                        {/* <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/lcPHEC2AIe0"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe> */}
                        {/* <video ref={videoRef} className={cx('video-post-source')} loop controls> */}
                        <video className={cx('video-post-source')} loop controls>
                            {/* <source src="https://files.fullstack.edu.vn/f8-tiktok/videos/1912-6413eb55ed5ec.mp4" /> */}
                            <source src={file_url} />
                        </video>
                    </div>

                    <div className={cx('item-post')}>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <LikeIcon />
                            </div>
                            <span className={cx('like-count', 'count')}>{likes_count}</span>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <FontAwesomeIcon className={cx('comment-icon')} icon={faCommentDots} />
                            </div>
                            <span className={cx('comment-count', 'count')}>{comments_count}</span>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <MarkIcon />
                            </div>
                            <span className={cx('mark-count', 'count')}>{shares_count}</span>
                        </div>

                        <Tippy
                            offset={[-10, 6]}
                            interactive
                            delay={[0, 700]}
                            //hideOnClick={hideOnClick}
                            placement="top-start"
                            appendTo="parent"
                            render={(attrs) => (
                                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper className={cx('menu-popper')}>
                                        <div className={cx('wrapper-icon')}>
                                            <DipIcon />
                                            <span className={cx('label-icon')}>Embed</span>
                                        </div>
                                        <div className={cx('wrapper-icon')}>
                                            <SendIcon />
                                            <span className={cx('label-icon')}>Send to friends</span>
                                        </div>
                                        <div className={cx('wrapper-icon')}>
                                            <FacebookIcon />
                                            <span className={cx('label-icon')}>Share to Facebook</span>
                                        </div>
                                        <div className={cx('wrapper-icon')}>
                                            <WhatAppIcon />
                                            <span className={cx('label-icon')}>Share to WhatsApp</span>
                                        </div>
                                        <div className={cx('wrapper-icon')}>
                                            <CopyIcon />
                                            <span className={cx('label-icon')}>Copy link</span>
                                        </div>
                                        {showShare && (
                                            <>
                                                <div className={cx('wrapper-icon')}>
                                                    <TwitterIcon />
                                                    <span className={cx('label-icon')}>Share to Twitter</span>
                                                </div>
                                                <div className={cx('wrapper-icon')}>
                                                    <LinkedInIcon />
                                                    <span className={cx('label-icon')}>Share to LinkedIn</span>
                                                </div>
                                                <div className={cx('wrapper-icon')}>
                                                    <RedditIcon />
                                                    <span className={cx('label-icon')}>Share to Reddit</span>
                                                </div>
                                                <div className={cx('wrapper-icon')}>
                                                    <TelegramIcon />
                                                    <span className={cx('label-icon')}>Share to Telegram</span>
                                                </div>
                                            </>
                                        )}
                                        {!showShare && (
                                            <button className={cx('down-btn')} onClick={handleShowShare}>
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </button>
                                        )}
                                        {showShare && (
                                            <button className={cx('down-btn')} onClick={handleHiddenShare}>
                                                <FontAwesomeIcon icon={faChevronUp} />
                                            </button>
                                        )}
                                    </PopperWrapper>
                                </div>
                            )}
                            // onHide={() => setState((prev) => prev.slice(0, 1))}
                        >
                            <p>
                                <div className={cx('wrapper-item')}>
                                    <div className={cx('background-item')}>
                                        <p className={cx('share-icon')}>
                                            <ShareIcon />
                                        </p>
                                    </div>
                                    <span className={cx('share-count', 'count')}>{shares_count}</span>
                                </div>
                            </p>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

HomeContentItem.propTypes = {};

export default HomeContentItem;
