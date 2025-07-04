// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        excerpt: "Learn how to use React Hooks to build more efficient and cleaner React applications.",
        category: "Python",
        date: "July 4, 2025<",
        author: "Thomas White",
        filename: "3 pygame projects - 04_07_25.html"
    }
];

// DOM elements
const blogGrid = document.getElementById('blogGrid');
const searchInput = document.getElementById('searchInput');

// Render blog posts
function renderBlogPosts(posts) {
    blogGrid.innerHTML = '';
    posts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-image">
                ${post.category} Article
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-category">${post.category}</span>
                    <span class="blog-date">${new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="pages/posts/${post.filename}" class="read-more">Read More →</a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Search functionality
function searchPosts(query) {
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );
    renderBlogPosts(filteredPosts);
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query) {
        searchPosts(query);
    } else {
        renderBlogPosts(blogPosts);
    }
});

// Initialize blog
renderBlogPosts(blogPosts);
