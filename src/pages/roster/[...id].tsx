import React from "react";
import { GetServerSideProps } from "next";
import { RosterAPIResponseType } from "@/types/roster";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

const Roster = ({
  data,
  teamName,
}: {
  data: RosterAPIResponseType;
  teamName: string;
}) => {
  const splitCopyright = data.copyright.split(" ");
  const copyrightLink = splitCopyright.slice(-1).join(" ");

  const copyrightText = splitCopyright
    .slice(0, splitCopyright.length - 2)
    .join(" ");

  return (
    <div className="home min-h-screen w-full text-black bg-transparent">
      <div className="m-10">
        <div className="bg-white relative rounded-lg">
          <div className="m-10 phone:m-4">
            <Header />
            <div>
              <h2 className="font-extrabold py-10 underline text-lg">
                {teamName}
              </h2>
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white phone:text-xs">
                  {data.roster.map((player) => (
                    <tr
                      key={player.person.id}
                      className="bg-primary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-8"
                    >
                      <th className="p-3 text-left font-bold ">Player Name</th>

                      <th scope="col" className="p-3 text-left ">
                        Jersey Number
                      </th>
                      <th scope="col" className="p-3 text-left ">
                        Position
                      </th>
                      <th scope="col" className="p-3 text-left ">
                        Abbreviation
                      </th>
                      <th scope="col" className="p-3 text-left ">
                        Status
                      </th>
                    </tr>
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  {data.roster.map((player) => (
                    <tr
                      key={player.person.id}
                      className="flex flex-col flex-no wrap sm:table-row mb-8  truncate phone:text-xs rounded-r-lg"
                    >
                      <td className="border-grey-light border p-3 truncate">
                        {player.person.fullName}
                      </td>
                      <td className="border-grey-light border  p-3 truncate">
                        {player.jerseyNumber}
                      </td>
                      <td className="border-grey-light border  p-3 truncate">
                        {player.position.name}
                      </td>
                      <td className="border-grey-light border  p-3 truncate">
                        {player.position.abbreviation}
                      </td>
                      <td className="border-grey-light border  p-3 truncate">
                        {player.status.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as Params;
    const { teamName } = context.query;

    const { MLB_URL } = process.env;

    const result = await fetch(
      `${MLB_URL}/teams/${id}/roster?rosterType=active`
    );

    const data: RosterAPIResponseType = await result.json();

    return {
      props: { data, teamName },
    };
  } catch {
    context.res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default Roster;
