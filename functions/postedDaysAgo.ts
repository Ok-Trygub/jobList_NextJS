const PostedDaysAgo = (createdDate: string): number => {

    const dayMilliseconds: number = 86400000;
    return Math.floor((new Date().valueOf() - new Date(createdDate).valueOf()) / dayMilliseconds);

};

export default PostedDaysAgo;
