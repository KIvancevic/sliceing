import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import useScrollListener from './ScrollListener';
import asynclogoblacksvg from '../../public/asynclogoblacksvg.svg';
import asynclogosvgwhite from '../../public/asynclogosvgwhite.svg';
import{ BurgerBar }from './BurgerBar';
import Link from 'next/link';

interface Props {
  white?: boolean;
}

export const Navbar: React.FC<Props> = ({
  white
}) => {

  const [isVisible, setIsVisible] = useState(true)
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      setIsVisible(false);

      else { setIsVisible(true)};

  }, [scroll.y, scroll.lastY]);

  console.log('isVisible', isVisible)
  return (
    <div
      className='navInServices'
      style={{
        top: !isVisible ? '-30px' : '',
        zIndex: '1'
      }}
    >
      <Link href="/" passHref>
        <Image
          src={white ? asynclogosvgwhite : asynclogoblacksvg}
          alt="asynclogoblacksvg"
        />
      </Link>
      <BurgerBar />
    </div>
  )
}
