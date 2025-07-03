// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        excerpt: "Learn how to use React Hooks to build more efficient and cleaner React applications.",
        category: "React",
        date: "2024-01-15",
        author: "John Doe",
        filename: "post1.html"
    },
    {
        id: 2,
        title: "Modern CSS Grid Layouts",
        excerpt: "Master CSS Grid to create complex, responsive layouts with ease.",
        category: "CSS",
        date: "2024-01-12",
        author: "Jane Smith",
        filename: "post2.html"
    },
    {
        id: 3,
        title: "JavaScript ES6+ Features",
        excerpt: "Explore the latest JavaScript features that will improve your coding efficiency.",
        category: "JavaScript",
        date: "2024-01-10",
        author: "Mike Johnson",
        filename: "post3.html"
    },
    {
        id: 4,
        title: "Node.js Best Practices",
        excerpt: "Learn the essential best practices for building robust Node.js applications.",
        category: "Node.js",
        date: "2024-01-08",
        author: "Sarah Wilson",
        filename: "post4.html"
    },
    {
        id: 5,
        title: "Responsive Web Design Tips",
        excerpt: "Create beautiful, responsive websites that work on all devices.",
        category: "Design",
        date: "2024-01-05",
        author: "Alex Chen",
        filename: "post5.html"
    },
    {
        id: 6,
        title: "API Design Principles",
        excerpt: "Design clean, efficient APIs that developers will love to use.",
        category: "Backend",
        date: "2024-01-03",
        author: "David Brown",
        filename: "post6.html"
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