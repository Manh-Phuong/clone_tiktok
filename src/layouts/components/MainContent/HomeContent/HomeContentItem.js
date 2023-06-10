import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
// import AccountPreview from './AccountPreview';
import Button from '~/components/Button';
import { CommentIcon, LikeIcon, MarkIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function HomeContentItem() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3ee7b9539de4177fb72ef422aa3acf0c~c5_100x100.jpeg?x-expires=1686531600&x-signature=954GwwrEAiAYQiYj1VoxrAKaP0M%3D"
                />
            </div>
            <div className={cx('content')}>
                <div className={cx('header-post')}>
                    <div className={cx('author')}>
                        <a className={cx('author-link')} href="/">
                            <h3 className={cx('nick-name')}>manhphuong1702</h3>
                            <h4 className={cx('full-name')}>Manh Phuong</h4>
                        </a>
                    </div>
                    <Button className={cx('button')} small>
                        {<p className={cx('follow-label')}>Follow</p>}
                    </Button>
                    <div className={cx('tag')}>
                        <span className={cx('tag-name')}>Sky</span>
                        <a className={cx('tag-link')} href="/">
                            <strong className={cx('tag-link-label')}>#SonTung</strong>
                        </a>
                    </div>
                    <div className={cx('video-music')}>
                        <a className={cx('video-music-label')} href="/">
                            Making my way
                        </a>
                    </div>
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
                        <video className={cx('video-post-source')} loop="" controls>
                            <source src="https://files.fullstack.edu.vn/f8-tiktok/videos/1912-6413eb55ed5ec.mp4" />
                        </video>
                    </div>

                    <div className={cx('item-post')}>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <LikeIcon />
                            </div>
                            <span className={cx('like-count', 'count')}>78.6K</span>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <FontAwesomeIcon className={cx('comment-icon')} icon={faCommentDots} />
                            </div>
                            <span className={cx('comment-count', 'count')}>2258</span>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <MarkIcon />
                            </div>
                            <span className={cx('mark-count', 'count')}>9969</span>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('background-item')}>
                                <p className={cx('share-icon')}>
                                    <ShareIcon />
                                </p>
                            </div>
                            <span className={cx('share-count', 'count')}>18.5K</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

HomeContentItem.propTypes = {};

export default HomeContentItem;
