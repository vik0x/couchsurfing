import { AppHeader } from "@/types/AppHeader";
import Link from "next/link";

const Header = ({title, subtitle}:AppHeader ) => <section className="hero">
<div className="hero-body">
  <p className="title is-1"><Link href="/">{ title }</Link></p>
  <p className="subtitle is-4">{ subtitle }</p>
</div>
</section>
export default Header;
