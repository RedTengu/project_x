import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "app/providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  )
};

export default App;