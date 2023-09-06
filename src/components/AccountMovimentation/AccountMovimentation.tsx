import {  useEffect, useState } from "react";

import { api } from "../../lib/axios";
import { CardMovimentationSkelleton } from "../AccountMovimentation/CardMovimentation/CardMovimentationSkeleton";
import { CardMovimentation } from "./CardMovimentation/CardMovimentation";

type DataProps = {
  movimentId: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
};

export const AccountMovimentation = () => {
  const [data, setData] = useState<Array<DataProps>>();

  useEffect(() => {
    api.get("/movement").then((response) => setData(response.data));
  }, []);

  if (!data) return <CardMovimentationSkelleton />;

  return (
    <>
      {data.map((items) => (
        <CardMovimentation {...items} key={items.movimentId} />
      ))}
    </>
  );
};