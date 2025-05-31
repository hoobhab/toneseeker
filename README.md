# Tone Seeker
Forum-like web application with basic CRUD capabilities. Create posts, attach images, and upvote your favorite messages.

Originally intended for guitar discussion.

**Link to project demo (some functions limited):** https://toneseeker.netlify.app/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, React Router, Vite, Supabase

Vite was chosen for the build tool because it provides a very quick startup time for creating React applications. Forum posts are built on the main page using React components. Components were chosen for these elements because every forum post has things in common, like titles, pictures, and upvote counts. To maintain a single page application, I used React Router to dynamically generate page routes. This eliminates the need to reload resources every time a new page is clicked on.

This app uses Supabase for its backend functions In addition to being open source, it also provides robust RESTful API capabilities, including the basic CRUD functions that are used in this app. This app uses a single table, `Posts`, to handle all forum posts.
