import { rest } from 'msw';

import { members, board, comments, gyms, reviews } from './dummyData';

const handlers = [
  // ** 조회 요청 **

  // Member
  //! 마이페이지 메인 조회
  rest.get('/members/my', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 마이페이지 내가 쓴 글 조회
  rest.get('/members/my/communities?lastFeedId=56', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 마이페이지 내가 쓴 댓글 조회
  rest.get('/members/my/comments?lastFeedId=15', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 마이페이지 내가 쓴 리뷰 조회
  rest.get('/members/my/reviews?lastFeedId=15', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 마이페이지 내가 찜한 게시글 조회
  rest.get('/members/my/bookmarks/communities?lastFeedId=15', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 마이페이지 내가 찜한 헬스장 조회
  rest.get('/members/my/bookmarks/gyms?lastFeedId=15', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  // Gym
  //! 헬스장 전체 조회
  rest.get('/gyms?lastFeedId=10', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 헬스장 상세 조회
  rest.get(`/gyms/${gym_id}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 헬스장 리뷰 조회
  rest.get(`/gyms/reviews/${gym_id}?lastFeedId=10`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  //! 헬스장 목록 필터링 조회
  rest.get('/gyms?filter=distance', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(members)),
  ),

  // Community
  //! 커뮤니티 게시글 전체 조회
  rest.get('/communities?lastFeedId=56', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(board)),
  ),

  //! 커뮤니티 게시글 상세 조회
  rest.get(`/communities/${community_id}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(comments)),
  ),

  //! 커뮤니티 탭별 조회
  rest.get(`/communities/tab/${tab_id}?lastFeedId=55`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(board)),
  ),

  //! 커뮤니티 게시글 검색
  rest.get('/communities/search?keyword=키워드', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(board)),
  ),

  //! 커뮤니티 댓글 조회
  rest.get(
    `/communities/comments/${community_id}?lastFeedId=20`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(board)),
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
