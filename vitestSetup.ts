import { afterAll, beforeAll, vi, afterEach } from "vitest";
import * as nextRouter from "next-router-mock";
import "@testing-library/jest-dom";

import { server } from "./mock/server";

process.env.NEXT_PUBLIC_API_URL = "http://test:8080";

beforeAll(() => {
  server.listen();
  vi.mock("next/router", () => ({
    ...nextRouter,
    useRouter: () => ({
      push: vi.fn(),
    }),
  }));
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});