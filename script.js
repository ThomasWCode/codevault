// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "3 Basic Python Pygame Projects",
        excerpt: "3 ideas for your first python pygame games. Including code snippets.",
        category: "Python",
        date: "July 4, 2025",
        author: "Thomas White",
        filename: "3 pygame projects - 04_07_25.html"
    },
    {
        id: 2,
        title: "Python For Loops",
        excerpt: "Learn how for loops work in python, and why you use them.",
        category: "Python",
        date: "July 4, 2025",
        author: "Thomas White",
        filename: "python for loops - 04_07_25.html"
    },
    {
        id: 3,
        title: "Python f-Strings",
        excerpt: "Learn the power of f-strings. Start writing cleaner and quicker code.",
        category: "Python",
        date: "July 4, 2025",
        author: "Thomas White",
        filename: "python f strings - 04_07_25.html"
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
                    <span class="blog-date">${post.date}</span>
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