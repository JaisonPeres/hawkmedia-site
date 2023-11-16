import Link from 'next/link';
import Button from './button/Button';
import { ColorShades } from './colors';
import Logo from './logo/Logo';

interface Navigation {
  title: string,
  path: string,
}

interface SiteHeaderProps {
  logo?: string;
  logoDark?: string;
  title: string;
  navigation?: Navigation[],
}

export default function SiteHeader({
  logo,
  logoDark,
  title,
  navigation,
}: SiteHeaderProps) {

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-black/50">
      <nav className="flex items-center justify-between p-4 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            {logo && <Logo className={logoDark && 'dark:hidden'} url={logo} srTitle={title} />}
            {logoDark && <Logo className="hidden dark:block" url={logoDark} srTitle={title} />}
            {!logo && !logoDark && title && <span className="dark:text-white" style={{userSelect: 'none'}}>{title}</span>}
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation?.map(({ title, path }) => (
            <Button 
              key={title} label={title}
              href={path}
              flat
              checkPath
              color="gray"
              colorShade={ColorShades.SHADE_900}
              className="dark:text-white dark:hover:bg-white/10 dark:hover:text-white" />
          ))}
        </div>
      </nav>
    </header>
  )
}
