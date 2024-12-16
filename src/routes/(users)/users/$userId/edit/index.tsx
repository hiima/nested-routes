import { createFileRoute } from "@tanstack/react-router";

// 子どもは index route でも良い
export const Route = createFileRoute("/(users)/users/$userId/edit/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();
  return <div>Hello {`${userId}`} !</div>;
}
