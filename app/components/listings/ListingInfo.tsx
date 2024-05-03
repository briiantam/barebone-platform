"use client";

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  startupDetailedDescription: string;
  founderFirstName1: string;
  founderLastName1: string;
  founderRole1: string;
  founderLinkedIn1?: string;
  founderFirstName2?: string;
  founderLastName2?: string;
  founderRole2?: string;
  founderLinkedIn2?: string;
  founderFirstName3?: string;
  founderLastName3?: string;
  founderRole3?: string;
  founderLinkedIn3?: string;
  founderFirstName4?: string;
  founderLastName4?: string;
  founderRole4?: string;
  founderLinkedIn4?: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  startupDetailedDescription,
  founderFirstName1,
  founderLastName1,
  founderRole1,
  founderLinkedIn1,
  founderFirstName2,
  founderLastName2,
  founderRole2,
  founderLinkedIn2,
  founderFirstName3,
  founderLastName3,
  founderRole3,
  founderLinkedIn3,
  founderFirstName4,
  founderLastName4,
  founderRole4,
  founderLinkedIn4,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black">
            Company Description
          </h2>
          <p>{startupDetailedDescription}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-black">Founding Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {founderFirstName1 && (
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                {founderFirstName1} {founderLastName1}
              </div>
              <div className="text-neutral-500">{founderRole1}</div>
              {founderLinkedIn1 && (
                <a
                  href={founderLinkedIn1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}
          {founderFirstName2 && (
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                {founderFirstName2} {founderLastName2}
              </div>
              <div className="text-neutral-500">{founderRole2}</div>
              {founderLinkedIn2 && (
                <a
                  href={founderLinkedIn2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}
          {founderFirstName3 && (
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                {founderFirstName3} {founderLastName3}
              </div>
              <div className="text-neutral-500">{founderRole3}</div>
              {founderLinkedIn3 && (
                <a
                  href={founderLinkedIn3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}
          {founderFirstName4 && (
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                {founderFirstName4} {founderLastName4}
              </div>
              <div className="text-neutral-500">{founderRole4}</div>
              {founderLinkedIn4 && (
                <a
                  href={founderLinkedIn4}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Profile Created by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
