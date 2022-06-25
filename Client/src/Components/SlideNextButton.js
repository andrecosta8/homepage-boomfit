import { Button } from 'react-bootstrap';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <Button variant="danger" onClick={() => swiper.slideNext()}>Slide to the next slide</Button>
  );
}