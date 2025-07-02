import { ContainerInner, ContainerOuter } from "@/app/components/Container";
import Link from "next/link";

// function NavLink({ href, children }) {
//   return (
//     <Link href={href} className="transition hover:text-red-500">
//       {children}
//     </Link>
//   )
// }

export function Footer() {
  return (
    <footer className="mt-30 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10">
          <ContainerInner>
            <p className="text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} Developed with ❤️ by{" "}
              <Link
                href="https://www.gdglahore.com"
                className="underline"
                target="_blank"
              >
                {" "}
                GDG Lahore
              </Link>
              . All rights reserved.
            </p>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
