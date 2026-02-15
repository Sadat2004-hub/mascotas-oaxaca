import { getAllNegocios } from '@/lib/sanity.queries';
import HomeClient from '@/components/HomeClient';

export default async function Home() {
  const sanityNegocios = await getAllNegocios();
  const featuredBusinesses = (sanityNegocios || []).slice(0, 3);

  return <HomeClient featuredBusinesses={featuredBusinesses} />;
}
