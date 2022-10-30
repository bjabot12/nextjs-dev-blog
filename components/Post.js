import Link from 'next/link'
import Button from '@mui/material/Button';

export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <Button variant="contained">Read more</Button>
      </Link>
    </div>
  )
}
