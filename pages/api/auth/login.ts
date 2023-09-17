import type { NextApiRequest, NextApiResponse } from "next";
import users from "./users.json";
import { User } from "@/main/types/User";

type Data = {
  valid: boolean;
  message: string;
  user?: User;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { email, password } = JSON.parse(req.body);

      const userList = users.users;

      const user = userList.find(
        (u) => u.email == email && u.password == password
      );

      if (!user?.picture) {
        res.status(404).json({
          valid: false,
          message: "Usuario o contraseña incorrectos",
        });
        break;
      }

      res.status(200).json({
        valid: true,
        message: "Inicio exitoso",
        user: {
          name: user.name,
          email: user.email,
          picture: user.picture,
        },
      });

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
