import React from "react";
import SqlEditor from "./queryPage";
import { getSavedQueries } from "@/lib/api";

const Query = async () => {
  const savedQueries = await getSavedQueries();
  return <SqlEditor savedQueriesInitialData={savedQueries || []} />;
};

export default Query;
