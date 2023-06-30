import User from '@/features/User';

export default function UserPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <User id={id} />;
}
