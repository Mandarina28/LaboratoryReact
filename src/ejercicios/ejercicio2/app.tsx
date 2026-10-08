import { AppLayout } from "./app.layout";
import { CartProvider } from "./cart.context";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
