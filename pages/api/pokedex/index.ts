// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

type Data = {
  page: number;
  pages: number;
  total: number;
  pokemon: any[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { offset = 10, page = 0 } = req.query as {
    offset?: number;
    page?: number;
  };

  const total: number = data.total;
  const pages: number =
    total % offset == 0
      ? total / offset
      : parseInt(`${total / offset}`.split(".")[0]) + 1;

  const pokemon = data.pokemon.slice(offset * page, offset * (page + 1));

  res.status(200).json({
    page,
    pages,
    total,
    pokemon,
  });
}
