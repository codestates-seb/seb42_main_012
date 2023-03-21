import { rest } from 'msw';

import { members, board, comments, gyms, reviews } from './dummyData';

const handlers = [
  // ** 조회 요청 **

  // 멤버 조회
  rest.get('/members/common', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  // 커뮤니티 게시글 조회
  rest.get('/communities', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(board)),
  ),

  // 커뮤니티 댓글 조회
  rest.get(`/communities/comments`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(comments)),
  ),

  // 헬스장 조회
  rest.get(`/gyms`, (req, res, ctx) => res(ctx.status(200), ctx.json(gyms))),

  // 헬스장 리뷰 조회
  rest.get(`/gyms/reviews`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(reviews)),
  ),

  // ** 등록 요청 **

  // 멤버 등록
  rest.post('/members/common', (req, res, ctx) => {
    members.data.contents.push(req.body);
    return res(ctx.status(201));
  }),

  // 커뮤니티 게시글 등록
  rest.post('/communities', (req, res, ctx) => {
    board.data.contents.push(req.body);
    return res(ctx.status(201));
  }),

  // 커뮤니티 댓글 등록
  rest.post('/communities/comments', (req, res, ctx) => {
    comments.data.contents.push(req.body);
    return res(ctx.status(201));
  }),

  // 헬스장 등록
  rest.post('/gyms', (req, res, ctx) => {
    gyms.data.contents.push(req.body);
    return res(ctx.status(201));
  }),

  // 헬스장 리뷰 등록
  rest.post('/gyms/reviews', (req, res, ctx) => {
    reviews.data.contents.push(req.body);
    return res(ctx.status(201));
  }),
];

export default handlers;
