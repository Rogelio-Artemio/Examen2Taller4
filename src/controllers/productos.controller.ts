// export const getAll = (req: any, res: any) => {
//   // res.send("lista de productos");
//   return res.status(200).json({ message: "UNACH" });
// };
import express from 'express';

type Request = express.Request;
type Response = express.Response;
import connection from '../db.ts';

export const getAll = (req: Request, res: Response) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};

export const getBye = (req: Request, res: Response) => {
    res.json({ message: "Adios!" });
};
