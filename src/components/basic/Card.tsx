import Image from "next/image";
import HeroIcon from "./HeroIcon";
import Badge from "./Badge";
import Button from "./button/Button";
import WrapperLink from "./WrapperLink";
import { backgroundColors, textColors, validatedColor } from "./colors";

export interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  thumbnail?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  actions?: {
    label: string;
    url: string;
    icon?: string;
    color?: string;
    rounded?: boolean;
    bordered?: boolean;
    flat?: boolean;
  }[];
  link?: string;
  className?: string;
  tags?: string[];
  children?: JSX.Element;
  color?: string;
}

export default function Card ({
  title,
  description,
  icon,
  thumbnail,
  actions,
  className,
  tags,
  children,
  link,
  color,
}: CardProps) {

  const DEFAULT_IMAGE_WIDTH = 300;
  const DEFAULT_IMAGE_HEIGHT = 300;

  const MEDIA_HEIGHT = '200px'

  const defaultBackdropColor = validatedColor(color)
  const defaultBackdropBackgroundColor = backgroundColors[defaultBackdropColor][600]

  const badgeTextColor = textColors[defaultBackdropColor][50]
  const badgeBackgroundColor = backgroundColors[defaultBackdropColor][800]

  const heroIconTextColor = textColors[defaultBackdropColor][600]

  const cardClasses = [
    'max-w-sm',
    'overflow-hidden',
    'shadow-lg',
    'bg-white',
    'dark:bg-gray-800',
    'dark:text-white',
    'relative',
    'w-full',
    'my-4',
    'md:w-1/3',
    'lg:my-4',
    'lg:w-1/3',
    'group',
    className,
  ].join(' ')

  const backdropClasses = [
    'transition',
    'ease-in',
    'duration-300',
    'absolute',
    'top-0',
    'left-0',
    'right-0',
    'w-full',
    'h-full',
    'grid',
    'place-items-center',
    'bg-opacity-60',
    'group-hover:bg-opacity-0',
    defaultBackdropBackgroundColor,
  ].join(' ')

  const badgeClasses = [
    badgeTextColor,
    badgeBackgroundColor
  ].join(' ')

  const heroIconClasses = [
    'transition',
    'ease-in',
    'duration-300',
    'card-icon',
    'w-16',
    heroIconTextColor
  ].join(' ')

  function maxTextLength (text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    }
    return text
  }

  function isFullText () {
    return !thumbnail && !icon
  }

  function contentHeight () {
    return isFullText() ? '100%' : MEDIA_HEIGHT
  }


  return (
    <WrapperLink link={link} className={cardClasses}>
      <>
        <div className="card-image-container relative col-span-3 w-full">
          {!!thumbnail ? (
            <>
              <Image
                style={{ height: MEDIA_HEIGHT}}
                className={`card-image w-full object-cover`}
                src={thumbnail.src}
                alt={thumbnail.alt}
                width={thumbnail.width || DEFAULT_IMAGE_WIDTH}
                height={thumbnail.height || DEFAULT_IMAGE_HEIGHT}
                loading="lazy"
              />
              {icon && (
                <div
                  className={backdropClasses}
                >
                  <HeroIcon
                    name={icon}
                    className="
                      transition ease-in-out duration-300
                      card-icon w-16 text-white
                      group-hover:opacity-0
                      group-hover:-translate-y-2
                      group-hover:transform
                    "
                  />
                </div>
              )}
            </>
            ) : !!icon && (
            <>
              <div className="card-image w-full" style={{ height: MEDIA_HEIGHT}}>
                {icon && (
                  <div
                    className="
                    transition ease-in duration-300
                    absolute top-0 left-0 right-0
                    w-full h-full
                    grid place-items-center"
                  >
                    <HeroIcon
                      name={icon}
                      className={heroIconClasses}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {!!tags && (
          <div className="absolute top-4 right-4">
            {tags.map((tag, index) => (
              <Badge className={badgeClasses} key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div
          className="p-4 relative"
          style={{
            minHeight: contentHeight(),
            paddingTop: 
              tags?.length && (!icon && !thumbnail)
              ? '58px'
              : undefined
          }}
        >
          <div className="grid content-between h-full">
            {!!title && (
              <h3 className="col-span-3 w-full my-4 text-2xl">
                {maxTextLength(title, isFullText() ? 60 : 30)}
              </h3>
            )}

            {!!description && (
              <p className="col-span-3 w-full card-description">
                {maxTextLength(
                  description,
                  isFullText()
                  ? 230
                  : actions?.length
                    ? 200
                    : 150)}
              </p>
            )}

            {!!children && (
              <div className="col-span-3 w-full card-content">{children}</div>
            )}

            {!!actions && (
              <div className="col-span-3 w-full card-actions mt-4">
                {actions.map((action, index) => (
                  <Button
                    color={action.color}
                    bordered={action.bordered}
                    rounded={action.rounded}
                    flat={action.flat}
                    key={index}
                    label={action.label}
                    href={action.url}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    </WrapperLink>
  )
}