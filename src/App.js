import "./styles.css";
import { Provider as StoreProvider } from "react-redux";
import Todo from "./todo";
import store from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const Theme = createMuiTheme(theme);

export default function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={Theme}>
        <Todo />
      </ThemeProvider>
    </StoreProvider>
  );
}
