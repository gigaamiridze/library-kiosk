export interface IServiceCardProps {
  image: string;
  buttonTitle: string;
  headingTitle: string;
  handleClick: () => void;
}

export interface IBookCardProps {
  title: string;
  image: string;
  rating: number;
  author: string;
  isSelected: boolean;
  handleClick: () => void;
}