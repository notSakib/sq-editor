const BASE_URL = "https://" + process.env.VERCEL_URL + "/";
export const getQueryData = async () => {
  const res = await fetch(`${BASE_URL}/getData`, {
    method: "GET",
  });
  if (!res.ok) {
    return null;
  }
  const data: any = await res.json();
  return data.response;
};
export const getSavedQueries = async () => {
  console.log("clled");
  const res = await fetch(`${BASE_URL}/savedQueries`, {
    method: "GET",
  });
  if (!res.ok) {
    return null;
  }
  const data: any = await res.json();
  return data.response;
};
export const getDbColumns = async () => {
  const res = await fetch(`${BASE_URL}/getColumns`, {
    method: "GET",
  });
  if (!res.ok) {
    return null;
  }
  const data: any = await res.json();

  return data.response;
};
export const postSavedQueries = async (query: string) => {
  const res = await fetch(`${BASE_URL}/savedQueries`, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    return null;
  }
  const data: any = await res.json();
  return data.response;
};
export const deleteSavedQueries = async (index: number) => {
  const res = await fetch(`${BASE_URL}/savedQueries`, {
    method: "DELETE",
    body: JSON.stringify({ index }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    return null;
  }
  const data: any = await res.json();
  return data.response;
};
