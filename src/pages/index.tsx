import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { TeamType, TeamAPIResponseType } from "@/types/team";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface GroupedTeams {
  [leagueName: string]: { [divisionName: string]: TeamType[] };
}

export default function Home({ data }: { data: TeamAPIResponseType }) {
  const router = useRouter();

  const splitCopyright = data.copyright.split(" ");
  const copyrightLink = splitCopyright.slice(-1).join(" ");

  const copyrightText = splitCopyright
    .slice(0, splitCopyright.length - 2)
    .join(" ");

  /*
    We want to sort the teams 1st in order to make it easier to group the teams by league and division using the reduce() method.
    If we did not sort first, we would need to iterate through the entire array for each league and division combination.
  */
  const sortedTeams = data.teams.sort((a: TeamType, b: TeamType) => {
    if (a.league.id !== b.league.id) {
      return a.league.id - b.league.id;
    } else if (a.division.id !== b.division.id) {
      return a.division.id - b.division.id;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const groupedTeams = sortedTeams.reduce(
    (acc: GroupedTeams, team: TeamType) => {
      if (!acc[team.league.name]) {
        acc[team.league.name] = {};
      }
      if (!acc[team.league.name][team.division.name]) {
        acc[team.league.name][team.division.name] = [];
      }
      acc[team.league.name][team.division.name].push(team);
      return acc;
    },
    {}
  );

  return (
    <div className="home min-h-screen w-full text-black bg-transparent">
      <div className="m-10">
        <div className="bg-white relative rounded-lg">
          <div className="m-10 phone:m-4">
            <Header />
            {Object.keys(groupedTeams).map((leagueName) => (
              <div key={leagueName} data-testid="leagueName">
                <h2 className="font-extrabold py-10 underline text-lg">
                  {leagueName}
                </h2>
                {Object.keys(groupedTeams[leagueName]).map((divisionName) => (
                  <table
                    key={divisionName}
                    className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
                  >
                    <thead className="text-white phone:text-xs">
                      {groupedTeams[leagueName][divisionName].map((team) => (
                        <tr
                          key={team.id}
                          className="bg-primary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-8"
                        >
                          <th className="p-3 text-left font-bold ">
                            {divisionName}
                          </th>
                          <th scope="col" className="p-3 text-left ">
                            Abbreviation
                          </th>
                          <th scope="col" className="p-3 text-left ">
                            Location
                          </th>

                          <th scope="col" className="p-3 text-left ">
                            Venue
                          </th>
                          <th scope="col" className="p-3 text-left ">
                            First Year of Play
                          </th>
                        </tr>
                      ))}
                    </thead>

                    <tbody className="flex-1 sm:flex-none">
                      {groupedTeams[leagueName][divisionName].map((team) => (
                        <tr
                          key={team.id}
                          className="flex flex-col flex-no wrap sm:table-row mb-8  truncate phone:text-xs rounded-r-lg"
                        >
                          <td
                            className="border-grey-light border hover:bg-gray-100 cursor-pointer p-3 truncate"
                            onClick={() => {
                              router.query.teamName = team.name;
                              router.pathname = `/roster/${team.id}`;
                              router.push(router);
                            }}
                          >
                            {team.name}
                          </td>
                          <td className="border-grey-light border  p-3 truncate">
                            {team.abbreviation}
                          </td>
                          <td className="border-grey-light border  p-3 truncate">
                            {team.locationName}
                          </td>
                          <td className="border-grey-light border  p-3 truncate">
                            {team.venue.name}
                          </td>
                          <td className="border-grey-light border  p-3 truncate">
                            {team.firstYearOfPlay}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Footer
          copyrightLink={copyrightLink}
          copyrightText={copyrightText}
          linkLabel={"here"}
        />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const { MLB_URL } = process.env;
    const date = new Date();

    const result = await fetch(
      `${MLB_URL}/teams?season=${date.getFullYear()}&sportId=1`
    );
    const data: TeamAPIResponseType = await result.json();

    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
