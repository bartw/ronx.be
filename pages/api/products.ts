import type { NextApiRequest, NextApiResponse } from "next";
import swell from "swell-js";

swell.init(process.env.SWELL_STORE_ID, process.env.SWELL_PUBLIC_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // const products = await swell.products.list({ limit: 25, page: 1 });
    const products = [{ name: "hello" }];
    console.log(products);
    res.status(200).json(products);
  }

  return res.status(405).send("Method Not Allowed");
};

export default handler;
