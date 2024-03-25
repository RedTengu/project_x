import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} className={cls.mainLink} to='/'>
          Главная
          </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to='/about'>
          О сайте
        </AppLink>
      </div>
    </nav>
  );
}