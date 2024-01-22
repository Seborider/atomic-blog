import {usePost} from "../state-components/PostProvider";

export default function Results() {
    const {posts} = usePost();
    return <p>🚀 {posts.length} atomic posts found</p>;
}
