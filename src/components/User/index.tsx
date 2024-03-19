import { User } from "@/types/User";

const User = ({ full_name: name, email }: User) => {
  return (
    <div className="card">
      <header className="card-header">
        <div className="px-5 py-2 is-hoverable">
          <p className="title is-5">{name}</p>
          <p className="subtitle is-6">{email}</p>
        </div>
      </header>
    </div>
  )
}

export default User;
