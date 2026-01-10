export default function TopCropImage({
  src,
  alt,
  heightClass = "h-[60vh] md:h-[65vh]",
  maxWidthClass = "max-w-3xl",
}) {
  return (
    <div
      className={`relative mx-auto w-full ${maxWidthClass} ${heightClass}
                  rounded-2xl border border-base-300 overflow-hidden bg-base-200 shadow-lg`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-scale-down bg-base-200"
      />
    </div>
  );
}
