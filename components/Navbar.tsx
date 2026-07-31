import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { NavItems, SingleNavItem } from 'types';
import { media } from 'utils/media';
import Button from './Button';
import Container from './Container';
import Drawer from './Drawer';
import { HamburgerIcon } from './HamburgerIcon';
import Logo from './Logo';

const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = 'up' | 'down' | 'none';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');

  let lastScrollY = useRef(0);
  const lastRoute = useRef('');
  const stepSize = useRef(50);

  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection('none');
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none');
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down');
    lastScrollY.current = currentScrollY;
  }

  const isNavbarHidden = scrollingDirection === 'down';
  const isTransparent = scrollingDirection === 'none';

  return (
    <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </NextLink>
        <NavItemList>
          {items.map((singleItem) => (
            <NavItem key={singleItem.href} {...singleItem} />
          ))}
        </NavItemList>
        <ColorSwitcherContainer>
          <ColorSwitcher />
        </ColorSwitcherContainer>
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined, highlighted, subItems }: SingleNavItem) {
  const { setIsModalOpened } = useNewsletterModalContext();
  const [isOpen, setIsOpen] = useState(false);

  function showNewsletterModal() {
    setIsModalOpened(true);
  }

  if (outlined) {
    return <CustomButton onClick={showNewsletterModal}>{title}</CustomButton>;
  }

  const hasSubItems = subItems && subItems.length > 0;

  return (
    <NavItemWrapper
      outlined={outlined}
      highlighted={highlighted}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NextLink href={href} passHref>
        <NavLink highlighted={highlighted}>
          {title}
          {hasSubItems && (
            <ChevronIcon viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </ChevronIcon>
          )}
        </NavLink>
      </NextLink>
      {hasSubItems && isOpen && (
        <DropdownMenu>
          {subItems.map((sub) => (
            <NextLink key={sub.href} href={sub.href} passHref>
              <DropdownItem>{sub.title}</DropdownItem>
            </NextLink>
          ))}
        </DropdownMenu>
      )}
    </NavItemWrapper>
  );
}

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
  display: flex;
  align-items: center;
  list-style: none;

  ${media('<desktop')} {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

const ChevronIcon = styled.svg`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.4rem;
  transition: transform 0.2s ease-in-out;
`;

const NavLink = styled.a<{ highlighted?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(p) => (p.highlighted ? '#ffffff !important' : 'rgb(var(--text))')};
  background-color: ${(p) => (p.highlighted ? '#166534' : 'transparent')};
  border-radius: 0.6rem;
  padding: 0.75rem 1.4rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(p) => (p.highlighted ? '#ffffff !important' : 'rgb(var(--brandBlue, 0, 106, 173))')};
    background-color: ${(p) => (p.highlighted ? '#14532d' : 'rgba(53, 169, 239, 0.08)')};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 18rem;
  background: rgb(var(--cardBackground, 255, 255, 255));
  border: 1.5px solid rgba(53, 169, 239, 0.25);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border-radius: 0.8rem;
  padding: 0.8rem 0;
  z-index: 100;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.8rem 1.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: rgb(var(--text));
  text-decoration: none;
  text-transform: none;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(53, 169, 239, 0.12);
    color: rgb(var(--brandBlue, 0, 106, 173));
  }
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  position: relative;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;
