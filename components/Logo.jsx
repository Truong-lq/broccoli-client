import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={'/logo.webp'} fill alt='Broccoli' className='object-cover' />
  )
}

export default Logo
