import styles from '../styles/Home.module.css'
import Link from 'next/link';
 
export default function Home({posts}) {
  return (
    <div className={styles.container}>
     { posts.map((post)=>(
      <Link href={`post/${post.id}`} key={post.body}><h1 >{post.title}</h1></Link>
     ))}
    </div>
  )
}
export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return{
    props:{
      posts:data
    }
  }}
