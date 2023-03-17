import { rest } from 'msw';

import { members, board, comments } from './dummyData';

const handlers = [
  rest.get('/members/common', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  rest.get('/communities', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(board)),
  ),

  rest.get(`/communities`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(board)),
  ),

  rest.get(`/communities/comments`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(comments)),
  ),

  rest.post('/members/common', (req, res, ctx) => {
    members.push(req.body);
    return res(ctx.status(201));
  }),

  rest.post('/communities', (req, res, ctx) => {
    board.push(req.body);
    return res(ctx.status(201));
  }),

  rest.post('/communities/comments', (req, res, ctx) => {
    comments.push(req.body);
    return res(ctx.status(201));
  }),
];

export default handlers;
