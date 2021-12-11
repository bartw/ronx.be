import swell from "swell-js";

swell.init(process.env.SWELL_STORE_ID, process.env.SWELL_PUBLIC_KEY);

type Product = { id: string; name: string };

export const getAllProducts = async (): Promise<Product[]> => {
  const products = await swell.products.list({ limit: 25, page: 1 });
  return products.results.map(({ id, name }: any) => ({ id, name }));
};
