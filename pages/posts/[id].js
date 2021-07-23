import Link from 'next/link'

export default function FirstPost ({ id }) {
  return (
    <>
      <h1>{id}</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export async function getStaticPaths () {
  const paths = [
    {
      params: {
        id: 'test'
      }
    },
    {
      params: {
        id: 'run'
      }
    },
    {
      params: {
        id: 'hello'
      }
    }
  ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  return {
    props: {
      id: params.id
    }
  }
}
