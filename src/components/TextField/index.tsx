import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

import { EyeOutline, EyeOffOutline } from '@styled-icons/evaicons-outline'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  type?: 'text' | 'password' | 'email'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  type = 'text',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        {type === 'password' ? (
          <>
            <S.Input
              type={passwordShown ? 'text' : 'password'}
              onChange={onChange}
              value={value}
              iconPosition={iconPosition}
              disabled={disabled}
              name={name}
              {...(label ? { id: name } : {})}
              {...props}
            />
            <button type="button" onClick={togglePassword}>
              {passwordShown ? <EyeOutline /> : <EyeOffOutline />}
            </button>
          </>
        ) : (
          <S.Input
            type={type}
            onChange={onChange}
            value={value}
            iconPosition={iconPosition}
            disabled={disabled}
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          />
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
