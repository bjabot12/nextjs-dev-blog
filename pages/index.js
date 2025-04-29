import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import AboutSite from "../components/AboutSite"
import HeaderName from '../components/HeaderName'
import { sortByDate } from '../utils'
import { Analytics } from '@vercel/analytics/react';
 

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Bjarte Botnevik</title>
      </Head>
      {/* <HeaderName/> */}
      <AboutSite/>      

      <div className=' posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Analytics />
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
