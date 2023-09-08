import { useEffect, useState } from "react";
import { OffersCard } from "./OffersCard/OffersCard";

import { api } from "../../lib/axios";
import { OffersCardSkelleton } from "./OffersCardSkelleton/OffersCardSkelleton";

import { OffersReponseType } from "src/Global/types";

export const Offers = () => {
  const [data, setData] = useState<OffersReponseType>();
  useEffect(() => {
    api.get("/offers").then((response) => setData(response.data));
  }, []);

  if (!data) return <OffersCardSkelleton />;

  return (
    <>
      {data.offers.map((items) => (
        <OffersCard {...items} key={items.offerType} />
      ))}
    </>
  );
};
