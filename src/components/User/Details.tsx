import { User as UserType } from "@/types/User";
import { ReactElement } from "react";
import User from ".";
import Link from "next/link";

const Details = ({ id = 0, full_name = "", phone = "", email = "", friends = [] }: UserType): ReactElement => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{full_name} <span className="subtitle">#{id}</span></p>
        <p className="subtitle">Phone: {phone}</p>
        <p className="subtitle">Email: {email}</p>
        <div className="content">
          <p>Friends: ({friends.length})</p>
          {friends.length > 0 && (<div className="columns is-multiline">
            {friends.map((item) => (
              typeof item !== 'number' && <div className="column is-3" key={item.id}>
                <Link href={`/user/${item.id}`}>
                  <User {...item} />
                </Link>
              </div>
            ))}
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Details;
