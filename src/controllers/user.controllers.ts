import { Request, Response } from "express";
import { iUser, iUserUpdate } from "../interfaces";
import { userServices } from "../services";

const createUser = async (req: Request, res: Response): Promise<Response> => {
    const user: iUser = await userServices.createUser(req.body);

    return res.status(201).json(user);
};

const readUser = async (req: Request, res: Response): Promise<Response> => {
    const users: Array<iUser> = await userServices.readUser();

    return res.status(200).json(users);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.params;

    console.log(`USERID CONTROLLER = ${userId}`);

    const newUser: iUserUpdate = await userServices.updateUser(req.body, userId);

    return res.status(200).json(newUser);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.params;

    const deletedUser: iUser = await userServices.deleteUser(userId);

    return res.status(204).json(deletedUser);
};

export default { createUser, readUser, updateUser, deleteUser };