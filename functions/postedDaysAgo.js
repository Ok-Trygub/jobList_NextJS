const PostedDaysAgo = (createdDate) => {

    const dayMilliseconds = 86400000;
    return Math.floor((new Date() - new Date(createdDate)) / dayMilliseconds);

};

export default PostedDaysAgo;
