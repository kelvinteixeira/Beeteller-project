import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";

import { defaultHandlers } from "./src/__tests__/mockServiceWorker";

export const mockedServer = setupServer(...defaultHandlers);

beforeAll(() => mockedServer.listen());
afterEach(() => mockedServer.resetHandlers());
afterAll(() => mockedServer.close());