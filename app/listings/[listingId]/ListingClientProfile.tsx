"use client";

import { useMemo } from "react";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
    locationValue: string;
    price: number;
    startupWebsiteUrl?: string;
    startupEBITDA?: number;
    startupRevenue?: number;
    founderOwnership: number;
    employeeCount: number;
    previousFundingRaised?: number;
    lastRoundFundingRaised?: number;
    lastRoundValuation?: number;
    valuationExpectations?: number;
    category1?: string;
    category2?: string;
    category3?: string;
    netIncome?: number;
    preRevenue?: boolean;
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
  };
  currentUser?: SafeUser | null;
}

const ListingClientProfile: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser,
}) => {
  // Extracting relevant information from our previous categories / listing info
  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category1);
  }, [listing.category1]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            description={listing.description}
            id={listing.id}
            currentUser={currentUser}
            locationValue={listing.locationValue}
            price={listing.price}
            startupWebsiteUrl={listing.startupWebsiteUrl}
            startupEBITDA={listing.startupEBITDA}
            startupRevenue={listing.startupRevenue}
            founderOwnership={listing.founderOwnership}
            employeeCount={listing.employeeCount}
            previousFundingRaised={listing.previousFundingRaised}
            lastRoundFundingRaised={listing.lastRoundFundingRaised}
            lastRoundValuation={listing.lastRoundValuation}
            valuationExpectations={listing.valuationExpectations}
            category1={listing.category1}
            category2={listing.category2}
            category3={listing.category3}
            netIncome={listing.netIncome}
            preRevenue={listing.preRevenue}
          />
          <ListingInfo
            user={listing.user}
            startupDetailedDescription={listing.startupDetailedDescription}
            founderFirstName1={listing.founderFirstName1}
            founderLastName1={listing.founderLastName1}
            founderRole1={listing.founderRole1}
            founderLinkedIn1={listing.founderLinkedIn1}
            founderFirstName2={listing.founderFirstName2}
            founderLastName2={listing.founderLastName2}
            founderRole2={listing.founderRole2}
            founderLinkedIn2={listing.founderLinkedIn2}
            founderFirstName3={listing.founderFirstName3}
            founderLastName3={listing.founderLastName3}
            founderRole3={listing.founderRole3}
            founderLinkedIn3={listing.founderLinkedIn3}
            founderFirstName4={listing.founderFirstName4}
            founderLastName4={listing.founderLastName4}
            founderRole4={listing.founderRole4}
            founderLinkedIn4={listing.founderLinkedIn4}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClientProfile;
