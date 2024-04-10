interface FinderItemProps {
  icon: string;
  alt: string;
  label: string;
}

export const FinderItem = ({ icon, alt, label }: FinderItemProps) => {
  return (
    <div className="flex w-20 flex-col items-center gap-2">
      <img src={icon} alt={alt} className="h-16 w-16 rounded" />
      <p className="text-center text-sm text-[#ddddde]">{label}</p>
    </div>
  );
};
