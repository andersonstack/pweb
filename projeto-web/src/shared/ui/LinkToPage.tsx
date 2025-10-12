import Link from "next/link";
import { memo } from "react";

interface LinkToPage {
  route: string;
  label: string;
}

export const LinkToPage = memo(function LinkToPage({
  route,
  label,
}: LinkToPage) {
  console.log("Mounter Link");
  return (
    <Link
      href={route}
      className="bg-primary text-[1.5rem] px-[1rem] cursor-pointer"
    >
      {label}
    </Link>
  );
});

// export default function LinkToPage({ route, label }: LinkToPage) {
//     console.log("Mounter link");
//   return (
//     <Link
//       href={route}
//       className="bg-primary text-[1.5rem] px-[1rem] cursor-pointer"
//     >
//       {label}
//     </Link>
//   );
// }
