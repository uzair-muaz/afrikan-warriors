import {
  IconAccessible,
  IconArrowRight,
  IconAward,
  IconBallFootball,
  IconBarbell,
  IconBarbellFilled,
  IconBolt,
  IconBuilding,
  IconBuildingCircus,
  IconCake,
  IconCalendarEvent,
  IconCheck,
  IconChevronDown,
  IconCircleCheck,
  IconCircleCheckFilled,
  IconCircleDashed,
  IconClock,
  IconConfetti,
  IconDeviceTv,
  IconFlame,
  IconFlameFilled,
  IconFriends,
  IconGlass,
  IconHeartHandshake,
  IconKarate,
  IconMail,
  IconMailFilled,
  IconMapPin,
  IconMapPinFilled,
  IconMasksTheater,
  IconMenu2,
  IconMenu2Filled,
  IconMicrophone,
  IconMoodSmile,
  IconMovie,
  IconMusic,
  IconPlayerPlay,
  IconPlayerPlayFilled,
  IconPlus,
  IconQuote,
  IconQuoteFilled,
  IconRun,
  IconSchool,
  IconSchoolFilled,
  IconShoppingCart,
  IconSpeakerphone,
  IconStar,
  IconStarFilled,
  IconStretching,
  IconSwords,
  IconTent,
  IconToolsKitchen2,
  IconTrees,
  IconUsers,
  IconUsersGroup,
  IconWaveSine,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/cn";

const outlineIcons = {
  accessibility_new: IconAccessible,
  add: IconPlus,
  adjust: IconCircleDashed,
  arrow_forward: IconArrowRight,
  attractions: IconBuildingCircus,
  bolt: IconBolt,
  business: IconBuilding,
  cake: IconCake,
  calendar_today: IconCalendarEvent,
  campaign: IconSpeakerphone,
  celebration: IconConfetti,
  check_circle: IconCircleCheck,
  close: IconX,
  directions_run: IconRun,
  diversity_3: IconFriends,
  done: IconCheck,
  expand_more: IconChevronDown,
  festival: IconTent,
  fitness_center: IconBarbell,
  format_quote: IconQuote,
  graphic_eq: IconWaveSine,
  group: IconUsers,
  groups: IconUsersGroup,
  local_bar: IconGlass,
  local_fire_department: IconFlame,
  location_on: IconMapPin,
  mail: IconMail,
  menu: IconMenu2,
  mic: IconMicrophone,
  mood: IconMoodSmile,
  movie: IconMovie,
  music_note: IconMusic,
  park: IconTrees,
  play_arrow: IconPlayerPlay,
  play_circle: IconPlayerPlay,
  restaurant: IconToolsKitchen2,
  schedule: IconClock,
  school: IconSchool,
  shopping_cart: IconShoppingCart,
  sports_gymnastics: IconStretching,
  sports_martial_arts: IconKarate,
  sports_soccer: IconBallFootball,
  star: IconStar,
  swords: IconSwords,
  theater_comedy: IconMasksTheater,
  tv: IconDeviceTv,
  volunteer_activism: IconHeartHandshake,
  workspace_premium: IconAward,
} as const;

export type IconName = keyof typeof outlineIcons;

const filledIcons = {
  check_circle: IconCircleCheckFilled,
  fitness_center: IconBarbellFilled,
  format_quote: IconQuoteFilled,
  local_fire_department: IconFlameFilled,
  location_on: IconMapPinFilled,
  mail: IconMailFilled,
  menu: IconMenu2Filled,
  play_arrow: IconPlayerPlayFilled,
  play_circle: IconPlayerPlayFilled,
  school: IconSchoolFilled,
  star: IconStarFilled,
} as const satisfies Partial<Record<IconName, (typeof outlineIcons)[IconName]>>;

type IconProps = {
  name: IconName;
  className?: string;
  filled?: boolean;
};

function hasTextSize(className?: string) {
  return Boolean(className && /\btext-(xs|sm|base|lg|xl|\d+xl|\[)/.test(className));
}

export function Icon({ name, className, filled }: IconProps) {
  const Cmp =
    (filled && name in filledIcons
      ? filledIcons[name as keyof typeof filledIcons]
      : undefined) ?? outlineIcons[name];

  return (
    <Cmp
      aria-hidden
      className={cn(
        "inline-block shrink-0 align-middle",
        !hasTextSize(className) && "text-2xl",
        className,
      )}
      size="1em"
      stroke={1.5}
    />
  );
}
