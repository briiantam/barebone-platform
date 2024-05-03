"use client";

import HeartButton from "../HeartButton";
import { SafeUser } from "@/app/types";

interface MetricsProps {
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
  locationValue?: string;
  preRevenue?: boolean;
  netIncome?: number;
  id: string;
  currentUser: SafeUser | null;
  price: number;
}

const Metrics: React.FC<MetricsProps> = ({
  id,
  currentUser,
  startupEBITDA,
  startupRevenue,
  founderOwnership,
  employeeCount,
  previousFundingRaised,
  lastRoundFundingRaised,
  lastRoundValuation,
  valuationExpectations,
  category1,
  category2,
  category3,
  locationValue,
  preRevenue,
  netIncome,
  price,
}) => {
  const currentFundraisingRound = [
    price && {
      name: "Fundraising Amount",
      stat: `$${price.toLocaleString()}`,
    },
    valuationExpectations && {
      name: "Valuation Expectations",
      stat: `$${valuationExpectations.toLocaleString()}`,
    },
    { name: "Current Founder Ownership", stat: `${founderOwnership}%` },
  ].filter(Boolean);

  const keyInfo = [
    {
      name: "Company Focus",
      stat: [category1, category2, category3].filter(Boolean).join(", "),
    },
    locationValue && { name: "Location", stat: locationValue },
    {
      name: "Team Size",
      stat: `${employeeCount.toLocaleString()} Employee`,
    },
  ].filter(Boolean);

  const financials = !preRevenue
    ? [
        startupRevenue && {
          name: "Revenue",
          stat: `$${startupRevenue.toLocaleString()}`,
        },
        startupEBITDA && {
          name: "EBITDA",
          stat: `$${startupEBITDA.toLocaleString()}`,
        },
        netIncome && {
          name: "Net Income",
          stat: `$${netIncome.toLocaleString()}`,
        },
      ].filter(Boolean)
    : [];

  const pastFundraisingDetails = [
    previousFundingRaised && {
      name: "Previous Funding Raised",
      stat: `$${previousFundingRaised.toLocaleString()}`,
    },
    lastRoundFundingRaised && {
      name: "Last Round Funding Raised",
      stat: `$${lastRoundFundingRaised.toLocaleString()}`,
    },
    lastRoundValuation && {
      name: "Last Round Valuation",
      stat: `$${lastRoundValuation.toLocaleString()}`,
    },
  ].filter(Boolean);

  return (
    <div>
      {/* <div className="  relative">
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div> */}
      {keyInfo.length > 0 && (
        <div className="mb-8 mt-10">
          <h2 className="text-xl font-semibold text-black mb-6">
            Key Company Info
          </h2>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {keyInfo.map((info) => (
              <div
                key={info?.name} // Add null check for 'info'
                className="overflow-hidden rounded-lg bg-white px-2 py-3 shadow"
              >
                <dt className="truncate text-xs font-medium text-gray-500">
                  {info?.name} // Add null check for 'info'
                </dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                  {info?.stat} // Add null check for 'info'
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {currentFundraisingRound.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-6">
            Current Fundraising Round
          </h2>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {currentFundraisingRound.map((item) => (
              <div
                key={item?.name} // Add null check for 'item'
                className="overflow-hidden rounded-lg bg-white px-2 py-3 shadow"
              >
                <dt className="truncate text-xs font-medium text-gray-500">
                  {item?.name}
                </dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                  {item?.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {financials.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-6">
            Financials (for the past year)
          </h2>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {financials.map((item) => (
              <div
                key={item?.name} // Add null check for 'item'
                className="overflow-hidden rounded-lg bg-white px-2 py-3 shadow"
              >
                <dt className="truncate text-xs font-medium text-gray-500">
                  {item?.name}
                </dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                  {item?.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {pastFundraisingDetails.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-6">
            Past Fundraising Details
          </h2>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {pastFundraisingDetails.map((item) => (
              <div
                key={item?.name} // Add null check for 'item'
                className="overflow-hidden rounded-lg bg-white px-2 py-3 shadow"
              >
                <dt className="truncate text-xs font-medium text-gray-500">
                  {item?.name}
                </dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                  {item?.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

export default Metrics;
