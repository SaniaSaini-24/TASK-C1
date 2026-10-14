import { useState } from "react";
import "./Post.css";

function Post() {
    const [postType, setPostType] = useState("question");
    const [title, setTitle] = useState("");
    const [problem, setProblem] = useState("");
    const [abstractText, setAbstractText] = useState("");
    const [articleText, setArticleText] = useState("");
    const [tagsText, setTagsText] = useState("");
    const [error, setError] = useState("");

    const tags = tagsText
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

    function handleSubmit(event) {
        event.preventDefault();
        setError("");

        if (!title.trim()) {
            setError("Please enter a title.");
            return;
        }

        if (postType === "question" && !problem.trim()) {
            setError("Please describe your problem.");
            return;
        }

        if (postType === "article" && !abstractText.trim()) {
            setError("Please enter an abstract.");
            return;
        }

        if (postType === "article" && !articleText.trim()) {
            setError("Please enter the article text.");
            return;
        }

        if (tags.length > 3) {
            setError("Please enter no more than 3 tags, separated by commas.");
            return;
        }

        // This task demonstrates the form without saving posts to a database.
        window.alert(`Your ${postType} has been submitted successfully (demo only).`);

        setTitle("");
        setProblem("");
        setAbstractText("");
        setArticleText("");
        setTagsText("");
        setError("");
    }

    return (
        <main className="post-page">
            <section className="post-panel" aria-labelledby="new-post-heading">
                <h1 id="new-post-heading" className="post-heading">
                    New Post
                </h1>

                <form onSubmit={handleSubmit} noValidate>
                    <fieldset className="post-type-fieldset">
                        <legend>Select Post Type:</legend>

                        <label>
                            <input
                                type="radio"
                                name="postType"
                                value="question"
                                checked={postType === "question"}
                                onChange={() => {
                                    setPostType("question");
                                    setError("");
                                }}
                            />
                            Question
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="postType"
                                value="article"
                                checked={postType === "article"}
                                onChange={() => {
                                    setPostType("article");
                                    setError("");
                                }}
                            />
                            Article
                        </label>
                    </fieldset>

                    <h2 className="post-subheading">
                        What do you want to ask or share
                    </h2>

                    <p className="post-help">
                        This section changes depending on the selected post type.
                    </p>

                    <div className="post-field">
                        <label htmlFor="post-title">Title</label>
                        <input
                            id="post-title"
                            type="text"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                                setError("");
                            }}
                            placeholder={
                                postType === "question"
                                    ? "Start your question with how, what, why, etc."
                                    : "Enter a descriptive title"
                            }
                            maxLength={150}
                        />
                    </div>

                    {postType === "question" ? (
                        <div className="post-field">
                            <label htmlFor="post-problem">
                                Describe your problem
                            </label>
                            <textarea
                                id="post-problem"
                                value={problem}
                                onChange={(event) => {
                                    setProblem(event.target.value);
                                    setError("");
                                }}
                                rows={8}
                                placeholder="Explain your question or problem"
                            />
                        </div>
                    ) : (
                        <>
                            <div className="post-field">
                                <label htmlFor="post-abstract">Abstract</label>
                                <textarea
                                    id="post-abstract"
                                    value={abstractText}
                                    onChange={(event) => {
                                        setAbstractText(event.target.value);
                                        setError("");
                                    }}
                                    rows={3}
                                    placeholder="Enter a 1-paragraph abstract"
                                />
                            </div>

                            <div className="post-field">
                                <label htmlFor="post-article-text">
                                    Article Text
                                </label>
                                <textarea
                                    id="post-article-text"
                                    value={articleText}
                                    onChange={(event) => {
                                        setArticleText(event.target.value);
                                        setError("");
                                    }}
                                    rows={8}
                                    placeholder="Write your article here"
                                />
                            </div>
                        </>
                    )}

                    <div className="post-field">
                        <label htmlFor="post-tags">Tags (up to 3)</label>
                        <input
                            id="post-tags"
                            type="text"
                            value={tagsText}
                            onChange={(event) => {
                                setTagsText(event.target.value);
                                setError("");
                            }}
                            placeholder="Separate up to 3 tags with commas, e.g. JavaScript, React"
                        />
                        <small>{tags.length}/3 tags</small>
                    </div>

                    {error && (
                        <p className="post-error" role="alert">
                            {error}
                        </p>
                    )}

                    <div className="post-actions">
                        <button
                            type="submit"
                            className="post-submit-button"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Post;