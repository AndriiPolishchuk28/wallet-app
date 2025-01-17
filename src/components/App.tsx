import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import TransactionsList from "../pages/TransactionsList/TransactionsList";
import TransactionDetail from "../pages/TransactionDetail/TransactionDetail";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" index element={<TransactionsList />} />
      <Route path="/transaction-detail" element={<TransactionDetail />} />
    </Routes>
  );
};

export default App;
