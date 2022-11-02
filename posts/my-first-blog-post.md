---
title: 'Next.js developer blog'
date: 'October 31, 2022'
excerpt: 'Welcome to my blog!'
cover_image: '/images/posts/nextjs.jpeg'
---


# My first blog post


<small>!Please read on Desktop screen to view all images and code snippets!</small>
\
&nbsp;

For a while I have wanted to start a developer blog. Mostly for my own enjoyment, but also so that I can share what I am working on in my spare time and use it as a portfolio. I had two requirements I knew I wanted in a blog.

1. I wanted it to be able to highlight code snippits.
2. It should be able to view screenshots.

This is only supposed to be a simple blog, so I had no other requirements. This might change in the future.

\
&nbsp;
\
&nbsp;


## The tech stack

As I had some experience with [React.js](https://reactjs.org/) I wanted to use it to build this website. I had also heard great things about [Next.js](https://nextjs.org/), so I wanted to try that aswell. Next.js also comes with a easy-to-use hosting platform, [Vercel](https://vercel.com/). On Vercel, you connect to a GitHub-repo and press deploy on the dashboard. Vercel will then build, deploy and host the Next.js app for you. Easy as that.

As for the blog posts, I quickly figured that markdown fit all my requirements. I read about MDX, which allows you to use JSX in your markdown content. You can do alot of things with MDX, so "upgrading" to it is definitely on the todo-list.

Next.js can automatically build pages, based on the markdown files. Using the title of the markdown files, it creates a path and page for the user to read. The title of this post is "my-first-blog-post". Next.js automatically creates the page for this post, and adds it to the path. All I have to do for my next post is to write another markdown file in the same format, and it will then be ready on the blog.

![Image of title](/images/posts/title.png)

Therefore, Next.js is excellent to use when writing a blog.
\
&nbsp;
\
&nbsp;

## Problems

The template I used was really helpful so I did not come across many errors. The one error I got was when adding new blog posts. It occurred for the first time when I added a new blog post to test the list of posts. For some reason the error disappeared if I restarted the development server. The error is shown below.

![Image of error](/images/posts/error.png)

After I spent some time troubleshooting and googling I found that adding the code snippet below in the <code>next.config.js</code> had worked for a lot of people, so I tried it myself with big hopes.


```js
// next.config.js
module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}
```

However, it did not solve my issue. After some more googling I came across an article that mentioned that there was an issue with Next.js and [styled-componenents](https://styled-components.com/), as the code snippet above proposes. I then redid the few components and made it in to pure CSS it all worked perfectly!

The problem was styled-components and Next.js. As I only had two small componenents using this, I rewrote those and avoided the problem.

\
&nbsp;
\
&nbsp;

## Conclusion

That is a very brief overview of what this blog is, and why I decided to build it. More to come! The source code is on my [github](https://github.com/bjabot12/nextjs-dev-blog).

A shoutout to [this](https://github.com/bradtraversy/next-markdown-blog) github repo for templates and inspiration.