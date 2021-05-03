const prisma = require('@prisma/client');

const { user } = new prisma.PrismaClient();

const allUsers = async (req, res) => {
  try {
    const users = await user.findMany();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await user.create({
      data: req.body,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.response);
    next(error);
  }
};

module.exports = {
  allUsers,
  createUser,
};
