import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image
      src="/img/empty.png"
      alt="A Dragoon class Final Fantasy"
      width={320}
      height={260}
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
