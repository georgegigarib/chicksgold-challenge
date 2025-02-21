import CODLogo from '@/assets/icons/callofduty-icon.svg';
import FortniteLogo from '@/assets/icons/fortnite-icon.svg';
import ValorantLogo from '@/assets/icons/valorant-icon.svg';

import CODEcexutionAnimation from '@/assets/images/cod-bo6-execution-animation.png';
import CODOperatorPack from '@/assets/images/cod-bo6-operator-pack.png';
import CODWeaponCamo from '@/assets/images/cod-bo6-weapon-camo.png';
import ValorantCharm from '@/assets/images/valorant-charm.jpg';
import ValorantPlayerCard from '@/assets/images/valorant-player-card.png';
import ValorantSpray from '@/assets/images/valorant-spray.webp';
import ValorantWeaponSkin from '@/assets/images/valorant-weapon-skin.png';
import FortniteCharacterSkin from '@/assets/images/fortnite-character-skin.webp';
import FortniteEmote from '@/assets/images/fortnite-emote.png';
import FortniteHarvestingTool from '@/assets/images/fortnite-harveist-tool.png';


export type SortOption = "low-high" | "high-low" | "a-z" | "z-a";


export interface Game {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface ItemType {
  name: string;
  image: string;
}

export interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  game: Game;
  itemType: string;
  inStock: boolean;
  onSale: boolean;
}

export const games: Game[] = [
  {
    id: 1,
    name: 'Call of Duty Black Ops 6',
    slug: 'cod-bo6',
    image: CODLogo,
  },
  {
    id: 2,
    name: 'Valorant',
    slug: 'valorant',
    image: ValorantLogo,
  },
  {
    id: 3,
    name: 'Fortnite',
    slug: 'fortnite',
    image: FortniteLogo,
  },
];

export const itemTypes: Record<string, ItemType[]> = {
  'cod-bo6': [
    { name: 'Camo', image: CODWeaponCamo },
    { name: 'Operator', image: CODOperatorPack },
    { name: 'Animation', image: CODEcexutionAnimation },
  ],
  valorant: [
    { name: 'Weapon Skin', image: ValorantWeaponSkin },
    { name: 'Card', image: ValorantPlayerCard },
    { name: 'Spray', image: ValorantSpray },
    { name: 'Charm', image: ValorantCharm },
  ],
  fortnite: [
    { name: 'Skin', image: FortniteCharacterSkin },
    { name: 'Emote', image: FortniteEmote },
    { name: 'Harvesting', image: FortniteHarvestingTool },
  ],
};

export const cards: Card[] = Array.from({ length: 100 }, (_, i) => {
  const game = games[Math.floor(Math.random() * games.length)];
  const gameItemTypes = itemTypes[game.slug];
  const item = gameItemTypes[Math.floor(Math.random() * gameItemTypes.length)];

  return {
    id: i + 1,
    image: item.image,
    title: item.name + i + 1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ${i + 1}`,
    price: parseFloat((Math.random() * 100).toFixed(2)),
    discountPrice: parseFloat((Math.random() * 100).toFixed(2)),
    game: game,
    itemType: item.name,
    inStock: true,
    onSale: Math.random() > 0.5,
  };
});
