export interface InputProps {
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'uri' | 'week';
  placeholder: string;
  iconType: 'username' | 'email' | 'password';
  autoComplete: 'on' | 'off';
  onChange: (value: string) => void;
}
