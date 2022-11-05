import {useState} from 'react';
import cn from "classnames";


interface BookmarkProps {
    activeIcon: JSX.Element;
    inActiveIcon: JSX.Element;
}


const Bookmark = (props:BookmarkProps) => {

    const {activeIcon, inActiveIcon} = props;
    const [bookmarkActive, setBookmarkActive] = useState(false);

    const inactiveBookmarkStyle = cn('block', {
        'hidden': bookmarkActive
    })

    const activeBookmarkStyle = cn({
        'hidden': !bookmarkActive,
        'block': bookmarkActive
    })

    const bookMarkHandler = () => {
        setBookmarkActive(!bookmarkActive)
    }

    return (
        <>
            <span className={inactiveBookmarkStyle} onClick={bookMarkHandler}>
               {inActiveIcon}
            </span>
            <span className={activeBookmarkStyle} onClick={bookMarkHandler}>
                {activeIcon}
            </span>
        </>
    );
};

export default Bookmark;
