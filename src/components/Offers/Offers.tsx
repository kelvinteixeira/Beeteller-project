import { useEffect, useState } from "react";
import { OffersCard } from "./OffersCard/OffersCard";

import { api } from "../../lib/axios";
import { OffersCardSkelleton } from "./OffersCardSkelleton/OffersCardSkelleton";

type OffersProps = {
  offers: {
    offerType: string;
    title: string;
    subtitle: string;
    amount: number;
  }[];
};

export const Offers = () => {
  const [data, setData] = useState<OffersProps>();
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
