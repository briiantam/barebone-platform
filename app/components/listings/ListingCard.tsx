"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { IoRocketOutline } from "react-icons/io5";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import HeartButton from "../HeartButton";
import Button from "../Button";
import ClientOnly from "../ClientOnly";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const categories = useMemo(() => {
    const categoryArray = [data.category1, data.category2, data.category3];
    return categoryArray.filter(Boolean);
  }, [data.category1, data.category2, data.category3]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="overflow-hidden rounded-xl border border-gray-200"
    >
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="flex-none">
          <IoRocketOutline className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-l font-medium leading-6 text-gray-900">
          {data.title}
        </div>
        <div className="ml-auto">
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="w-full h-20 rounded-md overflow-hidden">
          <p className="text-m text-gray-500 ">{data.description}</p>
        </div>
        <dl className="mt-6 space-y-4">
          <div className="flex justify-between gap-x-4">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="text-sm text-gray-900">{location?.label}</dd>
          </div>
          <div className="flex justify-between gap-x-4">
            <dt className="text-sm font-medium text-gray-500">
              Fundraising Amount (US$)
            </dt>
            <dd className="text-sm text-gray-900">
              $ {data.price.toLocaleString()}
            </dd>
          </div>
          <div className="flex justify-between gap-x-4">
            <dt className="text-sm font-medium text-gray-500">
              Valuation Expectations (US$)
            </dt>
            <dd className="text-sm text-gray-900">
              ${" "}
              {data.valuationExpectations
                ? data.valuationExpectations.toLocaleString()
                : ""}
            </dd>
          </div>
        </dl>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500">Categories</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      {onAction && actionLabel && (
        <div className="px-6 py-4">
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        </div>
      )}
    </div>
  );
};

export default ListingCard;
