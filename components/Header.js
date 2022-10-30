import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container header'>
        <Link href='/' passHref>
          <h2>Developer Blog</h2>
        </Link>
        <div style={{paddingTop:".1em", marginLeft: "auto", align:"right"/*textAlign:"right", marginRight:"3em"*/}}>
          <a href="https://github.com/bjabot12" target="_blank" rel="noopener noreferrer">
            <img src="/images/ghw.png" width="35" height="35" alt="github"></img>
          </a>
          <a href="https://www.linkedin.com/in/bjarte-botnevik-336a7317b/" target="_blank" rel="noopener noreferrer">
            <img src="/images/li.png" style={{paddingLeft:"1em"}} width="50" height="35" alt="linked"></img>
          </a>
        </div>
      </div>
    </header>
  )
}
