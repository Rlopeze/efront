type SizeInfo = {
  id: number;
  size: string;
  waist: number;
  insideLeg: number;
};

type SizeTable = {
  header: string[];
  data: SizeInfo[];
};

export const sizeTags: SizeTable = {
  header: ['SIZE', 'WAIST', 'INSIDE LEG'],
  data: [
    { id: 0, size: 'XS', waist: 66, insideLeg: 77.75 },
    { id: 1, size: 'S', waist: 71, insideLeg: 77.75 },
    { id: 2, size: 'M', waist: 76, insideLeg: 77.75 },
    { id: 3, size: 'L', waist: 81, insideLeg: 77.75 },
    { id: 4, size: 'XL', waist: 86, insideLeg: 77.75 },
    { id: 5, size: 'XXL', waist: 91, insideLeg: 77.75 },
  ],
};
