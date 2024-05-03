import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  createdAt?: string;
  category1?: string;
  category2?: string;
  category3?: string;
  startupEBITDA?: number;
  netIncome?: number;
  startupRevenue?: number;
  locationValue?: string;
  price?: number;
  startupWebsiteUrl?: string;
  valuationExpectations?: number;
  previousFundingRaised?: number;
  lastRoundFundingRaised?: number;
  lastRoundValuation?: number;
  founderOwnership?: number;
  employeeCount?: number;
  startupDetailedDescription?: string;
  founderFirstName1?: string;
  founderLastName1?: string;
  founderRole1?: string;
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
  preRevenue?: boolean;
  startDate?: string;
  endDate?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      title,
      description,
      imageSrc,
      createdAt,
      category1,
      category2,
      category3,
      startupEBITDA,
      netIncome,
      startupRevenue,
      locationValue,
      price,
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
      startDate,
      endDate,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (title) {
      query.title = { contains: title, mode: "insensitive" };
    }

    if (description) {
      query.description = { contains: description, mode: "insensitive" };
    }

    if (imageSrc) {
      query.imageSrc = imageSrc;
    }

    if (createdAt) {
      query.createdAt = createdAt;
    }

    if (category1) {
      query.category1 = category1;
    }

    if (category2) {
      query.category2 = category2;
    }

    if (category3) {
      query.category3 = category3;
    }

    if (startupEBITDA) {
      query.startupEBITDA = startupEBITDA;
    }

    if (netIncome) {
      query.netIncome = netIncome;
    }

    if (startupRevenue) {
      query.startupRevenue = startupRevenue;
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (price) {
      query.price = price;
    }

    if (startupWebsiteUrl) {
      query.startupWebsiteUrl = startupWebsiteUrl;
    }

    if (valuationExpectations) {
      query.valuationExpectations = valuationExpectations;
    }

    if (previousFundingRaised) {
      query.previousFundingRaised = previousFundingRaised;
    }

    if (lastRoundFundingRaised) {
      query.lastRoundFundingRaised = lastRoundFundingRaised;
    }

    if (lastRoundValuation) {
      query.lastRoundValuation = lastRoundValuation;
    }

    if (founderOwnership) {
      query.founderOwnership = founderOwnership;
    }

    if (employeeCount) {
      query.employeeCount = employeeCount;
    }

    if (startupDetailedDescription) {
      query.startupDetailedDescription = {
        contains: startupDetailedDescription,
        mode: "insensitive",
      };
    }

    if (founderFirstName1) {
      query.founderFirstName1 = {
        contains: founderFirstName1,
        mode: "insensitive",
      };
    }

    if (founderLastName1) {
      query.founderLastName1 = {
        contains: founderLastName1,
        mode: "insensitive",
      };
    }

    if (founderRole1) {
      query.founderRole1 = { contains: founderRole1, mode: "insensitive" };
    }

    if (founderLinkedIn1) {
      query.founderLinkedIn1 = founderLinkedIn1;
    }

    if (founderFirstName2) {
      query.founderFirstName2 = {
        contains: founderFirstName2,
        mode: "insensitive",
      };
    }

    if (founderLastName2) {
      query.founderLastName2 = {
        contains: founderLastName2,
        mode: "insensitive",
      };
    }

    if (founderRole2) {
      query.founderRole2 = { contains: founderRole2, mode: "insensitive" };
    }

    if (founderLinkedIn2) {
      query.founderLinkedIn2 = founderLinkedIn2;
    }

    if (founderFirstName3) {
      query.founderFirstName3 = {
        contains: founderFirstName3,
        mode: "insensitive",
      };
    }

    if (founderLastName3) {
      query.founderLastName3 = {
        contains: founderLastName3,
        mode: "insensitive",
      };
    }

    if (founderRole3) {
      query.founderRole3 = { contains: founderRole3, mode: "insensitive" };
    }

    if (founderLinkedIn3) {
      query.founderLinkedIn3 = founderLinkedIn3;
    }

    if (founderFirstName4) {
      query.founderFirstName4 = {
        contains: founderFirstName4,
        mode: "insensitive",
      };
    }

    if (founderLastName4) {
      query.founderLastName4 = {
        contains: founderLastName4,
        mode: "insensitive",
      };
    }

    if (founderRole4) {
      query.founderRole4 = { contains: founderRole4, mode: "insensitive" };
    }

    if (founderLinkedIn4) {
      query.founderLinkedIn4 = founderLinkedIn4;
    }

    if (preRevenue !== undefined) {
      query.preRevenue = preRevenue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
