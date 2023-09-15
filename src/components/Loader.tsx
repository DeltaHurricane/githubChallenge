import ReactLoading from 'react-loading';

type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

export const Loader = ({ type, color = 'black', height = 300, width =150 }: {type?: LoadingType, color?:string, height?:number, width?:number}) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
);
