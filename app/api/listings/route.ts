import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    category1,
    category2,
    category3,
    location,
    startupRevenue,
    startupEBITDA,
    netIncome,
    imageSrc,
    price,
    title,
    description,
    startupWebsiteUrl,
    valuationExpectations,
    previousFundingRaised,
    lastRoundFundingRaised,
    lastRoundValuation,
    founderOwnership,
    employeeCount,
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
    preRevenue,
    productStatusOptions,
  } = body;

  const selectedProductStatus =
    productStatusOptions.find((option: { value: any }) => option.value)
      ?.value || "";

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category1,
      category2,
      category3,
      startupEBITDA: parseInt(startupEBITDA, 10),
      netIncome: parseInt(netIncome, 10),
      startupRevenue: parseInt(startupRevenue, 10),
      locationValue: location.value,
      price: parseInt(price, 10),
      startupWebsiteUrl,
      valuationExpectations: parseInt(valuationExpectations, 10),
      previousFundingRaised: parseInt(previousFundingRaised, 10),
      lastRoundFundingRaised: parseInt(lastRoundFundingRaised, 10),
      lastRoundValuation: parseInt(lastRoundValuation, 10),
      founderOwnership: parseInt(founderOwnership, 10),
      employeeCount: parseInt(employeeCount, 10),
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
      // productStatusOptions: selectedProductStatus,
      preRevenue: preRevenue === "true",
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
