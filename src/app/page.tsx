import User from "@/components/User";
import { getUsers } from "@/services/user.service";
import Link from "next/link";
import { Suspense, use } from "react";


export default function Home() {
  const users = use(getUsers());

  return (
    <Suspense fallback="Loading">
      <div className="box">
        <p className="title is-3">Users</p>
        <div className="columns is-multiline">
          {users.map((item) => <div className="column is-3" key={item.id}>
            <Link href={`/user/${item.id}`} className="hoverable"><User {...item} /></Link>
          </div>)}
        </div>
      </div>
    </Suspense>
  );
}
