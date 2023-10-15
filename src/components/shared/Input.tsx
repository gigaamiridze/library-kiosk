import { useState, ChangeEvent } from 'react';
import { BiSolidLockAlt } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { FieldGroup, InputStyled, InputIcon } from '../../styles';
import { InputProps } from '../../interfaces';

function Input(props: InputProps) {
  const { type, placeholder, iconType, autoComplete, onChange } = props;
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  }

  const getIcon = () => {
    switch (iconType) {
      case 'username':
        return <FaUser />;
      case 'email':
        return <IoMdMail />;
      case 'password':
        return <BiSolidLockAlt />;
      default:
        return null;
    }
  }

  return (
    <FieldGroup>
      <InputStyled 
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <InputIcon>{getIcon()}</InputIcon>
    </FieldGroup>
  )
}

export default Input;
