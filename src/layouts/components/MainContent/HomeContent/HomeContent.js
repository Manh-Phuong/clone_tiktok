import PropTypes from 'prop-types';
import HomeContentItem from './HomeContentItem';

function HomeContent({ children }) {
    return (
        <div>
            <HomeContentItem />
        </div>
    );
}

HomeContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeContent;
