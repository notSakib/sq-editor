import React from "react";
import SqlEditor from "./sqlEditor";
import { getSavedQueries } from "@/lib/api";

const Query = async () => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null;
  }
  const savedQueries = await getSavedQueries();
  return <SqlEditor savedQueriesInitialData={savedQueries} />;
};

export default Query;
