import Link from 'next/link'

export default function FirstProduct() {
  return (
    <>
      <h1>First Product</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}