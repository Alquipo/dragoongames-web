import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  const { push } = useRouter()

  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link>
            <AccountCircle />
            <span>My profile</span>
          </S.Link>
        </Link>
        <Link href="/wishlist" passHref>
          <S.Link title="Wishlist">
            <FavoriteBorder />
            <span>Wishlist</span>
          </S.Link>
        </Link>

        <S.Link
          role="button"
          title="Sign out"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' })
            push(data.url)
          }}
        >
          <ExitToApp />
          <span>Sign out</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
