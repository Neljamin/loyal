"use client";

type LoyaltyCardProps = {
  companyName: string;
  image: string;
  backgroundColor?: string;
};

export const LoyaltyCard = ({
  companyName,
  image,
  backgroundColor,
}: LoyaltyCardProps) => {
  return (
    <div className="h-full bg-white overflow-hidden">
      <h2 className="font-bold h-10 flex items-center justify-center">
        {companyName}
      </h2>
      <div className="h-[100%] relative bg-gray-100">
        <img
          src={image}
          alt="Card Image"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};
