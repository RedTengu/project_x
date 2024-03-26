import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const { className,
          children,
          theme,
          ...otherProps } = props;

  return (
    <button 
      className={classNames(cls.button, {}, [className, cls[theme]])} 
      {...otherProps}>
        {children}
    </button>
  );
}