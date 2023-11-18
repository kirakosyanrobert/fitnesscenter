import { gyms } from '@/mock/gyms';
import { GymDetails } from '@/views/GymDetails';

export function generateStaticParams() {
  return gyms.map(g => ({ slug: g.instagramNick }));
}
 
export default function GymPage({ params }: { params: { slug: string } }) {
  return <GymDetails slug={params.slug} />;
}