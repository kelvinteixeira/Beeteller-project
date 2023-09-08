import { rest } from "msw";
import { dashboardMock } from "../__mocks__/dashboardMock";
import { movementMock } from "../__mocks__/movementMock";
import { offersMock } from "../__mocks__/offersMock";
import { BASE_URL } from "../lib/axios";

export const defaultHandlers = [
  rest.get(`${BASE_URL}dashboard`, (req, res, ctx) => {
    return res(ctx.json(dashboardMock));
  }),
  rest.get(`${BASE_URL}movement`, (req, res, ctx) => {
    return res(ctx.json(movementMock));
  }),
  rest.get(`${BASE_URL}offers`, (req, res, ctx) => {
    return res(ctx.json(offersMock));
  }),
];
