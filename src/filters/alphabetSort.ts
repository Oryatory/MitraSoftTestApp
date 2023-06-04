import { PostProps } from "../components/post/Post";

const alphabetSort = (posts: PostProps[], isSortAscending: boolean) => {
  const sortedPosts = [...posts].sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (!isSortAscending) {
      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    } else if (titleA < titleB) {
      return 1;
    } else if (titleA > titleB) {
      return -1;
    } else {
      return 0;
    }
  });

  return sortedPosts;
};

export default alphabetSort;
