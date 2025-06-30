import { ContainerInner, ContainerOuter } from "@/app/components/Container";

// function NavLink({ href, children }) {
//   return (
//     <Link href={href} className="transition hover:text-red-500">
//       {children}
//     </Link>
//   )
// }

export function Footer({ navItems }) {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10">
          <ContainerInner>
            <p className="text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} Developed by GDG Lahore. All
              rights reserved.
            </p>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
