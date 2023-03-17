import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import Roster from "../src/pages/roster/[...id]";
import mockRouter from "next-router-mock";
import teams from "../teams.json";
import roster from "../roster.json";

jest.mock("next/router", () => require("next-router-mock"));

it("renders homepage unchanged", () => {
  mockRouter.push("/");

  const { container } = render(<Home data={teams} />);
  expect(container).toMatchSnapshot();
});

it("renders roster unchanged", () => {
  mockRouter.push("/roster/[id]");

  const { container } = render(<Roster data={roster} />);
  expect(container).toMatchSnapshot();
});
