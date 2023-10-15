export interface IServiceCardProps {
  image: string;
  buttonTitle: string;
  headingTitle: string;
  handleClick: () => void;
}

export interface IBookCardProps {
  title: string;
  image: string | undefined;
  rating: number;
  authors: string[];
  isSelected: boolean;
  handleClick: () => void;
}
