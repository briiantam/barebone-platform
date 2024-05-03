import HeartButton from "./HeartButton";

const ProfileHeading: React.FC<ProfileHeadingProps> = ({
  imageSrc,
  title,
  subtitle,
  price,
  startupWebsiteUrl,
  id,
  currentUser,
  valuationExpectations,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center rounded-lg p-4 sm:p-8 bg-slate-900 shadow-md">
      <div>
        <span className="block text-2xl sm:text-3xl text-white font-bold">
          {title}
        </span>
        {subtitle && (
          <span className="block text-l sm:text-xl text-slate-300">
            {subtitle}
          </span>
        )}
      </div>
      <div className="flex flex-col items-center">
        {startupWebsiteUrl && (
          <a
            href={
              startupWebsiteUrl.startsWith("http")
                ? startupWebsiteUrl
                : `https://${startupWebsiteUrl}`
            }
            className="text-sky-200 hover:underline mt-4 text-m text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileHeading;
