const httpMocks = require('node-mocks-http');
const prisma = require('@prisma/client');
const { allUsers, createUser } = require('../../controllers/todo');

const { user } = new prisma.PrismaClient();

const ALL_USERS = require('../usersdata/all_user.json');
const NEW_USER = require('../usersdata/newUser.json');

user.create = jest.fn(); //mock, this alow us to spide into the function
user.findMany = jest.fn();

let req, res, next;

// const user = 1;

// this function runs before every test
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

/* SECTION Create User */
describe('createUser', () => {
  beforeEach(() => {
    req.body = NEW_USER;
  });

  it('should have a createUser method', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should res with 201', async () => {
    await createUser(req, res, next);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
});

// Get All User
describe('allUser', () => {
  it('should have a allTodos method', () => {
    expect(typeof allUsers).toBe('function');
  });
});
