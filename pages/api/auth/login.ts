import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  valid: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "POST":
      break;

    default:
      break;
  }

  res.status(200).json({
    valid: true,
    message: "",
  });
}
