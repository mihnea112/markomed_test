
import { Product, Supplier, TeamMember, Domain } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'leonardo-mini-dual',
    name: 'LEONARDO® Mini Dual',
    brand: 'BIOLITEC',
    category: 'Lasere Medicale',
    description: 'Cel mai versatil sistem laser medical compact de pe piață. Conceput pentru o gamă largă de aplicații chirurgicale minim invazive.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCav6UKEWPhY1q8XYHvcOwmn4bC-cRypv1cEBGHwp6qiS6yStDHO-t4U2btY8mn17OX6HoOZokUq13Q-eBexxOsR-EhWRZEmjK2wGPfUZfzpUIxhzPEtTZ7pwt9gOpiPmqWRZ1hcoovcS8GiNC36E6XEzQRz3iZSxZgz0NW0QLXJmOoE9FiddbLqdj1WLzcK4ow4-Xjz7hzYgmDpdVhLjDf52ycjcpEfIWOOOocpfwozE502hzJnS_FSRAWULZmUzpz4gn2GELlxLo',
    isNew: true,
    specs: {
      'Model': 'LEONARDO® Mini Dual',
      'Lungimi de undă': '980 nm / 1470 nm',
      'Putere (Max)': '10 Watt (980nm) / 12 Watt (1470nm)',
      'Dimensiuni': '6.0 cm x 22.0 cm x 17.0 cm',
      'Greutate': '0.9 kg'
    }
  },
  {
    id: 'mediostar-monolith',
    name: 'MeDioStar Monolith',
    brand: 'ASCLEPION',
    category: 'Lasere Medicale',
    description: 'Cel mai rapid și puternic laser diodă pentru epilare definitivă și tratamente vasculare.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB8myxBZpPkAft8Hw7ni_ilc3wH8LbPKT_TJT_PFm2vJyudFWRAZrkvom8l0ofj_t-Iu5574xB3SKU0c511NpCrsDI3XBDL7Ay1BOeX6L_DnU00Ngkuo5KGKTit9UbS_dd7p6OVGRmiDHpmjJVN625xj-3-DDJnZwvUIppqUNkliiCw0QYddxnxW38DHVBHn4NR93G2TeXBAI5tTpSszm6ZbR238E8tDo4Hw8osGHQV0Wyssp4K3QqyjN2vUZLGgxZkeXA9kAwiw8',
    price: 45000
  },
  {
    id: 'elicina-eco',
    name: 'Elicina Eco - Cremă cu Extract Melc',
    brand: 'ELICINA',
    category: 'Cosmetică',
    description: 'Pionieri în dermatocosmetică naturală, oferind soluții eficiente pentru regenerarea pielii.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyf-zN3EicQb6mNssYrvzEeFDucR63YPuXFhyEN6LQCgJD1W7EoVdcvY0ShgB9I765HJBCxSlfRPzYCcPrjv2uaKoiMafOQBxNI9Vtgow0dTvTvaDWr_sa0phOXqjWbH4VaromL1ZI-mq4mXq8Jse5X9xJV__eHFJZyybKVlK_lLHyGQC7oBSilfvKo4SnaAKMcA_LjdXmigwT0Giz0h5ePYBb05Yz9UP9wZUBVr2fVIVgxlWAC8mnOn9oQTgt_oqavNW2zszL42Q',
    price: 178,
    discount: 15
  },
  {
    id: 'lenny-grey',
    name: 'Lenny Grey - Căciulă Protecție',
    brand: 'RIBCAP',
    category: 'Protecție Craniană',
    description: 'Căști de protecție medicală revoluționare, combinând siguranța cu un design modern.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB_ylpfdz6WugAwmwDpnl0NjBN6yg-k3-hhS9LXYSLMZjBIug53ZkPzroMpH8zFlwlHAzZ6FNr_ZCRMEWCFnimaStxPeZFnfFuSH52e-G2gy4rsU8ECwcxsrnTRCZSfobDqFPl42bJnTPoLyvzCoRsBjIxwMlT5dhZ4HCrcbZ75sEi-AHyXRYJBLINqDKRfsJ-IA31LtYig04Cv-hfjsbI5KuH-4WSOVFIDFf35cBQkpF0nkb5VZku0yn1vHkOVdP9NGHlUfFdNbs',
    price: 650,
    isNew: true
  }
];

export const SUPPLIERS: Supplier[] = [
  {
    id: 'biolitec',
    name: 'Biolitec',
    country: 'Germania',
    description: 'Lider global în tehnologia laser medicală minim invazivă.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-E-Ky_WSnNTAUg64ncTFD2MFA7oT7UtLrhsjtqORdVXAne1MTNZ-jdFJ0uSolCvO9_Oge3n4uXaVhrKRfD31KdZTse0WoFJTCpM0yf8ulsU9ima0_ZDcLNfvkQM4hUtfMxn_hb5HindIRTqTvGTbcT6OoJaDb2cdAs9qxYZHI1U_Y01ofydy6NggBf_a0kpGwoW1_onRkQBB5IP_EjhiMcqTyMdxbviZRg6tsgYCCf4aKSqHFVw_ZorVZQySjSu2977RngKSqgTk',
    logoType: 'image'
  },
  {
    id: 'ribcap',
    name: 'Ribcap',
    country: 'Elveția',
    description: 'Căști de protecție medicală revoluționare.',
    logo: 'RIBCAP',
    logoType: 'text'
  },
  {
    id: 'elicina',
    name: 'Elicina',
    country: 'Chile',
    description: 'Pionieri în dermatocosmetică naturală cu extract de melc.',
    logo: 'elicina',
    logoType: 'text'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Milorad Avramovic',
    role: 'Fondator & Director General',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARN9Zno3xkJYJ2uewtnx0aYVFCLu23n5r8KWGD7-69UZZKEI-oTk4uIHP82qAdKZF9y6O6lb4eKUvb8ODyfNEf75oH_glBizWG6glURkye1GdVJjTbRvEU9I6EJQgPe3xSVx1yzV187G4vSMm9Ori8aGQ77vMmb6ANJib3NTzopXXi8tSsSLHFQza-tTsDeAyo5Xfy_piAGnIOn9MSoqCa9hNV7LQUNTdDjID_y3dPeUMm8TTsTs90-_aEVI_ikjkNrccjKURDhUs',
    quote: 'Credem că tehnologia trebuie să servească umanității. La MARKO MED, nu vindem doar lasere, ci construim punți către un viitor mai sănătos.',
    bio: 'Cu o experiență vastă în domeniul medical și o pasiune pentru tehnologia de ultimă oră, Dr. Avramovic a fondat MARKO MED pentru a umple golul dintre inovațiile internaționale și piața medicală din România.'
  }
];

export const DOMAINS: Domain[] = [
  { icon: 'spa', title: 'Dermatologie' },
  { icon: 'content_cut', title: 'Chirurgie Plastică' },
  { icon: 'local_hospital', title: 'Ginecologie' },
  { icon: 'biotech', title: 'Medicină Estetică' }
];
