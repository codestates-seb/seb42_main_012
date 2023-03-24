import { rest } from 'msw';

import { members, board, comments, my } from './dummyData';
import { gyms, reviews } from './GymDummyData';

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

  // 커뮤니티 게시글 상세조회
  rest.get(`/communities/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(board.find(g => g.id === id)));
  }),

  // 커뮤니티 댓글 조회
  rest.get(`/communities/comments`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(comments)),
  ),

  // 헬스장 조회
  rest.get(`/gyms?lastFeedId=10`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(gyms)),
  ),

  // 헬스장 상세조회
  rest.get(`/gyms/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json(gyms.filter(gym => gym.id === Number(id))),
    );
  }),

  // 헬스장 리뷰 조회
  rest.get(`/gyms/reviews/:id?lastFeedId=10`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json(reviews.filter(review => review.gymId === Number(id))),
    );
  }),

  // 마이페이지 조회
  rest.get('/members/my', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(my)),
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
    gyms.push(req.body);
    return res(ctx.status(201));
  }),

  // 헬스장 리뷰 등록
  rest.post('/gyms/reviews/:id', (req, res, ctx) => {
    const { id } = req.params;
    const review = req.body;
    review.gymId = id;
    reviews.data.push(review);
    return res(ctx.status(201));
  }),
];

export default handlers;
