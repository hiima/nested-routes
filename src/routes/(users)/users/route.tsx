import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

// 親は static route でなければならない。また、static route はパスがスラッシュで終わらない
// index route はパスがスラッシュで終わる
export const Route = createFileRoute("/(users)/users")({
  component: RouteComponent,
});

function RouteComponent() {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <div className="p-2">
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link to={`/users/${user}/edit`} params={{ userId: user }}>
              ・{user}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
