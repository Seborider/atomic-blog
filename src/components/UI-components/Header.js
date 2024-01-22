import {usePost} from "../state-components/PostProvider";
import SearchPosts from "./SearchPosts";
import Results from "./Results";

export default function Header() {
    const {onClearPosts} = usePost();
    return (
        <header>
            <h1>
                <span>⚛️</span>The Atomic Blog
            </h1>
            <div>
                <Results/>
                <SearchPosts/>
                <button onClick={onClearPosts}>Clear posts</button>
            </div>
        </header>
    );
}