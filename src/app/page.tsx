import { Main } from '@/components/layout/Main';
import CookieBanner from '@/components/modules/analytics/CookieBanner';

export default async function HomePage() {

  return (
    <Main>
      <h1 className='text-white'>Home Page</h1>
      <CookieBanner />
    </Main>
  )
}
