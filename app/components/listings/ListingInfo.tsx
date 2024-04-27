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
  description: string;
  startupRevenue: number | null;
  startupEBITDA: number | null;
  netIncome: number | null;
  imageSrc?: string;
  price?: number;
  title?: string;
  startupWebsiteUrl?: string; // Optional property
  valuationExpectations?: number;
  previousFundingRaised?: number; // Optional property
  lastRoundFundingRaised?: number; // Optional property
  lastRoundValuation?: number; // Optional property
  founderOwnership?: number;
  employeeCount?: number;
  category: string | null; // Update the type to string | null to match the schema
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  startupRevenue,
  startupEBITDA,
  netIncome,
  imageSrc,
  price,
  title,
  startupWebsiteUrl,
  valuationExpectations,
  previousFundingRaised,
  lastRoundFundingRaised,
  lastRoundValuation,
  founderOwnership,
  employeeCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
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
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          {startupRevenue && <div>${startupRevenue}</div>}
          {startupEBITDA && <div>${startupEBITDA}</div>}
          {netIncome && <div>${netIncome}</div>}
        </div>
      </div>
      <hr />
      {/* {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )} */}
      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
