"use client";

import Image from "next/image";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import HeartButton from "../HeartButton";
import ProfileHeading from "../ProfileHeading";
import ListingMetrics from "./ListingMetrics";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
  category1?: string;
  category2?: string;
  category3?: string;
  description: string;
  startupWebsiteUrl?: string;
  price: number;
  startupEBITDA?: number;
  startupRevenue?: number;
  founderOwnership: number;
  employeeCount: number;
  previousFundingRaised?: number;
  lastRoundFundingRaised?: number;
  lastRoundValuation?: number;
  valuationExpectations?: number;
  netIncome?: number;
  preRevenue?: boolean;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
  category1,
  category2,
  category3,
  description,
  startupWebsiteUrl,
  price,
  startupEBITDA,
  startupRevenue,
  founderOwnership,
  employeeCount,
  previousFundingRaised,
  lastRoundFundingRaised,
  lastRoundValuation,
  valuationExpectations,
  netIncome,
  preRevenue,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <div>
      <div className=" relative">
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
      <div className=" relative">
        <div className="absolute top-5 left-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
      <ProfileHeading
        imageSrc={imageSrc}
        title={title}
        subtitle={description}
        price={price}
        startupWebsiteUrl={startupWebsiteUrl}
        valuationExpectations={valuationExpectations}
      />
      <hr />

      <ListingMetrics
        startupEBITDA={startupEBITDA}
        startupRevenue={startupRevenue}
        founderOwnership={founderOwnership}
        employeeCount={employeeCount}
        previousFundingRaised={previousFundingRaised}
        lastRoundFundingRaised={lastRoundFundingRaised}
        lastRoundValuation={lastRoundValuation}
        valuationExpectations={valuationExpectations}
        category1={category1}
        category2={category2}
        category3={category3}
        locationValue={locationValue}
        preRevenue={preRevenue}
        netIncome={netIncome}
        price={price}
        id={""}
        currentUser={null}
      />
    </div>
  );
};

export default ListingHead;
