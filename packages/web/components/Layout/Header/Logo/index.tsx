import { H1, ImageHolder, Img } from './Logo.styled';
import { IProps } from './Logo.types';

export default function Logo({ url, title }: IProps) {
  return (
    <ImageHolder>
      <Img src={url} />
      <H1>{title}</H1>
    </ImageHolder>
  );
}
