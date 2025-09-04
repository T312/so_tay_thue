import React, { useState, useRef, useEffect } from "react";

export default function BlogItem({ blog, id, views }) {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [expanded]);
// lấy trạng thái like từ localStorage khi load
  useEffect(() => {
    const savedLike = localStorage.getItem(`blog_like_${blog.id}`);
    if (savedLike === "true") {
      setLiked(true);
    }
  }, [blog.id]);

  // lưu vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem(`blog_like_${blog.id}`, liked);
  }, [liked, blog.id]);
  return (
    <article id={id} className="blog-item">
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category">Thuế cơ sở 3 tỉnh Lâm Đồng</span>
          <span className="blog-date">08/07/2025</span>
        </div>

        <h2 className="blog-title">
          <span className="blog-icon">{blog.icon}</span>
          {blog.title}
        </h2>

        <div
          // className={`content-wrapper ${expanded ? "expanded" : ""}`}
          // style={{ maxHeight: expanded ? height : "80px", overflow: "hidden" }}
          className="content-wrapper"
        >
          <div ref={contentRef} className="content-inner">
            {Array.isArray(blog.content) ? (
              blog.content.map((step, index) => {
                const text = step?.text || ""; // tránh null/undefined
                const match = text.match(/^(Bước\s*\d+:)([\s\S]*)/);
                const qaMatch = text.match(/^(Câu\s*\d+:)([\s\S]*?)(Trả lời:)([\s\S]*)/); 
                return (
                  <div key={index} className="blog-step">
                    {qaMatch ? (
                      <p>
                        <strong>{qaMatch[1]}</strong> {qaMatch[2]}
                        <br />
                        <strong>{qaMatch[3]}</strong> {qaMatch[4]}
                      </p>
                    ) :match ? (
                      <p>
                        <strong>{match[1]}</strong>
                        {match[2]}
                      </p>
                    ) : (
                      <p>{text}</p>
                    )}
                    {step.image && (
                      <img src={step.image} alt={`step-${index}`} />
                    )}
                  </div>
                );
              })
            ) : (
              <p>{blog.content}</p>
            )}
          </div>
        </div>

        <div className="blog-footer">
          <div className="blog-stats">
          <span>{views} lượt xem</span>
          <span>0 bình luận</span>
        </div>
        <div className="blog-actions">
          <button
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? "♥" : "♡"}
          </button>
        </div>
          {/* <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : "Read more"}
          </button> */}
        </div>
      </div>
    </article>
  );
}
